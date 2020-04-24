<template>
  <form class="mt-8 sm:w-1/2 xl:w-1/3" @submit.prevent="handleSubmit">
    <div class="relative w-full">
      <label class="block mb-2 text-sm font-semibold" for="message">
        {{ $t("contact.message") }}
      </label>
      <textarea
        v-model="message"
        rows="4"
        cols="80"
        id="message"
        class="w-full px-3 py-3 text-sm placeholder-gray-400 rounded shadow bg-surface focus:outline-none focus:shadow-outline"
        :placeholder="$t('contact.placeholder')"
      />
    </div>

    <button class="mt-2 btn btn-primary" type="submit">
      {{ $t("contact.send") }}
    </button>
    <p class="mt-2 font-semibold text-red-500 opacity-100 error-message">
      {{ $t(errorMessage) }}
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      errorMessage: ""
    };
  },
  methods: {
    handleSubmit() {
      if (!!this.message) {
        this.errorMessage = "";
        this.$ga.event({
          eventCategory: "Contact",
          eventAction: "submit_form",
          eventLabel: "Form submission"
        });
      } else {
        this.errorMessage = "contact.error-empty";
      }

      this.message = "";
    }
  }
};
</script>
