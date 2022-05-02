import schemaTypes from "all:part:@sanity/base/schema-type";
import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";
import images from "./objects/images";

export default {
  name: "projects",
  type: "document",
  title: "Projects",

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
      name: "projectImage",
      type: "image",
      title: "Project Image",
    },
    {
      name: "industry",
      type: "string",
      title: "Industry",
    },
    {
      name: "services",
      type: "array",
      title: "What we did",
      of: [
        {
          type: "reference",
          to: [{ type: "services" }],
        },
      ],
    },
    {
      name: "softwares",
      type: "array",
      title: "What did we use",
      of: [
        {
          type: "reference",
          to: [{ type: "softwares" }],
        },
      ],
    },

    {
      name: "client",
      type: "string",
      title: "Client",
    },
    {
      name: "url",
      type: "url",
      title: "Url",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Excerpt",
    },
    {
      name: "sentence1",
      type: "string",
      title: "Short Sentence 1",
    },
    {
      name: "sentence2",
      type: "string",
      title: "Short Sentence 2",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "images", name: "images" }],
    },
    // {
    //   name: "images",
    //   type: "array",
    //   title: "Images",
    //   of: [
    //     {
    //       name: "image",
    //       type: "image",

    //       // is not working for some reason
    //       // fields: [
    //       //   {
    //       //     type: "text",
    //       //     name: "alt",
    //       //     title: "Alternative text",
    //       //   },
    //       // ],
    //     },
    //   ],
    // },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
