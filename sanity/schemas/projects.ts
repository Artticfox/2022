import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";

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
      name: "industry",
      type: "string",
      title: "Industry",
    },
    {
      name: "year",
      type: "number",
      title: "Year",
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "images",
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
    // {
    //   name: "description",
    //   title: "Description",
    //   type: "array",
    //   of: [
    //     {
    //       type: "block",
    //       marks: {
    //         annotations: [
    //           {
    //             name: "link",
    //             type: "object",
    //             title: "Link",
    //             fields: [
    //               {
    //                 name: "href",
    //                 type: "url",
    //                 title: "URL",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //   ],
    // },
    {
      name: "challenge",
      title: "Challenge",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "concept",
      title: "Concept",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "solution",
      title: "Solution",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "excerpt",
      type: "text",
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
    {
      name: "videos",
      type: "array",
      title: "Videos",
      of: [{ name: "video", title: "Video file", type: "mux.video" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
