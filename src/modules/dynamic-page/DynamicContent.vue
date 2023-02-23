<script setup lang="ts">
const { data } = await useLazyFetch("/api/data");
</script>

<template>
	<code>{{ data?.datetime || "..." }}</code>
</template>

<style lang="scss" scoped></style>
