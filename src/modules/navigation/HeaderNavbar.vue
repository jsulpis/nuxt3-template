<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<template>
	<header>
		<Navbar />
	</header>
</template>

<style lang="scss" scoped>
nav {
	@include phone-only {
		display: none;
	}
}
</style>
