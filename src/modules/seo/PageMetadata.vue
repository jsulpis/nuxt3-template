<script setup lang="ts">
const head = useLocaleHead({
	addDirAttribute: true,
	addSeoAttributes: true
});

const { locale } = useI18n();

const {
	public: { baseUrl }
} = useRuntimeConfig();

const route = useRoute();
const routeName = computed(() => (route.name ? String(route.name).split("_")[0] : "404"));
</script>

<template>
	<Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
		<Head>
			<Title>{{ $t(`seo.${routeName}.title`) }}</Title>
			<Meta name="description" :content="$t(`seo.${routeName}.description`)" />
			<Meta property="og:title" :content="$t(`seo.${routeName}.title`)" />
			<Meta property="og:description" :content="$t(`seo.${routeName}.description`)" />
			<Meta property="og:type" content="website" />
			<Meta property="og:url" :content="baseUrl" />
			<Meta property="og:image" :content="`${baseUrl}/og-image-${locale}.jpg`" />
			<Meta property="og:image:width" content="1200" />
			<Meta property="og:image:height" content="630" />

			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="twitter:creator" content="@jsulpis" />
			<Meta name="twitter:site" content="@jsulpis" />

			<Meta name="theme-color" content="hsl(155, 100%, 43%)" />

			<Link
				v-for="link in head.link"
				:key="link.id"
				:rel="link.rel"
				:href="link.href"
				:hreflang="link.hreflang"
			/>
			<Meta
				v-for="meta in head.meta"
				:key="meta.id"
				:property="meta.property"
				:content="meta.content"
			/>
		</Head>

		<slot />
	</Html>
</template>
