import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "a5uyscvx",
  dataset: "production",
  title: "Web Developer Portfolio",
  // Use current date for apiVersion.
  apiVersion: "2023-09-18",
  // All routes after admin will go to page.tsx which is in the next.js app folder: admin/[[...index]]/page.tsx.
  basePath: "/admin",
  // deskTool is a top level view within Sanity Studio, which is needed to view the studio.
  plugins: [deskTool()],
});

export default config;
