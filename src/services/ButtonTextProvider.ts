// A very simple (useless) class just to show the usage of typescript
export default class ButtonTextProvider {
  doc = "Documentation";
  github = "GitHub";

  provideDocButtonMessage(): string {
    return this.doc;
  }

  provideGithubButtonMessage(): string {
    return this.github;
  }
}
