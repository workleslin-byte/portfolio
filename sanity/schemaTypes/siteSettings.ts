import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroTagline", title: "Hero Tagline", type: "string" }),
    defineField({ name: "heroName", title: "Hero Name", type: "string" }),
    defineField({
      name: "heroPrimaryLine",
      title: "Hero Primary Line",
      type: "string",
    }),
    defineField({
      name: "heroSecondaryLine",
      title: "Hero Secondary Line",
      type: "string",
    }),
    defineField({ name: "ctaHeadline", title: "CTA Headline", type: "string" }),
    defineField({ name: "ctaSubtext", title: "CTA Subtext", type: "string" }),
    defineField({ name: "aboutBody", title: "About Body", type: "text" }),
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    }),
  ],
});
