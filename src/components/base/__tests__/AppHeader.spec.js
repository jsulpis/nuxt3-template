import { mount, RouterLinkStub } from "@vue/test-utils";
import AppHeader from "../AppHeader";

describe("AppHeader", () => {
  it("should have a link to the home page with the name of the app", () => {
    // Given
    const wrapper = mount(AppHeader, {
      stubs: { NuxtLink: RouterLinkStub },
      mocks: { $t: s => s, localePath: p => p }
    });

    // When
    const link = wrapper.findComponent(RouterLinkStub);

    // Then
    expect(link.text()).toBe("index.title");
    expect(link.props().to).toBe("/");
  });
});
