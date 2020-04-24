<template functional>
  <div class="flex flex-col items-center">
    <div class="flex items-center justify-center w-12 h-12 m-2 rounded-full shadow-md bg-surface sm:h-16 sm:w-16">
      <img
        :src="'/icons/' + props.file"
        :alt="props.name"
        class="w-6 h-6 sm:h-8 sm:w-8"
        :title="props.name + ' logo'"
      />
    </div>
    <p class="text-xs opacity-75">{{ props.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    file: {
      type: String
    }
  }
};
</script>

<style scoped>
img {
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.5));
}
</style>
