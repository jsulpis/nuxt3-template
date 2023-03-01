<script setup lang="ts">
import CallToAction from "./CallToAction.vue";

const localePath = useLocalePath();
</script>

<template>
	<div class="hero">
		<Icon name="logos:nuxt-icon" size="55px" />

		<h1>{{ $t("home.title") }}</h1>

		<div class="cta-container">
			<CallToAction :to="localePath('get-started')">
				{{ $t("home.cta.get-started") }}
			</CallToAction>

			<CallToAction to="https://github.com/jsulpis/nuxt3-template" variant="secondary">
				{{ $t("home.cta.seeOnGitHub") }}
				<Icon name="bx:bxs-chevron-right" size="14px" />
			</CallToAction>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1 {
	text-align: center;
	margin-bottom: 1.5rem;
	width: 15ch;
}

.cta-container {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}
</style>
