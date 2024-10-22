import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', // Địa chỉ của backend (GraphQL server)
        changeOrigin: true, // Thay đổi origin của host header
        secure: false, // Nếu backend không sử dụng HTTPS, đặt là false
        pathRewrite: {
          '^/graphql': '', // Xóa '/graphql' khỏi đường dẫn khi gửi yêu cầu
        },
      },
    },
  },
  plugins: [react()],
});
