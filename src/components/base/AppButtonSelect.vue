<template functional>
  <button :class="[data.class, data.staticClass]" v-on="listeners"><slot /></button>
</template>

<style lang="scss" scoped>
button {
  @apply px-4 py-1 text-sm bg-surface font-bold;

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

.dark-mode {
  button.active,
  button:hover {
    @apply bg-gray-700;
  }
}

.light-mode {
  button.active,
  button:hover {
    @apply bg-gray-300;
  }
}

.rainbow-mode {
  button.active,
  button:hover {
    @apply bg-yellow-300;
  }
}
</style>
