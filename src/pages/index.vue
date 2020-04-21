<template>
  <div class="container">
    <div class="layout">
      <app-logo />
      <h1 class="title">{{ $t("index.title") }}</h1>
      <dependencies-logos />
      <h2 class="subtitle">{{ $t("index.subtitle") }}</h2>
      <p class="credits">{{ $t("index.credits") }}</p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
          >{{ docButtonMessage }}</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          >{{ githubButtonMessage }}</a
        >
      </div>
      <lang-switcher class="lang-switcher" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "@/components/AppLogo.vue";
import DependenciesLogos from "@/components/DependenciesLogos.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";
import ButtonTextProvider from "@/services/ButtonTextProvider"; // This is a TypeScript class

export default Vue.extend({
  components: {
    AppLogo,
    DependenciesLogos,
    LangSwitcher
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

<style lang="scss">
@import "~/assets/scss/_colors.scss";

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.75em;
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 6em;
  color: $color-grey;
}

.subtitle {
  font-weight: 300;
  font-size: 2.5em;
  color: #526488;
}

.credits {
  margin-top: 0.5em;
  font-size: 1.2em;
}

.links {
  margin-top: 1.5em;
}

.lang-switcher {
  margin-top: 0.75em;
}
</style>
