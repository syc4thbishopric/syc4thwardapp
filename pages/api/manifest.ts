import { NextApiRequest, NextApiResponse } from "next"
import { config } from "../../config"

// Served at /site.webmanifest (see rewrites in next.config.js) so the installed app name follows the ward
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/manifest+json")
  res.setHeader("Cache-Control", "public, max-age=3600")
  res.json({
    name: config.wardName,
    short_name: config.wardName,
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
  })
}
