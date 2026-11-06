/**
 * Single source of truth for the "What are you interested in?" options.
 * Used by the public form, the API enum, the admin filters and CSV export.
 */
export const INTEREST_2027_OPTIONS = [
  { value: "attending", label: "Attending the awards" },
  { value: "nominations", label: "Award nominations" },
  { value: "sponsorship", label: "Sponsorship & partnership opportunities" },
  { value: "partnership", label: "Partnership opportunities" },
  { value: "media", label: "Media and marketing opportunities" },
  { value: "speaker", label: "Speaker" },
  { value: "discussion-panel", label: "Discussion panel" },
  { value: "other", label: "Other" },
];

// Keep retired values available for existing submissions and admin filters.
export const INTEREST_2027_FORM_OPTIONS = INTEREST_2027_OPTIONS.filter(
  (option) => option.value !== "partnership" && option.value !== "media"
);

export const INTEREST_2027_VALUES = INTEREST_2027_OPTIONS.map((o) => o.value);

export const INTEREST_2027_LABELS = Object.fromEntries(
  INTEREST_2027_OPTIONS.map((o) => [o.value, o.label])
);

export const INTEREST_2027_SOURCES = ["page", "home-section", "announcement-bar"];

export const interest2027Label = (value) => INTEREST_2027_LABELS[value] || value;
