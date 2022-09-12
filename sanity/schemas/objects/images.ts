export default {
  name: "images",
  type: "object",

  fields: [
    {
      type: "text",
      name: "alt",
      title: "Alternative text",
    },
    {
      type: "image",
      name: "image",
      title: "Image",
    },
  ],
};
