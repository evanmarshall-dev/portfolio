import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  title: "Web Developer Portfolio",
  // Use current date for apiVersion.
  apiVersion: "2023-09-18",
  useCdn: process.env.NODE_ENV === "production",
  // All routes after admin will go to page.tsx which is in the next.js app folder: admin/[[...index]]/page.tsx.
  basePath: "/admin",
  // deskTool is a top level view within Sanity Studio, which is needed to view the studio.
  plugins: [deskTool(), visionTool()],
  // Below is where we define our schemas and add all schemas (from schemas/index.ts) to the schema type array.
  schema: { types: schemas },
});

export default config;
