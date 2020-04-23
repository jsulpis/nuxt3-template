<template>
  <div class="inline-flex">
    <button
      v-for="theme in themes"
      @click="$colorMode.preference = theme.value"
      :class="{ active: $colorMode.preference === theme.value }"
    >
      <FontAwesomeIcon :icon="theme.icon" size="sm" class="mr-1" />
      {{ theme.label }}
    </button>
  </div>
</template>

<script>
export default {
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

<style scoped>
button {
  @apply px-3 py-1 text-sm font-bold bg-gray-300 text-gray-600;

  &.active,
  &:hover {
    @apply bg-gray-400 text-gray-800;
  }

  &:focus {
    @apply outline-none;
  }

  &:first-child {
    @apply rounded-l-full;
  }

  &:last-child {
    @apply rounded-r-full;
  }
}
</style>
