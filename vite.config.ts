import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import { version } from './package.json';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/',
    build: {
      minify: true,
      sourcemap: false,
    },
    define: {
      __APP_VERSION__: JSON.stringify(version),
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    server: {
      port: 3000,
    },

    plugins: [react(), splitVendorChunkPlugin()],
  };
});
