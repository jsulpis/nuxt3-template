import ButtonTextProvider from "@/services/ButtonTextProvider";

describe("ButtonTextProvider.ts", () => {
  const buttonTextProvider = new ButtonTextProvider();

  it("provides correct text for the documentation button", () => {
    const expectedText = "Documentation";
    expect(buttonTextProvider.provideDocButtonMessage()).toBe(expectedText);
  });

  it("provides correct text for the github button", () => {
    const expectedText = "GitHub";
    expect(buttonTextProvider.provideGithubButtonMessage()).toBe(expectedText);
  });
});
