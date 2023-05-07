// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: { pageTransition: { name: 'page', mode: 'out-in' } },
	modules: ['nuxt-quasar-ui'],
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
