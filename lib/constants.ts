export const SITE = {
  name: "Christina Steinhoff",
  tagline: "Executive & Emotional Mastery Coach · Dubai",
  description:
    "Christina Steinhoff is an executive and emotional mastery coach in Dubai. Her Science + Soul Fusion™ method combines NLP (Neuro-Linguistic Programming), master hypnosis, and Time Line Therapy® to help executives, founders, and high-achieving women build resilient leadership and sustainable success — without burnout.",
  url: "https://christinasteinhoff.com",
  email: "mail@christinasteinhoff.com",
  phone: "+971 56 273 7368",
  whatsapp: "https://wa.me/971562737368",
  location: "Green Community West, Dubai Investment Park 1, Dubai, UAE",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/christinasteinhof/",
  facebook: "https://www.facebook.com/share/1FbRkQY78X/",
  linkedin: "https://www.linkedin.com/in/christina-steinhoff-thecoscoaching",
};

// No hardcoded month — Calendly defaults to the current month.
export const CALENDLY = "https://calendly.com/consultwithc/consultingwithchris";

// One canonical label for the primary action across the whole site.
export const CTA_LABEL = "Book a discovery call";

// Christina's real, verifiable certifications — single source of truth for
// the About section, credential badges, and JSON-LD hasCredential entries.
// None of these are a clinical psychotherapy license; the site never claims
// otherwise (see ScopeNote component and the compliance notes in memory).
export const CREDENTIALS = [
  "Executive & Leadership Coach",
  "Executive & Emotional Mastery Coach",
  "Professional Master Life Coach",
  "Licensed Master Practitioner of NLP",
  "Certified Master Hypnotist",
  "Advanced Conversational Hypnotherapy Practitioner",
  "Time Line Therapy® Practitioner",
  "ICF Continuing Coach Education (CCE) Accredited",
  "Accredited by the Federation of NLP Coaching Professionals (FNLP)",
  "Creator of Science + Soul Fusion™",
] as const;

// Reused stat callouts (About stats card, Hero trust list, FAQ copy).
// Keep these three numbers in sync everywhere they appear.
export const STATS = {
  years: "10+",
  yearsLabel: "In practice",
  clients: "400+",
  clientsLabel: "Private clients",
  continents: "3",
  continentsLabel: "Continents",
};

// Real third-party press mentions — never fabricate an entry here (see the
// compliance stance in memory re: fabricated reviews/schema). Powers the
// homepage Press section, the Footer link, and the Person `subjectOf` JSON-LD.
export const PRESS = [
  {
    outlet: "UAE Stories",
    title: "Christina Steinhoff and the Science of Calm Leadership for High-Achieving Women",
    url: "https://uaestories.com/christina-steinhoff-and-the-science/",
    author: "Aditi Goyal",
    date: "2026-06-25",
  },
] as const;

// The flagship Science + Soul Fusion™ pricing structure — single source of
// truth for the homepage Investment section. All three tiers share the same
// methodology; they differ in duration, continuity, and level of support.
export const PROGRAMS = {
  eyebrow: "The Investment",
  headline: "Three Levels of Science + Soul Fusion™",
  subtext:
    "Every programme is built on the same foundational methodology and differs in duration, continuity, and level of support.",
  tiers: [
    {
      level: "Level 01",
      name: "Fusion Essential",
      price: "AED 18,000",
      features: [
        "10 hours of personalised private coaching",
        "Initial assessment and goal mapping",
        "Subconscious pattern work",
        "Emotional mastery and integration exercises",
      ],
      featured: false,
    },
    {
      level: "Level 02",
      name: "Fusion Signature",
      price: "AED 35,000",
      badge: "Most Popular",
      features: [
        "Everything in Essential",
        "Six months of structured post-programme integration",
        "Private coaching support",
        "Accountability check-ins",
      ],
      featured: true,
    },
    {
      level: "Level 03",
      name: "Fusion Private",
      price: "AED 60,000",
      features: [
        "Everything in Essential",
        "Twelve months of high-touch private mentorship",
        "Extended integration",
        "Priority coaching support",
      ],
      featured: false,
    },
  ],
  breakthrough: {
    name: "Private Breakthrough Session",
    price: "AED 1,500",
    description:
      "A focused private session to experience the approach, gain clarity on your next level, and explore what's possible.",
  },
} as const;

// Per-tier Zbooni payment links. Zbooni issues one hosted checkout link per
// order (not an API) — generate one link per tier + the breakthrough session
// in the Zbooni app and paste them here. Until a link is filled in, the
// Investment section falls back to the Calendly discovery call for that tier.
export const ZBOONI_LINKS: Record<"essential" | "signature" | "private" | "breakthrough", string> = {
  essential: "",
  signature: "",
  private: "",
  breakthrough: "",
};
