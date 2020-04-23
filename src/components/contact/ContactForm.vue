<template>
  <form class="mt-8 sm:w-1/2 xl:w-1/3" @submit.prevent="handleSubmit">
    <div class="relative w-full">
      <label class="block mb-2 text-sm font-semibold" for="message">
        Message
      </label>
      <textarea
        v-model="message"
        rows="4"
        cols="80"
        id="message"
        class="w-full px-3 py-3 text-sm placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
        placeholder="Type a message..."
      />
    </div>

    <button class="mt-2 btn btn-primary" type="submit">
      Send Message
    </button>
    <p class="mt-2 font-semibold text-red-500 opacity-100 error-message">
      {{ errorMessage }}
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
        this.errorMessage = "You can't send an empty message !";
      }

      this.message = "";
    }
  }
};
</script>
