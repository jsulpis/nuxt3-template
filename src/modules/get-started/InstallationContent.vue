<script setup lang="ts">
import InstallationFr from "./InstallationFr.vue";
import InstallationEn from "./InstallationEn.vue";

const { locale } = useI18n();
</script>

<template>
	<section class="installation-content">
		<component :is="locale === 'fr' ? InstallationFr : InstallationEn" />
	</section>
</template>

<style lang="scss">
.installation-content {
	width: min(90%, 800px);
	margin-bottom: 4rem;

	.code {
		margin-block: 0.75rem;
	}

	h2:not(:first-of-type) {
		margin-top: 2.5rem;
	}

	h3 {
		margin-top: 1.5rem;
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

	.vercel-button {
		display: block;
		margin-block: 1rem;
	}

	p + p {
		margin-top: 0.75rem;
	}
}
</style>
