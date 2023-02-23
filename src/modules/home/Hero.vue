<script setup lang="ts"></script>

<template>
	<div class="hero">
		<h1>{{ $t("home.title") }}</h1>
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
</style>
