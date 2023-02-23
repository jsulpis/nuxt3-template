<script setup lang="ts">
import DynamicContent from "../modules/dynamic-page/DynamicContent.vue";

definePageMeta({
	navPosition: 1
});
defineI18nRoute({
	paths: {
		en: "/dynamic-page",
		fr: "/page-dynamique"
	}
});
</script>

<template>
	<h1>{{ $t("nav.dynamic-page") }}</h1>
	<DynamicContent />
</template>
