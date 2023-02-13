<script setup lang="ts">
import Footer from "~/modules/layout/Footer.vue";
import Main from "~/modules/layout/Main.vue";
import Navbar from "~/modules/navigation/Navbar.vue";
</script>

<template>
	<Navbar />
	<Main>
		<slot />
	</Main>
	<Footer />
</template>
