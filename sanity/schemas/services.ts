import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";

export default {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
