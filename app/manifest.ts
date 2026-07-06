import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christina Steinhoff — Executive Coach Dubai",
    short_name: "Christina Steinhoff",
    description: "Executive & emotional mastery coaching for leaders and founders. Science + Soul Fusion™.",
    start_url: "/",
    display: "standalone",
    background_color: "#060606",
    theme_color: "#c9a86c",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
