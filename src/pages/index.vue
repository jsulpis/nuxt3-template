<script setup lang="ts">
import FeaturesList from "~/modules/home/FeaturesList.vue";
import Hero from "~/modules/home/Hero.vue";

definePageMeta({
	navPosition: 0
});
</script>

<template>
	<Hero />
	<FeaturesList />
</template>
