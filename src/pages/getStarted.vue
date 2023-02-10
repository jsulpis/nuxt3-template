<script setup lang="ts">
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
</template>

<style lang="scss" scoped></style>
