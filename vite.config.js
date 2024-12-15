import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/js/site.js',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
        // vue2(),
    ],
    build: {
        assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'], // Optional, explicitly include font extensions.
    },
    resolve: {
        alias: {
            '@': '/resources', // Optional, allows for cleaner imports if you need to reference assets directly.
        },
    },
});
