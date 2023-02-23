<script setup lang="ts">
import LangSwitch from "../i18n/LangSwitch.vue";
</script>

<template>
	<footer>
		<LangSwitch />

		<span class="author">
			<a href="https://nuxt3-template-jsulpis.vercel.app/">
				{{ $t("footer.nuxtTemplate") }}
			</a>
			<span>{{ $t("footer.by") }}</span>
			<a href="https://twitter.com/jsulpis">@jsulpis</a>
		</span>

		<span class="icons">
			<a href="https://twitter.com/jsulpis" aria-label="Twitter profile">
				<Icon name="mdi:twitter" size="24px" />
			</a>
			<a href="https://github.com/jsulpis" aria-label="GitHub profile">
				<Icon name="mdi:github" size="24px" />
			</a>
		</span>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 5vw;
	position: relative;

	@include phone-only {
		flex-direction: column;
		gap: 2rem;
	}
}

.author {
	display: inline-flex;
	gap: 4px;

	a {
		color: var(--font-color-strong);
		font-weight: bold;
	}
}

.icons {
	display: flex;
	gap: 0.125rem;

	a {
		box-sizing: content-box;
		height: 1.5rem;
		border-radius: 50%;
		padding: 0.5rem;
		transition: background-color 100ms;

		&:hover {
			background-color: var(--bg-button-hover);
		}
	}
}
</style>
