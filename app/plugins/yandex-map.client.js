import plugin from 'vue-yandex-maps';
import { defineNuxtPlugin } from 'nuxt/app';

const settings = {
	apiKey: 'b1bf2182-fcb0-42f6-8d37-c196fb54a377',
	lang: 'ru_RU', // Используемый язык
	coordorder: 'latlong', // Порядок задания географических координат
	debug: false, // Режим отладки
	version: '2.1', // Версия Я.Кар
};

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(plugin, settings);
});
