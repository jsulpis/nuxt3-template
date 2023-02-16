<script setup lang="ts">
import Footer from "~/modules/layout/Footer.vue";
import Main from "~/modules/layout/Main.vue";
import HeaderNavbar from "../modules/navigation/HeaderNavbar.vue";
import MobileNavigation from "../modules/navigation/MobileNavigation.vue";
</script>

<template>
	<MobileNavigation />
	<HeaderNavbar />
	<Main>
		<slot />
	</Main>
	<Footer />
</template>
