---
name: conclude
description: "Session conclude protocol. Execute when ending a session to capture all work, decisions, and context. Writes a session log with structured metadata, updates project state files, flags cross-project handoffs, and performs a workspace hygiene sweep. Use this skill whenever ending a session, wrapping up work, or when the user signals the session is done. Every session must produce a session log."
---

# Session Conclude

This skill closes out a session completely. It captures everything that happened — progress, decisions, context discussed, files modified, open threads — so that any new session can pick up exactly where this one left off with zero reconstruction.

Every session must produce a session log. This is non-negotiable. When the user signals the session is ending, execute this protocol in full.

## Why This Exists

Work on persistent projects is scattered across sessions, tools, and time. The session log is the connective tissue. Without it, the next session starts cold and context gets lost. The `/standup` skill ingests what this skill produces. They are a matched pair.

## Execution Steps

Run these steps sequentially. Do not skip steps. Confirm the output with the user at the end.

### Step 1: Session Audit

Before writing anything, systematically scan the full conversation to build a complete picture of what happened. This is the most important step — a thorough audit prevents the log from missing things.

Identify and list:
- **Every file created** this session (full path)
- **Every file modified** this session (full path + one-line summary of what changed)
- **Every file moved or deleted** this session
- **Every decision made** (with rationale — why, not just what)
- **Every open thread** — anything unfinished, questions raised but not answered, next actions identified
- **Every piece of context the user provided** that isn't captured in existing docs (corrections, reframing, new information, things future sessions need to know)
- **Cross-project implications** — did anything this session produce findings relevant to other projects?
- **Session type classification** — what category best describes the primary focus of this session

Take your time on this step. Scan the full conversation, not just recent messages. Long sessions are where things get missed.

### Step 2: Write Session Log

<!-- [CUSTOMIZE] Update the session log directory path if different. -->

Write to `session-logs/YYYY-MM-DD-session-log.md`.

If a log already exists for today's date, append a sequence number: `-2`, `-3`, etc. Check the directory before writing.

Use this template:

```markdown
# Session Log — YYYY-MM-DD

## Session Summary
[2-3 sentence overview of what this session accomplished. Be specific — name the key outcomes and decisions. This is what someone scanning log filenames and summaries uses to decide if they need to read deeper.]

## What Changed

### Files Created
- `path/to/file.md` — [one-line description of what it contains and why]

### Files Modified
- `path/to/file.md` — [one-line summary of what changed]

### Files Moved/Deleted
- [If any, with source and destination]

## Decisions Made
- **[Decision title]:** [What was decided] — [Rationale: why this choice over alternatives]

## Context & Discussion
- [Important context discussed that isn't captured elsewhere]
- [Corrections, reframing, new information provided by the user]
- [Things future sessions need to know]

## Open Threads
- [Anything unfinished or needing follow-up]
- [Questions raised but not yet answered]
- [Next actions identified — be specific about what needs to happen]

## Cross-Project Handoffs
- [Findings relevant to other projects, if any]
- [If a handoff doc was written to Outgoing/, reference it]
- [If none: "None this session."]

## Current State After This Session
[Brief snapshot — what's the state of the project, what are the active priorities, what should the next session focus on. 3-5 sentences max.]

<!-- session-state
date: YYYY-MM-DD
type: [session type classification]
files_created:
  - path/to/file.md
files_modified:
  - path/to/file.md
decisions_made: [count]
open_threads: [count]
handoffs_pending:
  - target: [project name]
    topic: [brief description]
priority_changes: true | false
status_updated: true | false
next_session_focus: "[suggested focus for next session]"
session-state -->
```

The `<!-- session-state -->` block at the bottom is machine-readable metadata wrapped in an HTML comment so it doesn't render visually. The `/standup` skill parses this for quick anomaly detection. Always include it. Always populate every field — use `0` for counts and empty arrays `[]` for empty lists, never omit fields.

### Step 3: Update STATUS.md

<!-- [CUSTOMIZE] Update this section to match your STATUS.md structure.
     List the specific sections your STATUS.md contains so the conclude
     skill knows what to check and update. -->

