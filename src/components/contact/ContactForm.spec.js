import { mount } from "@vue/test-utils";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  let wrapper, vm;

  beforeEach(() => {
    wrapper = mount(ContactForm, { mocks: { $t: s => s } });
    vm = wrapper.vm;
    vm.$ga = { event: jest.fn() };
  });

  describe("when submitting a valid message", () => {
    it("should send a Google Analytics event", () => {
      // Given
      wrapper.find("textarea").setValue("valid message");

      // When
      wrapper.find("form").trigger("submit");

      // Then
      expect(vm.$ga.event).toHaveBeenCalled();
    });

    it("should clear the message", async () => {
      // Given
      wrapper.find("textarea").setValue("valid message");

      // When
      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;

      // Then
      expect(wrapper.find("textarea").element.value).toBeFalsy();
    });

    it("should display a success message", async () => {
      // When
      wrapper.find("textarea").setValue("valid message");
      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;

      // Then
      expect(wrapper.find(".success-message").text()).toBe("contact.success");
    });

    it("should remove the error message if needed", async () => {
      // Given
      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;
      expect(wrapper.find(".error-message").text()).toBeTruthy();

      // When
      wrapper.find("textarea").setValue("valid message");
      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;

      // Then
      expect(wrapper.find(".error-message").text()).toBeFalsy();
    });
  });

  describe("when submitting an empty message", () => {
    it("should not send any event and should display an error message", async () => {
      // When
      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;

      // Then
      expect(vm.$ga.event).not.toHaveBeenCalled();
      expect(wrapper.find(".error-message").text()).toBe("contact.error-empty");
    });

    it("should remove the success message if needed", async () => {
      // Given
      wrapper.find("textarea").setValue("valid message");

      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;
      expect(wrapper.find(".success-message").text()).toBeTruthy();

      // When
      wrapper.find("form").trigger("submit");
      await wrapper.vm.$nextTick;

      // Then
      expect(wrapper.find(".success-message").text()).toBeFalsy();
    });
  });
});
