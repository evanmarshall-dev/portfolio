import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

// This is where we will store all of the functions we will use to grab data.
// * For getProjects we return a Promise which is an array of Projects. This allows us to specify TS types from types/project.ts.
export async function getProjects(): Promise<Project[]> {
  // Within this function we will use our query language (groq) to grab all of our projects we created within the Sanity Studio.
  // The createClient allows us to use out next-sanity package to to create a client that can read from our content.
  const client = createClient({
    // Pass in an object for our config. This will be similar to our sanity.config.ts file, but slightly different. It ONLY will be used to read from our content, whereas the sanity.config.ts file is used to read and write to our content to generate our Sanity Studio. We will not need plugins, schema, title or base path.
    projectId: "a5uyscvx",
    dataset: "production",
    apiVersion: "2023-09-18",
  });

  // Now with our client created, we can go and read data from our Sanity Studio.
  // We will take the client and perform a FETCH. This will use our groq query language. The groq function comes from our next-sanity package.
  return client.fetch(
    // The asterisks grabs everything from our dataset.
    // The square brackets filters down what we want to query for and then open up a projection (curly brackets).
    // With type == projects will pull all of our projects.
    // From the projects we will grab all of our data (i.e. _id, _createdAt, name, slug, etc.).
    // Since "slug" was a data type we label it to be slug.current meaning just slug from now on. Same for image, where we display the url on our front end. Image.asset will go down to the url and this will be named image.
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}
