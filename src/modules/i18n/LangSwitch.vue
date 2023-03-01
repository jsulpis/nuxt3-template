<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const localeRoute = useLocaleRoute();
const { locales } = useI18n();

const languageLinks = computed(() =>
	(locales.value as LocaleObject[]).map(({ code, name }) => ({
		label: name,
		to: localeRoute({}, code)
	}))
);
</script>

<template>
	<ul>
		<li v-for="{ label, to } in languageLinks" :key="label">
			<NuxtLink :to="to" :aria-label="label" :title="label">
				{{ label?.substring(0, 2) }}
			</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
ul {
	display: inline-flex;
	font-size: 1rem;
}

li {
	display: inline-flex;

	&:not(:first-child)::before {
		content: "";
		position: relative;
		height: 50%;
		top: 25%;
		width: 1px;
		background-color: var(--font-color-light);
	}
}

a {
	padding: 0.4em 0.75em;
	transition: color 100ms;

	&:hover,
	&:focus {
		color: var(--font-color-strong);
	}

	&[aria-current="page"] {
		text-decoration: underline 2px;
		font-weight: bold;
		color: var(--font-color-strong);
	}
}
</style>
