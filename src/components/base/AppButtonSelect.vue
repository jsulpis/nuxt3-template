<template functional>
  <button :class="[data.class, data.staticClass]" v-on="listeners"><slot /></button>
</template>

<style scoped>
button {
  @apply px-4 py-1 text-sm font-bold bg-gray-300 text-gray-600;

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
