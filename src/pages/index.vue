<template>
  <div class="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto">
    <app-logo class="h-32 md:h-48" />
    <h2 class="mt-4 text-xl font-semibold sm:text-3xl">
      Full-featured template for JAMstack websites.
    </h2>
    <p class="mt-4 text-sm sm:text-lg">
      Everything you need to develop, test, deploy and monitor a fast and robust web application.
    </p>
    <IconList />
    <div class="flex flex-col mt-10 text-sm text-white sm:flex-row">
      <NuxtLink to="/docs" class="mx-2 btn btn-primary">Get Started</NuxtLink>
      <a href="https://github.com/jsulpis/nuxtjs-template" class="mx-2 mt-3 btn btn-gray sm:mt-0">Star on GitHub</a>
    </div>
    <!-- <app-lang-switcher class="lang-switcher" /> -->
  </div>
</template>

<script>
import Vue from "vue";
import AppLogo from "@/components/base/AppLogo.vue";
import AppLangSwitcher from "@/components/base/AppLangSwitcher.vue";
import IconList from "@/components/index/IconList.vue";

export default {
  name: "Home",
  components: {
    AppLogo,
    AppLangSwitcher,
    IconList
  }
};
</script>
