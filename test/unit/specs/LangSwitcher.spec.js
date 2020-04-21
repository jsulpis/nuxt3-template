import { shallowMount } from "@vue/test-utils";
import LangSwitcher from "@/components/LangSwitcher";

const NuxtLink = {
  name: "nuxt-link",
  render: function (h) {
    return h("div", this.$slots.default);
  },
  props: ["to"]
};

describe("LangSwitcher.vue", () => {
  const wrapper = shallowMount(LangSwitcher, {
    mocks: {
      $i18n: {
        locales: [
          { code: "en", iso: "en-US", name: "English" },
          { code: "fr", iso: "fr-FR", name: "Français" }
        ],
        locale: "en"
      },
      switchLocalePath: jest.fn()
    },
    stubs: { NuxtLink }
  });

  it("contains one link", () => {
    expect(wrapper.findAll(NuxtLink).length).toBe(1);
  });

  it("contains the right language switcher", () => {
    expect(wrapper.find(NuxtLink).text()).toBe("Français");
  });

  it("switch language on click", () => {
    wrapper.find(NuxtLink).trigger("click");
    expect(wrapper.vm.switchLocalePath).toHaveBeenCalledWith("fr");
  });
});
