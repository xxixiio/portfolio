import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            description: 'If this is checked the post will not be published',
          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
            required: true,
          },
          {
            type: "datetime",
            name: "posted",
            label: "Date Posted",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Post Category",
            required: false,
          },
          {
            type: "string",
            name: "tag",
            label: "Post Tag",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
