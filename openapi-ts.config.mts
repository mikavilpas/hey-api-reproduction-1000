// This file is used to generate the client code for the API.

import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./reproduction.yaml",
  client: "@hey-api/client-fetch",
  services: {
    asClass: true,
  },
  types: {
    // avoid typescript enums because they are easy to misuse, and they can
    // always be replaced with string unions. This is also recommended by
    // @hey-api/openapi-ts
    enums: false,
  },
  output: {
    path: "src/generated/client",
    format: "prettier",
  },
});
