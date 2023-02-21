import devConfig from "./config/dev.config";
import prodConfig from "./config/prod.config";
import enUS from "./locales/en-US";
import frFR from "./locales/fr-FR";

const isProd = process.env.VERCEL_ENV === "production";
const baseUrl = isProd
	? "https://nuxtjs-template.vercel.app"
	: `https://${process.env.VERCEL_URL || "localhost:3000"}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	appConfig: isProd ? prodConfig : devConfig,
	srcDir: "src",
	css: ["@unocss/reset/tailwind.css", "@/styles/main.scss"],
	modules: ["@vueuse/nuxt", "@nuxtjs/i18n", "@pinia/nuxt", "nuxt-icon"],
	runtimeConfig: {
		public: {
			baseUrl
		}
	},
	i18n: {
		baseUrl,
		locales: [
			{ code: "fr", iso: "fr-FR", name: "Français" },
			{ code: "en", iso: "en-US", name: "English" }
		],
		defaultLocale: "en",
		detectBrowserLanguage: {
			useCookie: true
		},
		vueI18n: {
			legacy: false,
			locale: "en",
			messages: {
				en: enUS,
				fr: frFR
			}
		}
	},
	nitro: {
		handlers: process.env.MOCK
			? [{ route: "", handler: "./__mocks__/mocks.handlers" }]
			: undefined,
		prerender: {
			routes: ["/", "/fr", "/get-started", "/fr/demarrage"]
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "src/styles/abstract" as *;'
				}
			}
		}
	}
});
