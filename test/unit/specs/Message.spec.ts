import Message from "~/domain/Message";

describe("Message.ts", () => {
  it("has working constructor and getter", () => {
    const msg = "Hello World !";
    expect(new Message(msg).getContent()).toBe(msg);
  });
});
