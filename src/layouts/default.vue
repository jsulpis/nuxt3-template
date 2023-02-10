<script setup lang="ts">
import Footer from "~/modules/footer/Footer.vue";
import Navbar from "~/modules/navigation/Navbar.vue";
</script>

<template>
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</template>

<style lang="scss">
#__nuxt {
	display: grid;
	grid-template-rows: auto 1fr auto;
	padding-top: 2.5rem;
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
