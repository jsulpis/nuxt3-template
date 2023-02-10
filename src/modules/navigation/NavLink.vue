<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

defineProps<{ to: RouteLocationRaw; label: string }>();
</script>

<template>
	<NuxtLink :to="to">
		{{ label }}
	</NuxtLink>
</template>

<style lang="scss" scoped>
a {
	padding: 0.5rem 1rem;
	display: inline-block;
	border-radius: 0.5rem;
	letter-spacing: 0.03em;
	transition: color 100ms, background-color 100ms;

	&:hover,
	&[aria-current="page"] {
		background: theme(grey, 90);
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
