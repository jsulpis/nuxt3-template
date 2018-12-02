import { mount } from "@vue/test-utils";
import DependenciesLogos from "~/components/DependenciesLogos";

describe("DependenciesLogos.vue", () => {
  const wrapper = mount(DependenciesLogos);

  it("renders correct images", () => {
    expect(wrapper.findAll("img").length).toBe(7);
  });
});
