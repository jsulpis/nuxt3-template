<script setup lang="ts">
const { data } = await useLazyFetch("/api/data");
</script>

<template>
	<ul>
		<li>{{ $t("dynamicPage.ssr") }}</li>
		<li>{{ $t("dynamicPage.pageCache") }}</li>
		<li>{{ $t("dynamicPage.apiCache") }}</li>
	</ul>

	<strong>{{ $t("dynamicPage.serverTime") }}</strong>
	<code>{{ data?.datetime || "..." }}</code>
</template>

<style lang="scss" scoped>
ul {
	margin-bottom: 2rem;
	padding-inline: 40px 20px;
}

li {
	padding-left: 0.5rem;
	line-height: 2;

	&::marker {
		content: "✓";
		color: lightgreen;
	}
}

code {
	font-size: 0.75rem;
	margin-bottom: 20vh;
}
</style>
