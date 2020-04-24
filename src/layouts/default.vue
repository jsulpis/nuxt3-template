<template>
  <div class="flex flex-col">
    <app-header />
    <main class="flex items-center justify-center flex-grow transition-colors duration-150 bg-default">
      <nuxt class="container h-full py-16 mx-auto" />
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
    if (!!this.$route && !!this.$route.name) {
      routeName = this.$route.name.split("_")[0];
    }
    return {
      // @ts-ignore
      ...this.$nuxtI18nSeo(),
      ...new MetaInfoBuilder()
        // @ts-ignore
        .title(this.$t(routeName + ".title"))
        // @ts-ignore
        .description(this.$t(routeName + ".description"))
        .url(process.env.appUrl + this.$route.path)
        .type("website")
        .twitterCard("summary")
        .build()
    };
  },
  components: {
    AppHeader,
    AppFooter
  }
});
</script>
