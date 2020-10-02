import { mount } from "@vue/test-utils";
import IconList from "@/components/index/IconList";
import IconItem from "@/components/index/IconItem.vue";

describe("IconList", () => {
  it("should contain a set of icons", () => {
    const wrapper = mount(IconList);

    expect(wrapper.findAllComponents(IconItem).length).toBeGreaterThan(1);
  });
});
