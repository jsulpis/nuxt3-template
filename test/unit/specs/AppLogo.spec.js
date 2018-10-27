import { mount } from "@vue/test-utils";
import AppLogo from "~/components/AppLogo";

describe("AppLogo.vue", () => {
  const wrapper = mount(AppLogo);

  it("renders correct container", () => {
    expect(wrapper.contains("div")).toBe(true);
    expect(wrapper.classes()).toContain("VueToNuxtLogo");
  });

  it("contains four triangles", () => {
    expect(wrapper.findAll(".Triangle").length).toBe(4);
  });
});
