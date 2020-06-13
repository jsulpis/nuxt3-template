<template>
  <div class="flex flex-col">
    <app-header />
    <main class="flex-grow transition-colors duration-150 bg-default">
      <nuxt class="container py-16 mx-auto" />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/base/AppHeader.vue";
import AppFooter from "@/components/base/AppFooter.vue";
import MetaInfoBuilder from "@/utils/MetaInfoBuilder";

export default Vue.extend({
  head() {
    let routeName = "index";
    if (!!this.$route.name) {
      routeName = this.$route.name.split("_")[0];
    }
    // @ts-ignore
    const i18nSeo = this.$nuxtI18nSeo();

    const customHead = new MetaInfoBuilder()
      // @ts-ignore
      .title(this.$t(routeName + ".title"))
      // @ts-ignore
      .description(this.$t(routeName + ".description"))
      .url(process.env.appUrl + this.$route.path)
      .imageUrl(process.env.appUrl + "/og-image.png")
      .type("website")
      .twitterCard("summary_large_image")
      .build();

    return {
      title: customHead.title,
      htmlAttrs: {
        ...customHead.htmlAttrs,
        ...i18nSeo.htmlAttrs
      },
      meta: [...(i18nSeo.meta || []), ...(customHead.meta || [])],
      link: [...(i18nSeo.link || []), ...(customHead.link || [])]
    };
  },
  components: {
    AppHeader,
    AppFooter
  }
});
</script>
