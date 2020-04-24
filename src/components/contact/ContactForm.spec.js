import { mount } from "@vue/test-utils";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  let wrapper, vm;

  beforeEach(() => {
    wrapper = mount(ContactForm, { mocks: { $t: s => s } });
    vm = wrapper.vm;
    vm.$ga = { event: jest.fn() };
  });

  it("should send a Google Analytics event when submitting the form", () => {
    // Given
    wrapper.find("textarea").setValue("valid message");

    // When
    wrapper.find("form").trigger("submit");

    // Then
    expect(vm.$ga.event).toHaveBeenCalled();
  });

  it("should not send any event and should display an error message if submitting an empty message", async () => {
    // When
    wrapper.find("form").trigger("submit");
    await wrapper.vm.$nextTick;

    // Then
    expect(vm.$ga.event).not.toHaveBeenCalled();
    expect(wrapper.find(".error-message").text()).toBe("contact.error-empty");
  });

  it("should remove the error message if a valid message is sent", async () => {
    // Given
    wrapper.find("form").trigger("submit");
    await wrapper.vm.$nextTick;
    expect(wrapper.find(".error-message").text()).not.toBe("");

    // When
    wrapper.find("textarea").setValue("valid message");
    wrapper.find("form").trigger("submit");
    await wrapper.vm.$nextTick;

    // Then
    expect(wrapper.find(".error-message").text()).toBe("");
  });
});
