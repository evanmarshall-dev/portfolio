// This is for reading data from our client (NextJS) and simplifies the repetitive code on sanity-utils.ts. As opposed to sanity.config.js, which is used for creating our Sanity Studio.
const config = {
  // Pass in an object for our config. This will be similar to our sanity.config.ts file, but slightly different. It ONLY will be used to read from our content, whereas the sanity.config.ts file is used to read and write to our content to generate our Sanity Studio. We will not need plugins, schema, title or base path.
  // dataset: "production",
  // projectId: "a5uyscvx",
  // apiVersion: "2023-09-18",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2023-09-18",
};

export default config;
