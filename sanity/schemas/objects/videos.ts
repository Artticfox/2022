export default {
  name: "videos",
  type: "object",

  fields: [
    {
      type: "cloudinary.asset",
      name: "video",
      title: "Video",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
    },
    {
      type: "boolean",
      name: "mobile",
      title: "Is Mobile",
      initialValue: false,
    },
  ],
};
