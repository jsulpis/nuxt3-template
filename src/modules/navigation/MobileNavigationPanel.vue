<script setup lang="ts">
import { isClient } from "@vueuse/core";
import Navbar from "./Navbar.vue";

const props = defineProps<{ expanded?: boolean }>();

watchEffect(() => setScrollLocked(!!props.expanded));
onUnmounted(() => setScrollLocked(false));

function setScrollLocked(value: boolean) {
	if (!isClient) return;
	document.documentElement.toggleAttribute("data-lock-scroll", value);
}
</script>

<template>
	<div :class="['navbar', { expanded }]" :aria-hidden="!expanded">
		<Navbar direction="column" />
	</div>
</template>

<style lang="scss" scoped>
.navbar {
	position: fixed;
	z-index: 998;
	font-size: 120%;
	inset: 0 0 0 20%;
	inset: 0;
	padding: min(20vh, 10rem) 2em;
	background-color: hsl(var(--bg-navbar-hsl));
	opacity: 0;
	transition: opacity 300ms var(--ease-in-out);
	pointer-events: none;

	@supports (backdrop-filter: blur(20px)) {
		background-color: hsla(var(--bg-navbar-hsl) / 0.7);
		backdrop-filter: blur(20px);
	}

	&.expanded {
		pointer-events: all;
		opacity: 1;
	}
}
</style>
