import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // 설치한 패키지나 자동으로 만들어지는 파일은 검사하지 않기
  globalIgnores(['dist/**', 'build/**', 'coverage/**']),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    // 안 쓰는 변수 같은 실수를 잡도록 JS, TS 기본 추천 규칙 사용
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      // 브라우저와 Node.js 전역 변수를 모두 인식하도록 설정
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      // 외부 패키지, path alias, 상대경로, 스타일 순서로 import 자동 정렬
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          newlinesBetween: 1,
          groups: [
            ['type-builtin', 'type-external'],
            ['value-builtin', 'value-external'],
            'tsconfig-path',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect-style',
            'side-effect',
            'unknown',
          ],
          tsconfig: {
            rootDir: '.',
            filename: 'tsconfig.app.json',
          },
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    // .ts로 작성한 커스텀 Hook을 포함해 React Hook 사용 규칙 검사
    extends: [reactHooks.configs.flat.recommended],
  },
  {
    files: ['**/*.{jsx,tsx}'],
    // JSX와 TSX에서 Vite Fast Refresh 호환성 및 self-closing 형식 검사
    extends: [reactRefresh.configs.vite],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // children이 없는 JSX 요소는 self-closing 형태로 작성하고 자동 수정
      '@stylistic/jsx-self-closing-comp': 'error',
    },
  },
  // 코드 정리는 Prettier에 맡기고, ESLint와 겹치는 규칙은 마지막에 끄기
  prettier,
]);
