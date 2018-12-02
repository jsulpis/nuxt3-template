<template>
  <div>
    <img
      v-for="logo in logos"
      :key="logo"
      :src="'/logos/' + logo + '.png'"
      :alt="logo + '-logo'"
      :title="logo | beautify"
    >
  </div>
</template>

<script>
export default {
  filters: {
    beautify(word) {
      return word[0].toUpperCase() + word.slice(1);
    }
  },
  data() {
    return {
      logos: ["typescript", "eslint", "jest", "nightwatch", "i18n", "analytics"]
    };
  }
};
</script>

<style>
img {
  max-height: 3em;
  margin: 0.5em 1em;
}
</style>
