<template>
  <div class="container flex flex-wrap justify-center mt-8 sm:w-3/4 xl:w-2/3">
    <IconItem v-for="icon in icons" :name="icon.name" :key="icon.name" :file="icon.file" />
  </div>
</template>

<script>
import IconItem from "@/components/index/IconItem.vue";

const icons = [
  { name: "Vue.js", file: "vue-icon.svg" },
  { name: "Typescript", file: "typescript-icon.svg" },
  { name: "Jest", file: "jest-icon.svg" },
  { name: "Prettier", file: "prettier-icon.svg" },
  { name: "Tailwind CSS", file: "tailwindcss-icon.svg" },
  { name: "PurgeCSS", file: "purgecss-icon.png" },
  { name: "Color themes", file: "color-mode-icon.png" },
  { name: "PWA", file: "pwa-icon.png" },
  { name: "Sass", file: "sass-icon.svg" },
  { name: "Font Awesome", file: "font-awesome-icon.svg" },
  { name: "i18n", file: "i18n-icon.png" },
  { name: "Cypress", file: "cypress-icon.svg" },
  { name: "SonarCloud", file: "sonarcloud-icon.png" },
  { name: "Travis CI", file: "travis-ci-icon.svg" },
  { name: "Google Analytics", file: "google-analytics-icon.svg" }
];

export default {
  components: {
    IconItem
  },
  data() {
    return {
      icons
    };
  }
};
</script>
