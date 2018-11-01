import { shallowMount } from "@vue/test-utils";
import { has } from "lodash";

export default class Translator {
  static get MESSAGES_EN() {
    return require("~/locales/en.json");
  }

  static get MESSAGES_FR() {
    return require("~/locales/fr.json");
  }

  static createComponent(component) {
    return shallowMount(component, {
      mocks: {
        $t: jest.fn()
      }
    });
  }

  static checkComponentTranslationForKey(component, translationKey) {
    Translator.checkThatTranslationKeyExistsIn(
      Translator.MESSAGES_FR,
      translationKey
    );
    Translator.checkThatTranslationKeyExistsIn(
      Translator.MESSAGES_EN,
      translationKey
    );
    Translator.checkThatTranslationFunctionCalledWith(
      component,
      translationKey
    );
  }

  static checkThatTranslationKeyExistsIn(messages, translationKey) {
    const hasTranslation = has(messages, translationKey);
    expect(hasTranslation).toBeTruthy();
  }

  static checkThatTranslationFunctionCalledWith(component, translationKey) {
    expect(component.vm.$t).toHaveBeenCalledWith(translationKey);
  }
}
