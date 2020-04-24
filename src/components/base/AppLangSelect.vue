<template>
  <div class="lang-switcher">
    <app-button-select
      v-for="locale in $i18n.locales"
      :key="locale.code"
      class="inline-flex items-center"
      :class="{ active: $i18n.locale === locale.code }"
    >
      <img :src="`/icons/${locale.code}-flag-square-icon.png`" :alt="locale.code + ' flag'" class="h-3 mr-1" />
      <nuxt-link :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </app-button-select>
  </div>
</template>

<script>
import AppButtonSelect from "@/components/base/AppButtonSelect.vue";

export default {
  components: {
    AppButtonSelect
  }
};
</script>
