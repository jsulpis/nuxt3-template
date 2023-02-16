<script setup lang="ts"></script>

<template>
	<main id="main-content" tabindex="-1">
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
	outline: none;
}
</style>
