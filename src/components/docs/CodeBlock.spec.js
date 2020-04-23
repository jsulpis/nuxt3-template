import CodeBlock from "./CodeBlock";
import { shallowMount } from "@vue/test-utils";

describe("CodeBlocks", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CodeBlock, {
      slots: {
        default: "some code"
      },
      stubs: ["FontAwesomeIcon"]
    });
  });

  it("displays the code", async () => {
    expect(wrapper.find("p").text()).toBe("some code");
  });

  it("copy the code to the clipboard", () => {
    // Given
    const mockExecCommand = jest.fn();
    wrapper.vm.copyToClipboard = jest.fn();
    Object.defineProperty(global.document, "execCommand", { value: mockExecCommand });

    // When
    wrapper.find("button").trigger("click");

    // Then
    expect(mockExecCommand).toHaveBeenCalledWith("copy");
  });
});
