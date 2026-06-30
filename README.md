# 0% Done

A fun AI-powered persuasion game for university club showcases. You did 0% — convince your AI teammate to do the rest of the group project.

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS
- **Supabase** (PostgreSQL + Realtime)
- **OpenRouter** (AI scoring)

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `OPENROUTER_API_KEY` | From [openrouter.ai](https://openrouter.ai) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server only) |
| `OPENROUTER_MODEL` | Default: `google/gemini-2.0-flash-001` |
| `OPENROUTER_MAX_TOKENS` | Max completion tokens (default: `500`) |
| `NEXT_PUBLIC_INPUT_TIME_LIMIT_SEC` | Default: `45` |

### 3. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Open **SQL Editor** and run [`supabase/migrations/001_submissions.sql`](supabase/migrations/001_submissions.sql)
3. Enable **Realtime** for the `submissions` table (Database → Replication)

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Mode selection (Quick / Challenge) |
| `/play/quick` | Quick mode — Lazy AI personality |
| `/play/challenge` | Random scenario + personality |
| `/result/[id]` | Score + AI response |
| `/leaderboard` | Top scores & recent attempts |
| `/showcase` | Projector screen (auto-rotating) |

## Prize Tiers (organizer only)

Prize tiers are stored in the database but **not shown to players**. Query in Supabase:

```sql
SELECT message, total, prize_tier, created_at
FROM submissions
ORDER BY created_at DESC;
```

| Tier | Score |
|------|-------|
| Gold | 80–100 |
| Silver | 60–79 |
| Bronze | 40–59 |
| Participation | 0–39 |

## Deploy to Vercel

1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Add all env vars from `.env.example`
4. Deploy
5. Point your event QR code to the production URL

## Event Checklist

- [ ] Run Supabase migration
- [ ] Set OpenRouter spending limit
- [ ] Test on phone (iOS Safari + Android Chrome)
- [ ] Open `/showcase` on projector
- [ ] Print QR code linking to production URL
