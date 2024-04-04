import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import packageJson from './package.json';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version),
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    server: {
      port: 3000,
    },

    plugins: [react()],
  };
});
