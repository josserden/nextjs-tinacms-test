import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "8f396231-0637-4883-a42a-4187214d9f51",
  token: "519917b71aa8a6503dc4110c495ad7be6a6b800a",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        label: "Page",
        name: "page",
        path: "content/pages",
        format: "md",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
        ],
      },
    ],
  },
});
