<script setup lang="ts"></script>

<template>
	<div>
		<Icon name="logos:nuxt-icon" />
		<h1>{{ $t("home.title") }}</h1>
	</div>
</template>

<style lang="scss" scoped>
div {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	align-items: center;
}

svg {
	width: 55px;
	height: auto;
}

h1 {
	text-align: center;
	width: 15ch;
}
</style>
