<template>
  <div class="text-left">
    <h2 class="mt-16">Contact</h2>
    <p>
      This is not an actual contact form. It will send a Google Analytics event on submit to show how to do it.
    </p>

    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/contact/ContactForm.vue";

export default {
  components: {
    ContactForm
  }
};
</script>
