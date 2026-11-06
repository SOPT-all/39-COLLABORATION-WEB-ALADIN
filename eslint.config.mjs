import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 설치한 패키지나 자동으로 만들어지는 파일은 검사하지 않기
  { ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'] },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    // 안 쓰는 변수 같은 실수를 잡도록 JS, TS 기본 추천 규칙 사용
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      // window, document, process 등을 선언하지 않았다는 오류가 뜨지 않도록 설정
      globals: { ...globals.browser, ...globals.node },
      // JSX 문법도 읽을 수 있게 설정 (React 관련 검사 규칙은 따로 추가해야 함)
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // 코드 정리는 Prettier에 맡기고, ESLint와 규칙이 겹치지 않게 마지막에 넣기
  prettier,
);
