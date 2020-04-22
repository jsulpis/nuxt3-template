import Home from "@/pages/index";
import AppLogo from "@/components/base/AppLogo";
import Translator from "../test-utils/Translator.js";

describe("index.vue", () => {
  const wrapper = Translator.createComponent(Home);

  it("contains the logo", () => {
    expect(wrapper.contains(AppLogo)).toBe(true);
  });

  it("renders a title", () => {
    Translator.checkComponentTranslationForKey(wrapper, "index.title");
  });

  it("renders a subtitle", () => {
    Translator.checkComponentTranslationForKey(wrapper, "index.subtitle");
  });

  it("renders credits", () => {
    Translator.checkComponentTranslationForKey(wrapper, "index.credits");
  });
});
