<template>
  <div class="inline-flex">
    <app-button-select
      v-for="theme in themes"
      :key="theme.value"
      @click="$colorMode.preference = theme.value"
      class="inline-flex flex-wrap items-center justify-center"
      :class="{ active: $colorMode.preference === theme.value }"
    >
      <FontAwesomeIcon :icon="theme.icon" size="sm" class="mr-1" />
      {{ $t("theme." + theme.value) }}
    </app-button-select>
  </div>
</template>

<script>
import AppButtonSelect from "@/components/base/AppButtonSelect.vue";

export default {
  components: {
    AppButtonSelect
  },
  data() {
    return {
      themes: [
        { value: "system", icon: ["fas", "desktop"] },
        { value: "light", icon: ["far", "sun"] },
        { value: "dark", icon: ["fas", "moon"] },
        { value: "rainbow", icon: ["fas", "rainbow"] }
      ]
    };
  }
};
</script>