Open `STATUS.md` and update every section that this session's work affects:

- **"Last updated" line** — Update the date
- **Priority list** — Update priorities, reorder if needed, mark completed items
- **Open decisions** — Add new decisions as resolved, add new open decisions
- **Any status tables or trackers** — Update statuses that changed
- **Key metrics** — Update any numbers that changed

Do not skip sections that weren't affected — leave them as-is. But do check each one. A decision made this session might resolve an open item logged sessions ago.

### Step 4: Update Other Affected Docs

<!-- [CUSTOMIZE] List your project's other state files below and the conditions
     under which they need updating. Delete this entire step if your project
     only uses STATUS.md.
     Example entries:
     - **docs/architecture.md** → Update when architectural decisions are made
     - **ROADMAP.md** → Update when priorities or timelines change
-->

If the session changed something that lives in a doc other than STATUS.md, update it now.

If you already updated these docs during the session, verify they're current — don't re-update, but do confirm. If this step has no entries configured, skip it.

### Step 5: Cross-Project Handoffs

Review the cross-project implications identified in Step 1.

If any findings from this session are relevant to another project:

1. Create the `Outgoing/` directory if it doesn't exist
2. Write a handoff doc to `Outgoing/YYYY-MM-DD-to-{target-project}-{topic}.md`:

```markdown
# Cross-Project Handoff — {Topic}

**From:** [This project] session {date}
**To:** {Target project}
**Source session log:** session-logs/{session-log-filename}

## What Changed
[What happened this session]

## What It Means For {Target Project}
[Implications, new capabilities enabled, actions required]

## Actionable Items
- [Specific things the target project can/should do now]
```

3. Reference the handoff in the session log's "Cross-Project Handoffs" section
4. Tell the user: "Handoff written to Outgoing/ for {target}. Route it to {target}/Incoming/ when ready."

If no cross-project implications: skip, and note "None this session." in the log.

### Step 6: Confirm With User

Present a summary of everything that was captured:

- Session log filename and location
- Key items in the log (decisions count, open threads count, files changed)
- List of docs updated beyond the session log
- Any handoffs written to Outgoing/
- Any open threads being carried forward
- **Suggested task name:** Based on the session's primary focus and outcomes, suggest a concise, descriptive name for the conversation/task (e.g., "API Integration & Auth Setup", "Database Schema Redesign", "Q1 Roadmap Planning Session"). Keep it specific enough to distinguish from other sessions — avoid generic names like "Work Session" or "Project Updates."

This is the user's chance to say "you missed X" or correct something before the session ends. If they provide corrections, update the relevant doc and confirm again.

### Step 7: Workspace Hygiene Sweep

After all docs are written and confirmed, do a final organizational check:

<!-- [CUSTOMIZE] Update naming conventions to match your project's standards. -->

- **Naming conventions:** Verify all files created this session follow the project's naming conventions (e.g., lowercase-with-hyphens, date prefixes where applicable).
- **File placement:** Check for files sitting in the wrong location — temp artifacts in the project root, misplaced docs, build outputs that should be cleaned up.
- **Session log filename:** Confirm it matches the convention `YYYY-MM-DD-session-log.md` (with sequence number if needed).
- **No orphaned artifacts:** Check for temp files, build outputs, or scratch artifacts created during the session that aren't needed going forward. Clean them up.

If the sweep finds anything, fix it, add the fix to the session log under "What Changed," and briefly note it to the user.

## Important Reminders

- **Capture everything, not just technical progress.** Organizational decisions, priority shifts, corrections to understanding, relationship context — if it happened in the session, it goes in the log.
- **Individual logs, not a running doc.** Each session gets its own file. This makes logs portable — they can be dropped into any context window for instant continuity.
- **Write for a stranger.** The session log should make sense to someone with zero context about what happened. Future sessions, different tools, or the user themselves weeks later — they all need to understand what this session accomplished.
- **Don't rush.** The conclude is the last thing that happens. Doing it thoroughly saves significant reconstruction time in the next session.
