import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite 환경설정
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 현재 port5173 으로 실행되는데 3000으로 port 바꿈
  server:{
    port: 3000,
  },
  // 경로 참조할 대 @ 사용하면 src 밑에있는 것 참조
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});