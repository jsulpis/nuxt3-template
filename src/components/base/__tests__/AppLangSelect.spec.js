import { shallowMount } from "@vue/test-utils";
import AppLangSelect from "@/components/base/AppLangSelect";

const NuxtLink = {
  name: "NuxtLink",
  render: function (h) {
    return h("div", this.$slots.default);
  },
  props: ["to"]
};

describe("AppLangSelect.vue", () => {
  const wrapper = shallowMount(AppLangSelect, {
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

  it("contains two link with labels", () => {
    expect(wrapper.findAllComponents(NuxtLink).length).toBe(2);
    expect(wrapper.findAllComponents(NuxtLink).at(0).text()).toBe("English");
    expect(wrapper.findAllComponents(NuxtLink).at(1).text()).toBe("Français");
  });

  it("contains one active button", () => {
    expect(wrapper.findAll("AppButtonSelect-stub.active").length).toBe(1);
  });
});
