<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFeatures } from "~/stores/useFeatures";
import FeatureCard from "./FeatureCard.vue";

const { features } = storeToRefs(useFeatures());
</script>

<template>
	<section>
		<FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
	</section>
</template>

<style lang="scss" scoped>
section {
	display: flex;
	flex-wrap: wrap;
	max-width: min(90%, 1400px);
	gap: 2rem;
	margin-block: 4rem;
	justify-content: center;
}
</style>
