// conditional sk adapter from https://www.ryanfiller.com/blog/tips/conditional-sveltekit-adapters
import dotenv from 'dotenv'
dotenv.config()

import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: process.env.ADAPTER === 'static'
			? adapterStatic({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true})
			: adapterNode({})
	}
};
