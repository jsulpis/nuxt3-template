<script setup lang="ts">
defineProps<{ expanded?: boolean }>();
</script>

<template>
	<button type="button" :aria-label="$t('navbar.button')" :class="{ expanded }">
		<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 3H45" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
			<path d="M3 24H45" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
			<path d="M3 45H45" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
		</svg>
	</button>
</template>

<style lang="scss" scoped>
button {
	position: absolute;
	right: 5px;
	top: 5px;
	width: 4rem;
	height: 4rem;
	color: var(--font-color-strong);
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
	z-index: 999;
}

svg {
	width: 100%;
	height: 100%;
}

@include motion-no-preference {
	svg,
	path {
		transition: transform 300ms var(--ease-in-out);
	}
}

path {
	&:nth-child(1) {
		transform-origin: 5% 10%;
	}

	&:nth-child(2) {
		transition-property: opacity;
	}

	&:nth-child(3) {
		transform-origin: 5% 90%;
	}
}

button.expanded {
	svg {
		transform: rotate(-180deg);
	}

	path:nth-child(1) {
		transform: rotate(45deg) scaleX(1.35);
	}

	path:nth-child(2) {
		opacity: 0;
	}

	path:nth-child(3) {
		transform: rotate(-45deg) scaleX(1.35);
	}
}
</style>
