import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christina Steinhoff — Life Mentor Dubai",
    short_name: "Christina Steinhoff",
    description: "Private mentorship for executives and entrepreneurs. Science + Soul Fusion™.",
    start_url: "/",
    display: "standalone",
    background_color: "#060606",
    theme_color: "#c9a86c",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
