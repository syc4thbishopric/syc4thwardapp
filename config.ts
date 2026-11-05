/**
 * Site configuration. Everything ward-specific comes from environment variables so the
 * same codebase can be deployed once per ward. See .env.example for the full list.
 *
 * NEXT_PUBLIC_* values are inlined into the browser bundle at build time, so changing
 * them in Vercel requires a redeploy.
 */

// Tolerate values pasted into Vercel with surrounding quotes or whitespace (e.g. "Sycamores 4th Ward")
const env = (value: string | undefined) => (value || "").trim().replace(/^(["'])(.*)\1$/, "$2").trim()

export const config = {
  wardName: env(process.env.NEXT_PUBLIC_WARD_NAME),
  // Link back to the stake site. Leave unset on the stake site itself to hide the link.
  stakeUrl: env(process.env.NEXT_PUBLIC_STAKE_URL),
  gtmId: env(process.env.NEXT_PUBLIC_GTM_ID),
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}

// Server-only values (never sent to the browser)
export const serverConfig = {
  apiUrl: env(process.env.LDW_API_URL) || "https://api.latterdayward.com/api",
  apiWard: env(process.env.LDW_WARD_PATH),
  apiKey: env(process.env.LDW_KEY),
  // Optional: pin the home page hero to a specific data card. Defaults to the first "hero-card".
  heroCardId: env(process.env.LDW_HERO_CARD_ID),
}
