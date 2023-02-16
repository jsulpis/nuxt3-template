export default {
	nav: {
		index: "Home",
		getStarted: "Get started",
		dynamicPage: "Dynamic page"
	},
	home: {
		title: "Nuxt 3 template for public websites",
		cta: {
			getStarted: "Get started",
			seeOnGitHub: "See on GitHub"
		}
	},
	footer: {
		madeBy: "Made by"
	},
	navbar: {
		button: "Open or close the navigation"
	},
	features: {
		core: {
			title: "Core",
			description:
				"Nuxt 3, Vite, Pinia stores, VueUse functions, Sass theme, mixins and functions."
		},
		staticChecks: {
			title: "Static checks",
			description: "Types, format, lint with pre-commit hook."
		},
		testing: {
			title: "Testing",
			description: "Unit, Integration, e2e on multiple browsers."
		},
		seo: {
			title: "SEOn, i18n",
			description:
				"robots.txt, sitemap.xml, Open Graph tags, i18n with automatic language detection."
		},
		ciCd: {
			title: "CI / CD",
			description:
				"Pre-configured GitHub Actions workflows, continuous deployment on Vercel."
		},
		analytics: {
			title: "Analytics",
			description: "GDPR compliant traffic monitoring, no cookie banner required."
		}
	},
	getStarted: {
		installation: "Installation",
		or: "Or",
		fetch: "Fetch the project without git history:",
		updateMeta: "Update the metadata in the translation files.",
		useOnGitHub: "use this template on GitHub"
	},
	dynamicPage: {
		ssr: "This page displays dynamic data from the server using a Nuxt API route",
		pageCache:
			"When rendered server-side, the page has a cache-control header in order to be cached on the CDN",
		apiCache: "When navigating client-side, the API call is cached too",
		serverTime: "Server time:"
	}
};
