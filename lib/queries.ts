import { groq } from "next-sanity";

export const getAllWorkItems = groq`
  *[_type == "workItem"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    order,
    headline,
    subheadline,
    stats,
    coverImage,
    featured
  }
`;

export const getFeaturedWorkItems = groq`
  *[_type == "workItem" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    category,
    order,
    headline,
    subheadline,
    stats,
    coverImage
  }
`;

export const getWorkItemBySlug = (slug: string) => groq`
  *[_type == "workItem" && slug.current == ${JSON.stringify(slug)}][0] {
    _id,
    title,
    slug,
    category,
    order,
    headline,
    subheadline,
    body,
    stats,
    coverImage,
    featured
  }
`;

export const getSiteSettings = groq`
  *[_type == "siteSettings"][0] {
    _id,
    heroTagline,
    heroName,
    heroPrimaryLine,
    heroSecondaryLine,
    ctaHeadline,
    ctaSubtext,
    aboutBody,
    metaTitle,
    metaDescription
  }
`;
