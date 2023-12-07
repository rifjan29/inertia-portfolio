import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        // ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-build-classic' ) } )
    ],
});
