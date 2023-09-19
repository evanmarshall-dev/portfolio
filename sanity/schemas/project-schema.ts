const project = {
  name: "project",
  // The title is what shows up in the studio.
  title: "Projects",
  type: "document",
  // The fields array contains a bunch of objects which each correspond to a field in the schema.
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      // Sanity has a built in slug type.
      type: "slug",
      // Slug will be defined by the name field above. This can be customized to whatever you want.
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      // This hot spot option allows us to zoom in, pick section of image to show up, etc., within Studio.
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      // An array of type block is Sanities way of doing a rich text editor.
      of: [{ type: "block" }],
    },
  ],
};

export default project;
