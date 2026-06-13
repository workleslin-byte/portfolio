import { defineType, defineField, defineArrayMember } from "sanity";

export const workItemSchema = defineType({
  name: "workItem",
  title: "Work Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Blog Growth", value: "blog-growth" },
          { title: "SEO", value: "seo" },
          { title: "Email Marketing", value: "email-marketing" },
          { title: "Push Notifications", value: "push-notifications" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Long-Form Writing", value: "long-form-writing" },
          { title: "Pocket Notes", value: "pocket-notes" },
          { title: "Full-Stack Build", value: "pocket-notes-build" },
          { title: "AI Engineering", value: "ai-engineering" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "subheadline",
      title: "Sub-headline",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "delta", title: "Delta", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
