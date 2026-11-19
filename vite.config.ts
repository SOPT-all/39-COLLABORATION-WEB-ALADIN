import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // tsconfig의 compilerOptions.paths를 Vite가 alias로 직접 사용 -> alias 이중 관리 방지
    // 이 옵션이 없으면 build는 통과해도 dev 서버에서 alias import를 찾지 못함
    tsconfigPaths: true,
  },
});
