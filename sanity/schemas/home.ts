import schemaTypes from "all:part:@sanity/base/schema-type";

export default {
  name: "home",
  type: "document",
  title: "home",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      title: "Text",
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
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
  ],
};
