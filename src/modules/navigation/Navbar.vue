<script setup lang="ts">
import NavLink from "./NavLink.vue";

withDefaults(defineProps<{ direction?: "row" | "column" }>(), {
	direction: "row"
});

const { getRoutes } = useRouter();
const localePath = useLocalePath();

const routeNames = computed(() => {
	return new Set(
		getRoutes()
			.sort((r1, r2) => (r1.meta.navPosition as number) - (r2.meta.navPosition as number))
			.map((route) => route.name?.toString().split("_")[0])
	);
});
</script>

<template>
	<nav>
		<ul>
			<li v-for="name in routeNames" :key="name">
				<NavLink :to="localePath({ name })">
					{{ $t(`nav.${name}`) }}
				</NavLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	margin-bottom: 2.5rem;
}

ul {
	display: flex;
	margin: auto;
	flex-direction: v-bind(direction);
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
}
</style>
