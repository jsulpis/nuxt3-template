<script setup lang="ts">
import InstallationContent from "../modules/get-started/InstallationContent.vue";

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
	<h1>{{ $t("nav.get-started") }}</h1>
	<InstallationContent />
</template>
