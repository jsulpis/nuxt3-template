<script setup lang="ts">
import CodeBlock from "./CodeBlock.vue";
</script>

<template>
	<h2>Installation</h2>
	<h3>Avec GitHub</h3>
	<p>
		<a href="https://github.com/jsulpis/nuxt3-template/generate">
			Utiliser ce template sur GitHub.
		</a>
	</p>
	<p>
		Cocher la case "Inclure toutes les branches" pour avoir la branche
		<code>starter</code>, qui est la version vierge du template sans la documentation.
	</p>

	<h3>Avec votre terminal</h3>
	<p>Récupérer la branche <code>starter</code> sans l'historique git:</p>
	<CodeBlock class="code"
		>npx degit jsulpis/nuxt3-template#starter votre-projet
	</CodeBlock>
	<CodeBlock class="code">cd votre-projet && pnpm install</CodeBlock>

	<p>
		Ne pas oublier de mettre à jour les fichier de traduction et le pseudo @jsulpis dans
		le component PageMetadata.
	</p>

	<h2>Utilisation</h2>
	<h3>Dévelopment</h3>
	<p>Démarrer le serveur de développement:</p>
	<CodeBlock class="code">pnpm dev</CodeBlock>

	<p>Démarrer en mode mock:</p>
	<CodeBlock class="code">pnpm dev:mock</CodeBlock>

	<p>Voir les autres scripts dans le fichier <code>package.json</code>.</p>

	<h2>Déploiement</h2>
	<p>Ce templat est prêt à être déployé sur Vercel:</p>
	<a
		href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjsulpis%2Fnuxt3-template&demo-title=Nuxt%203%20template&demo-description=Template%20for%20public%20websites&demo-url=https%3A%2F%2Fnuxt3-template-jsulpis.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fjsulpis%2Fnuxt3-template%2Fmaster%2Fpreview.jpg"
		class="vercel-button"
	>
		<img src="https://vercel.com/button" alt="Déployer sur Vercel" />
	</a>

	<p>
		Notez que vous devriez pouvoir déployer ce template chez d'autres cloud providers
		(Nuxt 3 en supporte
		<a href="https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers"
			>beaucoup</a
		>), mais vous devrez ré-implémenter la redirection des utilisateurs d'après leur
		langue, car elle est actuellement implémentée avec les Edge Middleware de Vercel.
	</p>

	<p>
		Voir la
		<a href="https://nuxt.com/docs/getting-started/deployment">
			documentation de déploiement de Nuxt 3
		</a>
		pour plus d'informations.
	</p>

	<h2>Licence</h2>
	<p>
		Soumis à la licence
		<a href="https://github.com/jsulpis/nuxt3-template/blob/master/LICENSE">MIT</a>.
	</p>

	<p>
		Même si vous n'en êtes pas obligés, si vous utilisez ce template pour vos projets,
		j'apprécierais une petite mention dans le footer du style '<a
			href="https://nuxt3-template-jsulpis.vercel.app/"
			>Template Nuxt 3</a
		>
		par <a href="https://twitter.com/jsulpis">@jsulpis</a>'. Merci !
	</p>
</template>
