import {
    defineConfig
} from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    server: {
        port: 8080,
        https: false,
        open: false,
        proxy: {
            // '/api': 'http://0.0.0.0:8087',
        },
        hmr: {
            overlay: true,
        }
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
        // '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        // '@assets': path.resolve(__dirname, './src/assets'),
        '@nodepath': path.resolve(__dirname, './node_modules')
    },
    optimizeDeps: {
        include: [],
    },
    plugins: [vue()],
});