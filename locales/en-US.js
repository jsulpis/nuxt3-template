export default {
	nav: {
		index: "Home",
		"get-started": "Get started",
		"dynamic-page": "Dynamic page",
		skipNavigation: "Skip navigation"
	},
	home: {
		title: "Nuxt 3 template for public websites",
		cta: {
			"get-started": "Get started",
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
			description: "E2e tests on multiple browsers with Playwright."
		},
		seo: {
			title: "SEO, i18n",
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
	"dynamic-page": {
		ssr: "This page displays dynamic data from the server using a Nuxt API route",
		pageCache:
			"When rendered server-side (SSR), the page has a cache-control header in order to be cached on the CDN",
		apiCache: "When navigating client-side, the API call is cached too",
		serverTime: "Server time:"
	},
	seo: {
		index: {
			title: "Nuxt 3 template for public websites",
			description: "A starter for simple projects."
		},
		"get-started": {
			title: "Get started",
			description: "Installation instructions."
		},
		"dynamic-page": {
			title: "Dynamic page",
			description: "Example of dynamic page using SSR."
		},
		404: {
			title: "Page not found",
			description: "This page does not exist."
		}
	},
	errors: {
		404: "This page does not exist.",
		500: "Something happened to the server..."
	}
};
