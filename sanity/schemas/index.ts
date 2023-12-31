// This is where we will define and add all of our schemas for the schema type array found in sanity.config.ts.
import experience from "./experience-schema";
import page from "./page-schema";
import profile from "./profile-schema";
import project from "./project-schema";

const schemas = [project, page, experience, profile];

export default schemas;
