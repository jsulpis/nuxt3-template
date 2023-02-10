<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

defineProps<{ to: RouteLocationRaw }>();
</script>

<template>
	<NuxtLink :to="to">
		<slot />
	</NuxtLink>
</template>

<style lang="scss" scoped>
a {
	padding: 0.5rem 1rem;
	display: inline-block;
	letter-spacing: 0.03em;
	transition: color 100ms, background-color 100ms;

	&:hover,
	&[aria-current="page"] {
		background: var(--bg-button-hover);
	}

	&[aria-current="page"] {
		color: var(--font-color-strong);
		font-weight: 700;
	}

	&:focus-visible {
		outline: 2px solid theme(primary, 50);
		outline-offset: 0;
	}
}
</style>
