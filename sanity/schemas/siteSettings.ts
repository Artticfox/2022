import schemaTypes from "all:part:@sanity/base/schema-type";

export const seo = {
  name: "seo",
  type: "object",
  title: "SEO",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};

export const siteSettings = {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
  ],
};
