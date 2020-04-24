import { mount } from "@vue/test-utils";
import AppFooter from "@/components/base/AppFooter";

describe("AppFooter", () => {
  it("should have a link to my profile", () => {
    const wrapper = mount(AppFooter, {
      stubs: ["FontAwesomeIcon"],
      mocks: { $t: () => {}, $i18n: { locales: [] }, $colorMode: {} }
    });

    const link = wrapper.find("a[href='https://github.com/jsulpis'");
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe("Julien Sulpis");
  });
});
