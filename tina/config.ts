import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
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
