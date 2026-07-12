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
