export default {
	nav: {
		index: "Accueil",
		getStarted: "Démarrage",
		dynamicPage: "Page dynamique",
		skipNavigation: "Sauter la navigation"
	},
	home: {
		title: "Template Nuxt 3 pour sites publics",
		cta: {
			getStarted: "Démarrer",
			seeOnGitHub: "Voir sur GitHub"
		}
	},
	footer: {
		madeBy: "Développé par"
	},
	navbar: {
		button: "Ouvrir ou masquer la navigation"
	},
	features: {
		core: {
			title: "Base",
			description:
				"Nuxt 3, Vite, stores Pinia, fonctions VueUse, theme, mixins et fonctions Sass."
		},
		staticChecks: {
			title: "Vérifications statiques",
			description: "Types, format, lint avec hook de pre-commit."
		},
		testing: {
			title: "Tests",
			description: "Tests e2e sur plusieurs navigateurs avec Playwright."
		},
		seo: {
			title: "SEO, i18n",
			description:
				"robots.txt, sitemap.xml, Open Graph, i18n avec détection automatique de la langue."
		},
		ciCd: {
			title: "CI / CD",
			description:
				"Workflows GitHub Actions préconfigurés, déploiement continu sur Vercel."
		},
		analytics: {
			title: "Mesure d'audience",
			description:
				"Mesure de traffic conforme au RGPD, pas de bannière de cookies nécessaire."
		}
	},
	getStarted: {
		installation: "Installation",
		fetch: "Récupérer le projet sans l'historique git :",
		initGit:
			"puis dans le nouveau dossier, lancer 'git init' pour créer un nouveau répertoire git.",
		install: "Installer les dépendances avec pnpm install.",
		run: "Lancer l'application avec pnpm dev.",
		updateMeta:
			"Mettre à jour les fichiers de traduction et le pseudo {'@'}jsulpis dans le composant PageMetadata.",
		or: "Ou",
		useOnGitHub: "utiliser ce template sur GitHub",
		clone: "et cloner votre nouveau projet avec git"
	},
	dynamicPage: {
		ssr: "Cette page affiche une donnée dynamique du server en utilisant une route API de Nuxt",
		pageCache:
			"Lorsqu'elle est générée côté serveur, la page a un header cache-control pour être mise en cache sur le CDN",
		apiCache: "Lors d'une navigation côté client, l'appel d'API est aussi mis en cache",
		serverTime: "Heure du serveur :"
	},
	seo: {
		index: {
			title: "Template Nuxt 3 pour sites publics",
			description: "Une base pour démarrer un projet simple."
		},
		getStarted: {
			title: "Démarrage",
			description: "Instructions d'installation."
		},
		dynamicPage: {
			title: "Page dynamique",
			description: "Exemple de page dynamique en SSR."
		},
		404: {
			title: "Page introuvable",
			description: "Cette page n'existe pas."
		}
	},
	errors: {
		404: "Cette page n'existe pas.",
		500: "Quelque chose est arrivé au serveur..."
	}
};
