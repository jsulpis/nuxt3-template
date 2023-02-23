import { defineStore } from "pinia";

export type FeatureSet = {
	title: string;
	description: string;
	icons: {
		name: string;
		label: string;
	}[];
};

const featuresData = [
	{
		name: "core",
		icons: [
			{ name: "logos:nuxt-icon", label: "Nuxt 3" },
			{ name: "logos:vitejs", label: "Vite" },
			{ name: "Pinia", label: "Pinia" },
			{ name: "logos:vueuse", label: "VueUse" },
			{ name: "logos:sass", label: "Sass" }
		]
	},
	{
		name: "staticChecks",
		icons: [
			{ name: "logos:typescript-icon", label: "Typescript" },
			{ name: "logos:eslint", label: "Eslint" },
			{ name: "logos:prettier", label: "Prettier" }
		]
	},
	{
		name: "testing",
		icons: [{ name: "logos:playwright", label: "Playwright" }]
	},
	{
		name: "seo",
		icons: [
			{ name: "NuxtI18n", label: "@nuxtjs/i18n" },
			{ name: "NuxtRobots", label: "@nuxtjs/robots" }
		]
	},
	{
		name: "ciCd",
		icons: [
			{ name: "simple-icons:vercel", label: "Vercel" },
			{ name: "logos:github-actions", label: "GitHub Actions" }
		]
	},
	{
		name: "analytics",
		icons: [{ name: "Plausible", label: "Plausible" }]
	}
];

export const useFeatures = defineStore("features", () => {
	const { t } = useI18n();

	const features = computed(() =>
		featuresData.map(({ name, icons }) => ({
			title: t(`features.${name}.title`),
			description: t(`features.${name}.description`),
			icons
		}))
	);

	return { features };
});
