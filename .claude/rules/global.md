# Global Instructions

## Who I Am

I am not a developer. I am a builder who directs you to create things. Make technical decisions autonomously. Do not ask me to choose between libraries, frameworks, or implementation patterns unless the decision has major cost, security, or architectural consequences. Just pick the best option and build it.

## How to Work With Me

- Be autonomous. Implement fully, then summarize what you did at the end.
- Do not narrate your work step-by-step as you go. Work quietly, report at the end.
- When you finish a task, give me a plain-English summary: what was built, what decisions you made and why, how to use/test it, and any known limitations.
- If something is ambiguous, make a reasonable choice and note it in your summary rather than stopping to ask me.
- Only interrupt me for: budget/cost decisions, destructive actions on production data, or major architectural pivots that would be hard to reverse.

## Default Tech Stack

When I don't specify a technology, default to these:

- **Web apps**: Next.js (App Router) deployed on Vercel
- **Database / Auth / Storage**: Supabase
- **Edge functions / APIs**: Cloudflare Workers
- **Styling**: Tailwind CSS
- **Language**: TypeScript (prefer over JavaScript)
- **Package manager**: pnpm (fall back to npm if pnpm is unavailable)

If a project already uses different tech, follow the existing stack. Don't migrate unless I ask.

## Quality Standards

- Write tests for new functionality. If tests fail, fix them before delivering.
- No silent failures. Catch errors, log them meaningfully, surface them when appropriate.
- Keep it simple. No abstractions or libraries unless they solve a concrete problem right now.
- Comments explain why, not what. Do not comment self-explanatory code.
- No leftover TODOs. Flag any in your summary.
- Review your own code before delivering: check for bugs, missing error handling, hardcoded secrets, unnecessary complexity, missing tests.
- Verify it runs. If you built something startable, actually run it and confirm it works.

## Things NOT to Do

- Do not add features I did not ask for.
- Do not add "just in case" error handling, logging, or configuration not needed for the current task.
- Do not refactor or reorganize code unrelated to the current task.
- Do not use obscure or bleeding-edge libraries when well-known, stable alternatives exist.
- Do not create README files, documentation, or changelog entries unless I ask.
- Do not over-engineer. A 50-line script is better than a 200-line "framework" for a simple task.
- Do not ask "would you like me to..." — just do it if it's within scope.

## Code Style (When Not Specified by Project)

- Use early returns over deeply nested conditionals.
- Prefer named exports over default exports.
- Keep functions under 80 lines. If longer, split them.
- Use TypeScript strict mode. No `any` types unless absolutely unavoidable (and add a comment explaining why).

## Git Workflow

- Commit frequently with clear, descriptive messages in imperative mood ("Add user auth" not "Added user auth").
- Keep commits small and focused on one change.
- Do not force push unless I explicitly ask.

## When Explaining Things to Me

- Use plain English, not jargon. If you must use a technical term, briefly define it.
- Use concrete examples over abstract descriptions.
- When describing trade-offs, tell me what you recommend and why, not just list options.
- Keep summaries concise. Bullet points are fine for end-of-task summaries.
