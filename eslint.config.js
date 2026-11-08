import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

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
  },
  {
    files: ['**/*.{jsx,tsx}'],
    // Vite React 프로젝트에서 Hook 사용과 Fast Refresh 호환성 검사
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
  },
  // 코드 정리는 Prettier에 맡기고, ESLint와 겹치는 규칙은 마지막에 끄기
  prettier,
]);
