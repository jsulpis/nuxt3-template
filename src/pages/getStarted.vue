<script setup lang="ts">
import Installation from "../modules/get-started/Installation.vue";

definePageMeta({
	navPosition: 1
});
defineI18nRoute({
	paths: {
		en: "/get-started",
		fr: "/demarrage"
	}
});
</script>

<template>
	<h1>{{ $t("nav.getStarted") }}</h1>

	<Installation />
</template>

<style lang="scss" scoped></style>
