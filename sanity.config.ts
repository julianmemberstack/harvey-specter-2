"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId: "ve70sze1",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: "project",
        title: "Project",
        type: "document",
        fields: [
          { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
          { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() },
          { name: "image", title: "Cover Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() },
          { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
          { name: "description", title: "Description", type: "text" },
          { name: "order", title: "Display Order", type: "number" },
        ],
      },
    ],
  },
});
