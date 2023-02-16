<script setup lang="ts"></script>

<template>
	<main>
		<slot />
	</main>
</template>

<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: min(90%, 1400px);
	margin-inline: auto;

	&::before,
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		height: 250%;
		width: 200%;
	}

	&::before {
		top: -80%;
		right: -70%;
		background: radial-gradient(
			100% 50% at 50% 50%,
			hsl(156 84% 10% / 0.4) 0%,
			hsl(240 4% 5% / 0) 50%
		);
	}

	&::after {
		bottom: -100%;
		left: -80%;
		background: radial-gradient(
			100% 50% at 50% 50%,
			hsl(210 86% 11% / 0.4) 0%,
			hsl(240 4% 5% / 0) 50%
		);
	}
}
</style>
