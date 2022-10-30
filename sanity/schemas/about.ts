export const servicesOb = {
  name: "servicesOb",
  type: "object",
  title: "Services",
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
    {
      name: "list",
      type: "array",
      title: "List",
      of: [
        {
          type: "reference",
          to: [{ type: "services" }],
        },
      ],
    },
  ],
};

export const partnersOb = {
  name: "partnersOb",
  type: "object",
  title: "Partners",
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
    {
      name: "list",
      type: "array",
      title: "List",
      of: [
        {
          type: "reference",
          to: [{ type: "partners" }],
        },
      ],
    },
  ],
};

export const processOb = {
  name: "processOb",
  type: "object",
  title: "Process",
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
    {
      name: "list",
      type: "array",
      title: "List",
      of: [
        {
          type: "reference",
          to: [{ type: "process" }],
        },
      ],
    },
  ],
};

export const softwaresOb = {
  name: "softwaresOb",
  type: "object",
  title: "Softwares",
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
    {
      name: "list",
      type: "array",
      title: "List",
      of: [
        {
          type: "reference",
          to: [{ type: "softwares" }],
        },
      ],
    },
  ],
};

export const about = {
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
      type: "servicesOb",
      title: "Services",
    },

    {
      name: "partners",
      type: "partnersOb",
      title: "Partners",
    },

    {
      name: "process",
      type: "processOb",
      title: "Process",
    },

    {
      name: "softwares",
      type: "softwaresOb",
      title: "softwares",
    },
  ],
};
