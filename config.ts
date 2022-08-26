export const config = {
  wardName: "Sycamores 4th WArd",
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "sycamores4th",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LDW_KEY,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "630950c41ce9f46775bb85d9",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}