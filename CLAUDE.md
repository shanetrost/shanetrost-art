# CLAUDE.md — shanetrost-art

**Type:** Static site (Squarespace export served via Nginx in Docker) for Shane's art portfolio.
**Status:** LIVE at shanetrost.art, deployed on Railway (Dockerfile build, `railway.toml`).
**Notes:** Small repo (3 commits as of 2026-08-30) — mostly a Squarespace export wrapped for Railway hosting, not an actively-developed app.

---

## CLAUDE_OS End-of-Session Handoff

**Trigger:** the session ends, or Shane says "wrap up" / "log this" / "update memory".

**TASKS.md is the single source of truth for project execution history.** If work isn't written there, it did not happen as far as every future session is concerned. Write all five sections. Do not summarize in chat instead of writing the files.

**1. TASKS.md — append under TODAY** (`~/Projects/CLAUDE_OS/TASKS.md`), using these headings:
- **SHIPPED** — commits with hashes, one line each: what changed and why
- **FOUND** — bugs or issues discovered, fixed or only flagged
- **DECIDED** — judgment calls made, and the reasoning
- **WRONG** — anything asserted mid-session that turned out false and had to be corrected. **Never omit these.** Highest-value lines in the log; they never appear in a commit message.
- **OPEN** — what's left, split into what needs Shane's hands vs. what a future session can pick up

**2. This file (`CLAUDE.md`)** — architecture, gotchas, watch items, footer date. **Doc edits auto-commit, locked 2026-08-30 (Shane's call, portfolio-wide) — commit and push directly to `main` rather than leaving it uncommitted for later review**, matching this repo's existing direct-to-main deploy pattern. Full rationale: `~/Projects/CLAUDE_OS/memory/decisions.md`.

**3. session_log.md** — one 3-line entry (Date | Focus | Output/Decision), drop the oldest to keep 3, bump "Last updated".

**4. NOTION SYNC block** — append inside the same TASKS.md entry. Notion is the live task system and every session reconciles against it:

```
### NOTION SYNC
- DONE: <exact Notion task name> — <evidence: commit hash or how verified>
- PROGRESS: <task name> — <what moved, what remains>
- ADD: <new task name> | Initiative | Priority | Due date
- BLOCKED: <task name> — <what is blocking it>
```

Only mark **DONE** what is complete and verified. Partial work is **PROGRESS**. If this session's work has no matching Notion task, **ADD** it. If this session has Notion access, execute directly and append "(executed)"; otherwise leave the block for Cowork or the 11pm sync.
Tasks DB: `https://www.notion.so/ff5498a4a3134532b209aac6f93b3738` · data source `collection://dc8dd72b-71df-469a-898f-696421ff95d4`

**5. Memory — route anything durable to the right file:** founding insights → `memory/core-insights.md` · decisions with rationale → `memory/decisions.md` · cross-project facts → `CLAUDE_OS/CLAUDE.md` · project deep context → `memory/projects/<project>.md`

**Fallback:** the `claude-code-eod-sync` Cowork scheduled task runs at 11pm ET daily and synthesizes a TASKS.md entry if none exists, and backfills `session_log.md` if the session skipped it. Manual TASKS.md logging is still the primary path for this repo unless/until it's added to the eod-sync task's repo scan (not yet confirmed — check `CLAUDE_OS`'s eod-sync prompt before assuming automatic coverage).

---

*Shane Trost — Handoff scaffolding added 2026-08-30 (portfolio-wide propagation, see TASKS.md same date), backfilling this file for a repo with no CLAUDE.md at all.*
