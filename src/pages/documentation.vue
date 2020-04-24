<template>
  <div class="text-left">
    <h2 class="mt-16">{{ $t("documentation.title") }}</h2>
    <DocPage v-if="$i18n.locale === 'en'" />
    <div v-else>
      <p>La documentation n'est disponible qu'en anglais.</p>
      <nuxt-link :to="localePath('/documentation', 'en')" class="text-primary-500 hover:opacity-75"
        >Voir la documentation en anglais.</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import DocPage from "@/components/docs/DocPage.vue";

export default {
  components: {
    DocPage
  }
};
</script>
