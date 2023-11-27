This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Downloading Twitter avatars

It's safer to serve images locally. Avoiding CORS issues and privacy blockers.

To download images and use their local paths, run:

```bash
npx ts-node scripts/downloadAvatars.mts app/resources/[FILENAME]].json
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
