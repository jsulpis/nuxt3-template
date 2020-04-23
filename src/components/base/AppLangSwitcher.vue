<template>
  <div class="lang-switcher">
    <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
// A default export with a data function is required
// for the component to be registered in the unit test coverage
export default {
  data() {
    return {};
  }
};
</script>
