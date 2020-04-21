<template>
  <div>
    <header class="absolute top-0 z-50 w-full bg-white shadow-lg">
      <nav class="container flex flex-wrap items-center justify-between px-2 py-3 mx-auto">
        <div class="relative flex justify-between w-full px-3 md:w-auto md:static md:block md:justify-start">
          <nuxt-link to="/" class="inline-block py-2 text-lg font-bold" @click.native="collapseNavbar">
            {{ appTitle }}
          </nuxt-link>
          <button
            class="px-3 py-1 text-xl outline-none md:hidden focus:outline-none"
            type="button"
            @click="isExpanded = !isExpanded"
          >
            <span class="block w-6 h-px bg-gray-700 rounded-sm"></span>
            <span class="block w-6 h-px mt-1 bg-gray-700 rounded-sm"></span>
            <span class="block w-6 h-px mt-1 bg-gray-700 rounded-sm"></span>
          </button>
        </div>
        <div class="flex overflow-hidden duration-200 transition-height md:h-auto" :class="isExpanded ? 'h-24' : 'h-0'">
          <ul class="flex flex-col list-none md:flex-row">
            <li v-for="route in routes" :key="route.href" class="py-1 text-left">
              <nuxt-link :to="route.href" class="px-3 font-semibold hover:opacity-50" @click.native="collapseNavbar">
                {{ route.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="absolute w-full h-full bg-gray-900 opacity-25 z-49" v-show="isExpanded" @click="collapseNavbar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appTitle: process.env.appTitle,
      isExpanded: false,
      routes: [
        { href: "/", label: "Home" },
        { href: "/docs", label: "Documentation" },
        { href: "/contact", label: "Contact" }
      ]
    };
  },
  methods: {
    collapseNavbar() {
      this.isExpanded = false;
    }
  }
};
</script>

<style scoped>
ul .nuxt-link-exact-active {
  @apply opacity-50;
}
</style>
