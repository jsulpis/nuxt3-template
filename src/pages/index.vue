<template>
  <div class="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto">
    <AppLogo class="w-3/4 h-24 md:h-40 md:w-1/2" />
    <h2 class="mt-4 text-xl font-semibold sm:text-3xl">
      {{ $t("index.description") }}
    </h2>
    <p class="mt-4 text-sm sm:text-lg">
      {{ $t("index.details") }}
    </p>
    <IconList />
    <div class="flex flex-col mt-10 text-sm text-white sm:flex-row">
      <NuxtLink :to="localePath('/documentation')" class="mx-2 btn btn-primary">{{ $t("index.get-started") }}</NuxtLink>
      <a href="https://github.com/jsulpis/nuxtjs-template" class="mx-2 mt-3 btn btn-gray sm:mt-0">{{
        $t("index.star-on-github")
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
