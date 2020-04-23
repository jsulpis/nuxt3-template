import MetaInfoBuilder from "./MetaInfoBuilder";

describe("MetaTagsBuilder", () => {
  const title = "My Title";
  const description = "my description";
  const imageUrl = "https://mysite.com/image.png";
  const url = "https://mysite.com";

  it("should build tags with a title", () => {
    expect(new MetaInfoBuilder().title(title).build()).toEqual({
      title: title,
      meta: [{ hid: "og:title", property: "og:title", content: title }]
    });
  });

  it("should build tags with a description", () => {
    expect(new MetaInfoBuilder().description(description).build()).toEqual({
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:description", property: "og:description", content: description }
      ]
    });
  });

  it("should build tags with image", () => {
    expect(new MetaInfoBuilder().imageUrl(imageUrl).build()).toEqual({
      meta: [
        { hid: "og:image", property: "og:image", content: imageUrl },
        { hid: "twitter:image", property: "twitter:image", content: imageUrl },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" }
      ]
    });
  });

  it("should build tags with url", () => {
    expect(new MetaInfoBuilder().url(url).build()).toEqual({
      meta: [{ hid: "og:url", property: "og:url", content: url }]
    });
  });

  it("should aggregate all tags", () => {
    expect(new MetaInfoBuilder().title(title).description(description).imageUrl(imageUrl).url(url).build()).toEqual({
      title: title,
      meta: [
        { hid: "og:title", property: "og:title", content: title },
        { hid: "description", name: "description", content: description },
        { hid: "og:description", property: "og:description", content: description },
        { hid: "og:image", property: "og:image", content: imageUrl },
        { hid: "twitter:image", property: "twitter:image", content: imageUrl },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "og:url", property: "og:url", content: url }
      ]
    });
  });
});
