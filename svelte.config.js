import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import sass from 'sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			implementation: sass,
			prependData: '@use \'./src/lib/styles/_variables\';',
		},
	}),

	kit: {
		alias: {
			$lib: 'src/lib',
		},
		adapter: adapter(),
	},
};

export default config;