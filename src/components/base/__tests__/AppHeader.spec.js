import { mount, RouterLinkStub } from "@vue/test-utils";
import AppHeader from "../AppHeader";

describe("AppHeader", () => {
  // https://stackoverflow.com/questions/48033841/test-process-env-with-jest
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it("should have a link to the home page with the name of the app", () => {
    // Given
    const APP_TITLE = "My App Title";
    process.env.appTitle = APP_TITLE;
    const wrapper = mount(AppHeader, { stubs: { "nuxt-link": RouterLinkStub } });

    // When
    const link = wrapper.find(RouterLinkStub);

    // Then
    expect(link.text()).toBe(APP_TITLE);
    expect(link.props().to).toBe("/");
  });
});
