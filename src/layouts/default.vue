<template>
  <div class="flex flex-col">
    <app-header />
    <main class="flex items-center justify-center flex-grow transition-colors duration-150 bg-default">
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
