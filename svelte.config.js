import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
        },
		prerender: {
        	handleMissingId: 'warn',
            handleHttpError: 'warn'
    	}
    }
};

export default config;