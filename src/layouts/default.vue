<template>
  <div class="flex flex-col w-full h-full">
    <app-header />
    <main class="flex items-center justify-center flex-grow bg-gray-100">
      <div class="container h-full py-16 mx-auto mt-16 sm:my-auto">
        <nuxt />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
