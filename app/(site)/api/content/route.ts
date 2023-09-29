// First api endpoint to fetch below data from a server component to create a dynamic route.

const posts = [
  {
    title: "My first post",
    slug: "my-first-post",
    content: "This is my first post",
  },
  {
    title: "My second post",
    slug: "my-second-post",
    content: "This is my second post",
  },
  {
    title: "My third post",
    slug: "my-third-post",
    content: "This is my third post",
  },
  {
    title: "My fourth post",
    slug: "my-fourth-post",
    content: "This is my fourth post",
  },
];

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}
