<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{ $t("index.title") }}
      </h1>
      <h2 class="subtitle">
        {{ $t("index.subtitle") }}
      </h2>
      <p>{{ $t("index.credits") }}</p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">{{ docButtonMessage }}</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">{{ githubButtonMessage }}</a>
      </div>
      <lang-switcher/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "../components/AppLogo.vue";
import LangSwitcher from "../components/LangSwitcher.vue";
import ButtonTextProvider from "../services/ButtonTextProvider"; // This is a TypeScript class

export default Vue.extend({
  components: {
    AppLogo,
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
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $color-grey;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
