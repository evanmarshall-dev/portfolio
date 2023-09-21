import { FaFileCode } from "react-icons/fa6";

const page = {
  name: "page",
  title: "Pages",
  type: "document",
  icon: FaFileCode,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default page;
