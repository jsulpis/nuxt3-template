<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-template
      </h1>
      <h2 class="subtitle">
        {{ message }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "../components/AppLogo.vue";
import Message from "../domain/Message"; // This is a TypeScript class

export default Vue.extend({
  components: {
    AppLogo
  },
  data() {
    return { message: "" };
  },
  created() {
    const message = new Message(
      "A comprehensive template for nuxt-based projects."
    );

    this.message = message.getContent();
  }
});
</script>


<style>
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
  color: #35495e;
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
