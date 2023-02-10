<script setup lang="ts">
definePageMeta({
	navPosition: 2
});
defineI18nRoute({
	paths: {
		en: "/dynamic-page",
		fr: "/page-dynamique"
	}
});
</script>

<template>
	<h1>{{ $t("nav.dynamicPage") }}</h1>
</template>

<style lang="scss" scoped></style>
