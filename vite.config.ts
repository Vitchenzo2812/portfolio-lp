import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atom': '/src/shared/atom',
      '@organism': '/src/shared/organism',
      '@template': '/src/shared/template',
      '@styles': '/src/styles',
      '@context': '/src/context',
    }
  }
})
