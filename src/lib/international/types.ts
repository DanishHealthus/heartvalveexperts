/**
 * Types for the HVE international-patient endpoints:
 *   GET /wp-json/hve/v1/international-pages          → country index (hub grid)
 *   GET /wp-json/hve/v1/international-pages/{slug}    → one country page
 *
 * `Raw*` mirrors what WordPress/ACF actually sends — `false` for an empty image
 * or an empty repeater, `""` for an unfilled text field, `\r\n` inside plain
 * textareas. Every country shares the same 56 ACF keys, but a country that has
 * not been written yet (Oman, Somalia today) returns them all empty, so every
 * normalised section is nullable and the UI must drop it silently.
 */

import type { RawImageField, SpecialityImage } from "@/lib/speciality/types";

export type { RawImageField };

/* ------------------------------------------------------------------ *
 * Raw API shapes
 * ------------------------------------------------------------------ */

/** `review_lists[]` (HTML body) and `who_lists[]` (often title-only). */
export interface RawIntlListItem {
  title?: string | null;
  description?: string | null;
}

/** `content_boxs[]` — an image card with a rich-text body. */
export interface RawIntlBox {
  image?: RawImageField;
  title?: string | null;
  description?: string | null;
}

export interface RawIntlFaq {
  question?: string | null;
  answer?: string | null;
}

/**
 * Written out in full rather than generated, so a renamed ACF key shows up as a
 * type error here instead of as a silently missing section on the page.
 *
 * Note the hyphen in the `follow-up_*` group — that is the real key name.
 */
export interface RawIntlAcf {
  banner_title?: string | null;
  banner_button_name?: string | null;
  banner_image?: RawImageField;

  about_subtitle?: string | null;
  about_title?: string | null;
  about_button_name?: string | null;
  about_image?: RawImageField;
  about_description?: string | null;

  patients_subtitle?: string | null;
  patients_title?: string | null;
  patients_button_name?: string | null;
  patients_image?: RawImageField;
  patients_description?: string | null;

  review_subtitle?: string | null;
  review_title?: string | null;
  review_image?: RawImageField;
  review_before_description?: string | null;
  review_lists?: RawIntlListItem[] | false | null;
  review_after_description?: string | null;

  who_subtitle?: string | null;
  who_title?: string | null;
  who_image?: RawImageField;
  who_before_description?: string | null;
  who_lists?: RawIntlListItem[] | false | null;
  who_after_description?: string | null;

  how_title?: string | null;
  how_description?: string | null;

  privacy_title?: string | null;
  privacy_description?: string | null;

  content_subtitle?: string | null;
  content_title?: string | null;
  content_boxs?: RawIntlBox[] | false | null;

  medical_subtitle?: string | null;
  medical_title?: string | null;
  medical_button_name?: string | null;
  medical_image?: RawImageField;
  medical_description?: string | null;

  journey_subtitle?: string | null;
  journey_title?: string | null;
  journey_button_name?: string | null;
  journey_image?: RawImageField;
  journey_description?: string | null;

  "follow-up_subtitle"?: string | null;
  "follow-up_title"?: string | null;
  "follow-up_button_name"?: string | null;
  "follow-up_image"?: RawImageField;
  "follow-up_description"?: string | null;

  understanding_title?: string | null;
  understanding_description?: string | null;

  faqs?: RawIntlFaq[] | false | null;

  cta_subtitle?: string | null;
  cta_title?: string | null;
  cta_image?: RawImageField;
  cta_button_name_one?: string | null;
  cta_button_name_two?: string | null;
  cta_description?: string | null;
}

export interface RawInternationalPage {
  id?: number | string | null;
  name?: string | null;
  slug?: string | null;
  meta?: { title?: string | null; description?: string | null } | null;
  acf?: RawIntlAcf | null;
}

export interface RawInternationalCountry {
  id?: number | string | null;
  name?: string | null;
  slug?: string | null;
  excerpt?: string | null;
  image?: RawImageField;
}

/* ------------------------------------------------------------------ *
 * Normalised shapes consumed by the components
 * ------------------------------------------------------------------ */

/** Same shape the speciality template already renders, so `MediaFrame` etc. work. */
export type IntlImage = SpecialityImage;

/** One card in the hub's "Select Your Country" grid. */
export interface InternationalCountry {
  id: number | null;
  name: string;
  slug: string;
  excerpt: string;
  image: IntlImage | null;
}

export interface IntlBanner {
  title: string;
  buttonName: string;
  image: IntlImage | null;
}

/** Image beside copy — `about`, `patients`, `medical`, `journey`, `follow-up`. */
export interface IntlSplitSection {
  /** Stable key, used for anchors and React keys. */
  key: string;
  subtitle: string;
  title: string;
  /** Sanitised HTML. */
  description: string;
  buttonName: string;
  image: IntlImage | null;
}

export interface IntlListItem {
  id: string;
  title: string;
  /** Sanitised HTML. Empty when ACF only filled the title (a plain checklist). */
  description: string;
}

/** Image beside an ordered/checklist body — `review` and `who`. */
export interface IntlListSection {
  key: string;
  subtitle: string;
  title: string;
  image: IntlImage | null;
  /** Sanitised HTML. */
  beforeDescription: string;
  items: IntlListItem[];
  /** Sanitised HTML. */
  afterDescription: string;
  /** True when no item carries a body — render as a checklist, not as steps. */
  checklist: boolean;
}

/** Heading + prose only, no media — `how`, `privacy`, `understanding`. */
export interface IntlProseSection {
  key: string;
  title: string;
  /** Sanitised HTML. */
  description: string;
}

export interface IntlBox {
  id: string;
  image: IntlImage | null;
  title: string;
  /** Sanitised HTML. */
  description: string;
}

export interface IntlBoxSection {
  subtitle: string;
  title: string;
  boxes: IntlBox[];
}

export interface IntlFaq {
  id: string;
  question: string;
  /** Sanitised HTML. */
  answer: string;
}

export interface IntlFinalCta {
  subtitle: string;
  title: string;
  /** Sanitised HTML. */
  description: string;
  image: IntlImage | null;
  buttonOne: string;
  buttonTwo: string;
}

export interface InternationalPage {
  id: number | null;
  name: string;
  slug: string;
  meta: { title: string; description: string };
  banner: IntlBanner;
  about: IntlSplitSection | null;
  patients: IntlSplitSection | null;
  review: IntlListSection | null;
  who: IntlListSection | null;
  how: IntlProseSection | null;
  privacy: IntlProseSection | null;
  content: IntlBoxSection | null;
  medical: IntlSplitSection | null;
  journey: IntlSplitSection | null;
  followUp: IntlSplitSection | null;
  understanding: IntlProseSection | null;
  faqs: IntlFaq[];
  cta: IntlFinalCta | null;
}

/** Lets the page tell "no such country" apart from "the backend broke". */
export type InternationalResult =
  | { status: "ok"; data: InternationalPage }
  | { status: "not-found" }
  | { status: "error"; message: string };
