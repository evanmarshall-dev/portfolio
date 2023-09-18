import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemas/pageInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo],
};
