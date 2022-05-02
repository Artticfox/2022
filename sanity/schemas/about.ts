import schemaTypes from "all:part:@sanity/base/schema-type";

export default {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "array",
      title: "Description",
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
      name: "image",
      type: "image",
      title: "Image",
    },

    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          type: "reference",
          to: [{ type: "services" }],
        },
      ],
    },
    {
      name: "descriptionServices",
      type: "text",
      title: "Services Description",
    },
    {
      name: "partners",
      type: "array",
      title: "Partners",
      of: [
        {
          type: "reference",
          to: [{ type: "softwares" }],
        },
      ],
    },
    {
      name: "descriptionPartners",
      type: "text",
      title: "Partners Description",
    },
    {
      name: "process",
      type: "array",
      title: "Process",
      of: [
        {
          type: "reference",
          to: [{ type: "services" }],
        },
      ],
    },
    {
      name: "descriptionProcess",
      type: "text",
      title: "Process Description",
    },
    {
      name: "softwares",
      type: "array",
      title: "Softwares",
      of: [
        {
          type: "reference",
          to: [{ type: "softwares" }],
        },
      ],
    },
    {
      name: "descriptionSoftwares",
      type: "text",
      title: "Software Description",
    },
  ],
};
