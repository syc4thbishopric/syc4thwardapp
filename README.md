This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
cp .env.example .env   # then fill in LDW_KEY and the ward values
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## One codebase, multiple sites

Each site (e.g. 4thward.sycamoresstake.com, 6thward.sycamoresstake.com) is a separate Vercel
project pointing at this repo. Everything ward-specific comes from environment variables set in
**Vercel → Project → Settings → Environment Variables**. See [.env.example](.env.example) for the
full list.

| Variable | Required | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_WARD_NAME` | yes | `Sycamores 4th Ward` |
| `LDW_WARD_PATH` | yes | `sycamores4th` |
| `LDW_KEY` | yes | Latter Day Ward API key for that ward |
| `NEXT_PUBLIC_STAKE_URL` | no | `https://www.sycamoresstake.com` (omit on the stake site) |
| `NEXT_PUBLIC_GTM_ID` | no | `GTM-XXXXXXX` |
| `LDW_HERO_CARD_ID` | no | data card ID; defaults to the first `hero-card` |

The build fails if a required variable is missing. `NEXT_PUBLIC_*` values are baked in at build
time, so redeploy after changing them.

Pages under `data/` (welfare, ward mission, temple & family history, special schedules) are still
static content in the repo and are shared by every site.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
