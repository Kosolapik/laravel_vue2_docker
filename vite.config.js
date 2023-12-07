import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue2(),

    ],
    server: {
        host: true,
        hmr: { host: 'localhost', },
        port: 5173,
        strictPort: true
    }
});
