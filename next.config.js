const { PHASE_PRODUCTION_BUILD } = require("next/constants")

// Each ward is its own Vercel project built from this codebase; these must be set per project.
// See .env.example.
const REQUIRED_ENV = ["NEXT_PUBLIC_WARD_NAME", "LDW_WARD_PATH", "LDW_KEY"]

module.exports = (phase) => {
  const missing = REQUIRED_ENV.filter((name) => !process.env[name])
  if (missing.length) {
    const message = `Missing required environment variables: ${missing.join(", ")}`
    // Fail the deploy rather than shipping a site that renders blank or errors on every request
    if (phase === PHASE_PRODUCTION_BUILD) throw new Error(message)
    console.warn(`\n⚠ ${message}\n`)
  }

  return {
    reactStrictMode: true,
    turbopack: {
      root: __dirname,
    },
    async rewrites() {
      return [{ source: "/site.webmanifest", destination: "/api/manifest" }]
    },
  }
}
