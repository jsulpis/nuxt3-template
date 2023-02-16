<script setup lang="ts">
import MobileNavigationPanel from "./MobileNavigationPanel.vue";
import MobileNavigationButton from "./MobileNavigationButton.vue";

const isExpanded = ref(false);
const route = useRoute();

watch(route, () => (isExpanded.value = false));
</script>

<template>
	<MobileNavigationPanel id="mobile-navigation" :expanded="isExpanded" />
	<MobileNavigationButton
		:expanded="isExpanded"
		aria-controls="mobile-navigation"
		:aria-expanded="!!isExpanded"
		@click="isExpanded = !isExpanded"
	/>
</template>

<style lang="scss" scoped>
@include tablet-portrait-up {
	#mobile-navigation,
	[aria-controls="mobile-navigation"] {
		display: none;
	}
}
</style>
