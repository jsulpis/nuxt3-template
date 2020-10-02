import { mount } from "@vue/test-utils";
import AppLogo from "@/components/base/AppLogo";

describe("AppLogo.vue", () => {
  const wrapper = mount(AppLogo);

  it("renders correct container", () => {
    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.classes()).toContain("NuxtLogo");
  });
});
