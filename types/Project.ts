import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  // Content is an array of PortableTextBlocks, which allows for rich text editing.
  content: PortableTextBlock[];
};
