<template>
  <div class="inline-flex">
    <app-button-select
      v-for="theme in themes"
      :key="theme.value"
      @click="$colorMode.preference = theme.value"
      :class="{ active: $colorMode.preference === theme.value }"
    >
      <FontAwesomeIcon :icon="theme.icon" size="sm" class="mr-1" />
      {{ theme.label }}
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
        { value: "system", label: "System", icon: ["fas", "desktop"] },
        { value: "light", label: "Light", icon: ["far", "sun"] },
        { value: "dark", label: "Dark", icon: ["fas", "moon"] },
        { value: "rainbow", label: "Rainbow", icon: ["fas", "rainbow"] }
      ]
    };
  }
};
</script>

<style scoped></style>
