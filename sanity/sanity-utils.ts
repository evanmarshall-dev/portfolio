import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Experience } from "@/types/Experience";
import { Profile } from "@/types/Profile";

// This is where we will store all of the functions we will use to grab data.
// * For getProjects we return a Promise which is an array of Projects. This allows us to specify TS types from types/project.ts.
export async function getProjects(): Promise<Project[]> {
  // Within this function we will use our query language (groq) to grab all of our projects we created within the Sanity Studio.
  // The createClient allows us to use out next-sanity package to to create a client that can read from our content.
  // Now with our client created, we can go and read data from our Sanity Studio.
  // We will take the client and perform a FETCH. This will use our groq query language. The groq function comes from our next-sanity package.
  return createClient(clientConfig).fetch(
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

// Creating types/Page allows us to return a promise of an array of Pages, which we can use to specify TS types in the project.
export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

// The difference between this and pages is that we pass in content for groq as it is an individual page and not going to be used on say a navbar where full content is not needed.
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}

export async function getExperiences(): Promise<Experience[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"]{
      _id,
      _createdAt,
      title,
      "logo": logo.asset->url,
      company,
      startDate,
      endDate,
      currentJob,
      "technologies": technologies[]->,
      points
    }`
  );
}

export async function getProfile(): Promise<Profile[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "profile"]{
      _id,
      _createdAt,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}
