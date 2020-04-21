import { mount } from "@vue/test-utils";
import AppLogo from "@/components/AppLogo";

describe("AppLogo.vue", () => {
  const wrapper = mount(AppLogo);

  it("renders correct container", () => {
    expect(wrapper.contains("svg")).toBe(true);
    expect(wrapper.classes()).toContain("NuxtLogo");
  });
});
