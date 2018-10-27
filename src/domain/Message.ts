// A very simple class just to show the usage of typescript
export default class Message {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}
