import netlify from '@sveltejs/adapter-netlify';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify(),
		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components/')
				}
			}
		}
	}
};

export default config;
