const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
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
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "startDate",
      title: "StartDate",
      type: "date",
    },
    {
      name: "endDate",
      title: "EndDate",
      type: "date",
    },
    {
      name: "currentJob",
      title: "CurrentJob",
      type: "boolean",
    },
    // {
    //   name: "technologies",
    //   title: "Technologies",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "skill" } }],
    // },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default experience;
