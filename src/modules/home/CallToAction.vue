<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

withDefaults(defineProps<{ to: RouteLocationRaw; variant?: "primary" | "secondary" }>(), {
	variant: "primary"
});
</script>

<template>
	<NuxtLink :to="to" :class="variant">
		<slot />
	</NuxtLink>
</template>

<style lang="scss" scoped>
a {
	color: var(--font-color-strong);
	font-weight: bold;
	display: inline-flex;
	gap: 0.25rem;
	align-items: center;
	font-size: 0.875rem;
	padding: 0.5em 1em;
	border-width: 2px;
	transition: background-color 100ms;

	&.primary {
		border-color: theme(primary, 50);
	}

	&.secondary {
		border-color: transparent;
	}

	&:hover {
		background-color: var(--bg-button-hover);
	}
}
</style>
