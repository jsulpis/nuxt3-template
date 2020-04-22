<template>
  <div class="container">
    <div class="layout">
      <app-logo />
      <h1 class="title">{{ $t("index.title") }}</h1>
      <h2 class="subtitle">{{ $t("index.subtitle") }}</h2>
      <p class="credits">{{ $t("index.credits") }}</p>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">
          {{ docButtonMessage }}
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">
          {{ githubButtonMessage }}
        </a>
      </div>
      <app-lang-switcher class="lang-switcher" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "@/components/base/AppLogo.vue";
import AppLangSwitcher from "@/components/base/AppLangSwitcher.vue";
import ButtonTextProvider from "@/services/ButtonTextProvider"; // This is a TypeScript class

export default Vue.extend({
  name: "Home",
  components: {
    AppLogo,
    AppLangSwitcher
  },
  data() {
    return {
      docButtonMessage: "",
      githubButtonMessage: ""
    };
  },
  created() {
    const buttonTextProvider = new ButtonTextProvider();
    this.docButtonMessage = buttonTextProvider.provideDocButtonMessage();
    this.githubButtonMessage = buttonTextProvider.provideGithubButtonMessage();
  }
});
</script>
