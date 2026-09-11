/**
 * Types for the HVE speciality landing endpoint:
 *   GET /wp-json/hve/v1/landing/{slug}
 *
 * `Raw*` types mirror exactly what WordPress/ACF sends (including its quirks:
 * `false` instead of `null` for empty images, missing keys, HTML in strings).
 * The `Speciality*` types are the normalised shapes the UI renders.
 */

/* ------------------------------------------------------------------ *
 * Raw API shapes
 * ------------------------------------------------------------------ */

export interface RawAcfImage {
  url?: string | null;
  alt?: string | null;
  title?: string | null;
  width?: number | string | null;
  height?: number | string | null;
  sizes?: Record<string, string | number> | null;
}

/** ACF returns `false` for an empty image field, or a bare URL/ID string. */
export type RawImageField = RawAcfImage | string | number | false | null;

export interface RawRepeaterItem {
  image?: RawImageField;
  title?: string | null;
  description?: string | null;
  button_name?: string | null;
}

export interface RawStep {
  title?: string | null;
  description?: string | null;
}

export interface RawFaq {
  question?: string | null;
  answer?: string | null;
}

export interface RawAcf {
  banner_image?: RawImageField;
  banner_title?: string | null;
  banner_description?: string | null;
  banner_black_title?: string | null;
  banner_blue_title?: string | null;

  about_title?: string | null;
  about_image?: RawImageField;
  about_description?: string | null;
  about_button_name?: string | null;

  who_section?: RawRepeaterItem[] | false | null;

  how_title?: string | null;
  how_before_description?: string | null;
  how_image?: RawImageField;
  how_steps?: RawStep[] | false | null;
  how_after_description?: string | null;

  recovery_section?: RawRepeaterItem[] | false | null;

  faqs?: RawFaq[] | false | null;

  understand_title?: string | null;
  /** Seen in some payloads as a misspelled key — both are accepted. */
  understand_tital?: string | null;
  understand_image?: RawImageField;
  understand_description?: string | null;
  understand_button_name?: string | null;
}

export interface RawMeta {
  title?: string | null;
  description?: string | null;
}

export interface RawSpecialityLanding {
  id?: number | string | null;
  name?: string | null;
  slug?: string | null;
  meta?: RawMeta | null;
  acf?: RawAcf | null;
}

export interface RawSpecialityListItem {
  id?: number | string | null;
  name?: string | null;
  slug?: string | null;
}

export interface RawApiError {
  code?: string;
  message?: string;
  data?: { status?: number };
}

/* ------------------------------------------------------------------ *
 * Normalised shapes consumed by the components
 * ------------------------------------------------------------------ */

export interface SpecialityImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * One entry of a dynamic repeater (`who_section`, `recovery_section`).
 * Any field may be absent — components must degrade gracefully.
 */
export interface SpecialityFeature {
  id: string;
  image: SpecialityImage | null;
  title: string;
  /** Sanitised HTML. Empty string when the API sent nothing usable. */
  description: string;
  buttonName: string;
}

export interface SpecialityStep {
  id: string;
  title: string;
  description: string;
}

export interface SpecialityFaq {
  id: string;
  question: string;
  /** Sanitised HTML. */
  answer: string;
}

export interface SpecialityBanner {
  image: SpecialityImage | null;
  title: string;
  description: string;
  blackTitle: string;
  blueTitle: string;
}

export interface SpecialityAbout {
  title: string;
  image: SpecialityImage | null;
  description: string;
  buttonName: string;
}

export interface SpecialityProcedure {
  title: string;
  beforeDescription: string;
  image: SpecialityImage | null;
  steps: SpecialityStep[];
  afterDescription: string;
}

export interface SpecialityUnderstand {
  title: string;
  image: SpecialityImage | null;
  description: string;
  buttonName: string;
}

export interface SpecialityLanding {
  id: number | null;
  name: string;
  slug: string;
  meta: { title: string; description: string };
  banner: SpecialityBanner;
  about: SpecialityAbout | null;
  who: SpecialityFeature[];
  procedure: SpecialityProcedure | null;
  recovery: SpecialityFeature[];
  faqs: SpecialityFaq[];
  understand: SpecialityUnderstand | null;
}

export interface SpecialityListItem {
  id: number | null;
  name: string;
  slug: string;
}

/** Result wrapper so the page can tell "missing" apart from "backend broke". */
export type SpecialityResult =
  | { status: "ok"; data: SpecialityLanding }
  | { status: "not-found" }
  | { status: "error"; message: string };

/** Payload posted by the consultation form. */
export interface ConsultationLead {
  name: string;
  phone: string;
  city: string;
  notes: string;
  /** Slug of the speciality the lead came from. */
  speciality: string;
  /** Human readable speciality name, useful for the CRM/sheet. */
  help: string;
  source: string;
}
