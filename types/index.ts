import type { PortableTextBlock } from "sanity";

export interface Stat {
  label: string;
  value: string;
  delta?: string;
}

export interface WorkItem {
  _id: string;
  _type: "workItem";
  title: string;
  slug: { current: string };
  category?:
    | "blog-growth"
    | "seo"
    | "email-marketing"
    | "push-notifications"
    | "linkedin"
    | "long-form-writing"
    | "pocket-notes"
    | "pocket-notes-build"
    | "ai-engineering";
  order?: number;
  headline?: string;
  subheadline?: string;
  body?: PortableTextBlock[];
  stats?: Stat[];
  coverImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  featured?: boolean;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  heroTagline?: string;
  heroName?: string;
  heroPrimaryLine?: string;
  heroSecondaryLine?: string;
  ctaHeadline?: string;
  ctaSubtext?: string;
  aboutBody?: string;
  metaTitle?: string;
  metaDescription?: string;
}
