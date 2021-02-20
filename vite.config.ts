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
        hmr: {
            overlay: true,
        }
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@nodepath': path.resolve(__dirname, './node_modules')
    },
    build:{
        outDir: 'dist',
        assetsDir: 'cool-vue-vite-cli/dist/assets/',
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
    },
    optimizeDeps: {
        include: [],
    },
    plugins: [vue()],
});