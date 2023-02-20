<script setup lang="ts">
import PageMetadata from "~/modules/seo/PageMetadata.vue";
import Main from "~/modules/layout/Main.vue";
import MobileNavigation from "./modules/navigation/MobileNavigation.vue";
import HeaderNavbar from "./modules/navigation/HeaderNavbar.vue";

const props = defineProps({
	error: Object
});

const statusCode = computed(() => +props.error?.statusCode);
</script>

<template>
	<PageMetadata>
		<MobileNavigation />
		<HeaderNavbar />

		<Main>
			<section>
				<strong>{{ statusCode }}</strong>
				<p>{{ $t(`errors.${statusCode}`) }}</p>
			</section>
		</Main>
	</PageMetadata>
</template>

<style lang="scss" scoped>
section {
	margin-top: 20vh;
	text-align: center;
}

strong {
	font-size: 7rem;
	font-weight: bold;
	color: var(--font-color-light);
	line-height: 1;
}

p {
	font-size: 1.2rem;
}
</style>
