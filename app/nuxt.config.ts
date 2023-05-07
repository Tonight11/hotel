// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: { pageTransition: { name: 'page', mode: 'out-in' } },
	modules: ['nuxt-quasar-ui', '@nuxt/image-edge'],
	image: {
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1080,
		},
	},
	quasar: {
		extras: {
			fontIcons: ['material-icons'],
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/styles/vars.scss";',
				},
			},
		},
	},
});
