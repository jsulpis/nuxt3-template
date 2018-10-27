import { mount } from "@vue/test-utils";
import Home from "~/pages/index";
import AppLogo from "~/components/AppLogo";

describe("index.vue", () => {
  const wrapper = mount(Home);

  it("contains the logo", () => {
    expect(wrapper.contains(AppLogo)).toBe(true);
  });

  it("has correct title", () => {
    const expectedTitle = "nuxt-template";
    expect(wrapper.find("h1").text()).toBe(expectedTitle);
  });

  it("has correct subtitle", () => {
    const expectedSubtitle =
      "A comprehensive template for nuxt-based projects.";
    expect(wrapper.find("h2").text()).toBe(expectedSubtitle);
  });
});
