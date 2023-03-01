<script setup lang="ts">
import CodeBlock from "./CodeBlock.vue";
</script>

<template>
	<h2>Installation</h2>
	<h3>Using GitHub</h3>
	<p>
		<a href="https://github.com/jsulpis/nuxt3-template/generate">
			Use this template on GitHub.
		</a>
	</p>
	<p>
		Please check 'Include all branches' in order to have the <code>starter</code> branch,
		which is the pristine template without the demo and documentation.
	</p>

	<h3>Using your terminal</h3>
	<p>Fetch the <code>starter</code> branch without all the git history:</p>
	<CodeBlock class="code"
		>npx degit jsulpis/nuxt3-template#starter your-project
	</CodeBlock>
	<CodeBlock class="code">cd your-project && pnpm install</CodeBlock>

	<p>
		Don't forget to update the translation files and the pseudo @jsulpis in the
		PageMetadata component.
	</p>

	<h2>Usage</h2>
	<h3>Development</h3>
	<p>Start the development server with hot module replacement:</p>
	<CodeBlock class="code">pnpm dev</CodeBlock>

	<p>Start in mock mode:</p>
	<CodeBlock class="code">pnpm dev:mock</CodeBlock>

	<p>See the other scripts in the <code>package.json</code> file.</p>

	<h2>Deployment</h2>
	<p>The template is ready to be deployed on Vercel:</p>
	<a
		href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjsulpis%2Fnuxt3-template&demo-title=Nuxt%203%20template&demo-description=Template%20for%20public%20websites&demo-url=https%3A%2F%2Fnuxt3-template-jsulpis.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fjsulpis%2Fnuxt3-template%2Fmaster%2Fpreview.jpg"
		class="vercel-button"
	>
		<img src="https://vercel.com/button" alt="Deploy with Vercel" />
	</a>

	<p>
		Note that you should be able to deploy this template on another cloud provider (Nuxt 3
		supports
		<a href="https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers"
			>a lot of them</a
		>), but you will have to do the redirection of the users based on their language,
		which is currently implemented with Vercel Edge Middleware.
	</p>
	<p>
		Check out
		<a href="https://nuxt.com/docs/getting-started/deployment">
			Nuxt 3 deployment documentation
		</a>
		for more information.
	</p>

	<h2>License</h2>
	<p>
		Released under the
		<a href="https://github.com/jsulpis/nuxt3-template/blob/master/LICENSE">MIT</a>
		license.
	</p>

	<p>
		Although you don't have to, if you reuse this template for your projects I would
		appreciate if you would add a little note like '<a
			href="https://nuxt3-template-jsulpis.vercel.app/"
			>Nuxt 3 template</a
		>
		by <a href="https://twitter.com/jsulpis">@jsulpis</a>' in your footer. Thanks !
	</p>
</template>
