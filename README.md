# EduQuest Monorepo

## Stack
- Apps: `apps/web` (Next.js + TS + Tailwind), `apps/api` (NestJS)
- Tooling: pnpm workspaces + Turborepo, ESLint, Prettier, Husky, Commitlint
- CI: GitHub Actions

## Dev
1) `pnpm i`
2) copy `.env.example` to `.env` in `apps/web` and `apps/api`
3) `pnpm dev`  (runs both apps)

- Web: http://localhost:3000
- API: http://localhost:4000/health

## Scripts
- `pnpm dev` | `pnpm build` | `pnpm lint` | `pnpm test`
