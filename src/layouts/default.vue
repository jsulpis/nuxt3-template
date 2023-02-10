<script setup lang="ts">
import Navbar from "~/modules/navigation/Navbar.vue";
</script>

<template>
	<Navbar />
	<main>
		<slot />
	</main>
</template>

<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
