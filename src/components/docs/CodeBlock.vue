<template>
  <div class="flex justify-between px-3 py-2 border rounded bg-surface">
    <p class="font-mono text-xs opacity-100"><slot /></p>
    <button class="leading-none focus:outline-none" @click="copyToClipboard">
      <FontAwesomeIcon class="opacity-75 cursor-pointer" icon="copy"></FontAwesomeIcon>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    copyToClipboard() {
      const text = this.$slots.default[0].text;

      // Create a hidden text field
      const inputText = document.createElement("input");
      inputText.style.position = "absolute";
      inputText.style.top = "-9999px";
      inputText.value = text;
      document.body.appendChild(inputText);

      // Select the text field
      inputText.select();

      // Copy the text inside the text field
      document.execCommand("copy");

      // Remove the input
      document.body.removeChild(inputText);
    }
  }
};
</script>
