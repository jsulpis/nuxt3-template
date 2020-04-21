<template>
  <div class="w-full h-full">
    <app-header />
    <main class="flex items-center justify-center flex-grow bg-gray-100">
      <div class="container h-full py-16 mx-auto mt-16 sm:my-auto">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader
  }
};
</script>
