"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

// Next 13 will render all pages under app folder from the server. Therefore everything gets rendered on the server, which minimizes JavaScript sent to client. In previous versions on NextJS, which used the pages folder, a lot of the rendering happened on the client side.
// Since Sanity Studio happens on the client side, we need to add the "use client" tag on the top of the page. This is how we tell NextJS not to render this page on the server, but rather render it on the browser on the client.

export default function AdminPage() {
  // NextStudio is a component from the Sanity package.
  // config is equal to the sanity.config.ts we just created.
  return <NextStudio config={config} />;
}
