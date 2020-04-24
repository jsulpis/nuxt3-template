<template>
  <header class="absolute top-0 z-50 w-full shadow-lg bg-surface">
    <nav class="container flex flex-wrap items-center justify-between px-2 py-3 mx-auto">
      <div class="relative flex justify-between w-full px-3 md:w-auto md:static md:block md:justify-start">
        <nuxt-link :to="localePath('/')" class="inline-block py-2 text-lg font-bold">
          {{ $t("index.title") }}
        </nuxt-link>
        <button
          class="px-3 py-1 text-xl outline-none md:hidden focus:outline-none"
          type="button"
          @click="isExpanded = !isExpanded"
          @blur="isExpanded = false"
        >
          <span class="block w-6 h-px rounded-sm bg-text"></span>
          <span class="block w-6 h-px mt-1 rounded-sm bg-text"></span>
          <span class="block w-6 h-px mt-1 rounded-sm bg-text"></span>
        </button>
      </div>
      <div class="flex overflow-hidden duration-200 transition-height md:h-auto" :class="isExpanded ? 'h-24' : 'h-0'">
        <ul class="flex flex-col list-none md:flex-row">
          <li v-for="route in routes" :key="route.href" class="py-1 text-left">
            <nuxt-link :to="localePath(route.href)" class="px-3 font-semibold">
              {{ $t(route.label) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      routes: [
        { href: "/", label: "header.home" },
        { href: "/documentation", label: "header.documentation" },
        { href: "/contact", label: "header.contact" }
      ]
    };
  }
};
</script>

<style scoped>
ul .nuxt-link-exact-active {
  @apply text-primary-500;
}

ul a:not(.nuxt-link-exact-active):hover {
  @apply opacity-50;
}
</style>
