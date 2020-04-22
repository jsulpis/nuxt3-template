<template>
  <div class="flex flex-col w-full h-full">
    <app-header />
    <main class="flex items-center justify-center flex-grow bg-gray-100">
      <nuxt class="container h-full py-16 mx-auto" />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/base/AppHeader.vue";
import AppFooter from "@/components/base/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
