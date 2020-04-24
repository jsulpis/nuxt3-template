import { shallowMount } from "@vue/test-utils";
import AppLangSelect from "@/components/base/AppLangSelect";

const NuxtLink = {
  name: "nuxt-link",
  render: function (h) {
    return h("div", this.$slots.default);
  },
  props: ["to"]
};

beforeEach(() => {
  jest.resetAllMocks();
});

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
    expect(wrapper.findAll(NuxtLink).length).toBe(2);
    expect(wrapper.findAll(NuxtLink).at(0).text()).toBe("English");
    expect(wrapper.findAll(NuxtLink).at(1).text()).toBe("Français");
  });

  it("contains one active button", () => {
    expect(wrapper.findAll("app-button-select-stub.active").length).toBe(1);
  });
});
