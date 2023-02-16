<script setup lang="ts">
import CodeBlock from "./CodeBlock.vue";
</script>

<template>
	<section>
		<h2>{{ $t("getStarted.installation") }}</h2>
		<ol>
			<li>
				{{ $t("getStarted.fetch") }}
				<CodeBlock class="code">npx degit jsulpis/nuxtjs-template</CodeBlock>

				<p>
					{{ $t("getStarted.or") }}
					<a href="https://github.com/jsulpis/nuxtjs-template">
						{{ $t("getStarted.useOnGitHub") }} </a
					>.
				</p>
			</li>

			<li>{{ $t("getStarted.updateMeta") }}</li>
		</ol>
	</section>
</template>

<style lang="scss" scoped>
section {
	width: min(90%, 60ch);
}

ol {
	list-style: revert;
	padding-inline-start: 10px;

	@include tablet-portrait-up {
		padding-inline-start: 30px;
	}
}

li {
	margin-bottom: 2.5rem;

	&::marker {
		font-weight: bold;
		color: var(--font-color-strong);
	}
}

.code {
	margin-block: 1rem;
}

strong {
	font-weight: bold;
	color: var(--font-color-strong);
}

a {
	color: var(--font-color-strong);
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
}
</style>
