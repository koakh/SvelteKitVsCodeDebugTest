import { sveltekit } from '@sveltejs/kit/vite';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), nodeLoaderPlugin()]
});
