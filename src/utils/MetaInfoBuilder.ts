import { MetaInfo, MetaPropertyName, MetaPropertyProperty } from "vue-meta";

export default class MetaInfoBuilder {
  private metaInfo: MetaInfo;

  constructor() {
    this.metaInfo = { meta: [] };
  }

  public title(title: string): MetaInfoBuilder {
    this.metaInfo.title = title;
    this.addMeta({ hid: "og:title", property: "og:title", content: title });
    return this;
  }

  public description(description: string): MetaInfoBuilder {
    this.addMeta(
      { hid: "description", name: "description", content: description },
      { hid: "og:description", property: "og:description", content: description }
    );
    return this;
  }

  public imageUrl(imageUrl: string): MetaInfoBuilder {
    this.addMeta(
      { hid: "og:image", property: "og:image", content: imageUrl },
      { hid: "twitter:image", property: "twitter:image", content: imageUrl },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" }
    );
    return this;
  }

  public url(url: string): MetaInfoBuilder {
    this.addMeta({ hid: "og:url", property: "og:url", content: url });
    return this;
  }

  private addMeta(...metaTag: (MetaPropertyName | MetaPropertyProperty)[]) {
    this.metaInfo.meta && this.metaInfo.meta.push(...metaTag);
  }

  public build(): MetaInfo {
    return this.metaInfo;
  }
}
