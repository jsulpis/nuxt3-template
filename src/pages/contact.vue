<template>
  <div class="text-left">
    <h2 class="mt-16">{{ $t("contact.title") }}</h2>
    <p>{{ $t("contact.info") }}</p>
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
