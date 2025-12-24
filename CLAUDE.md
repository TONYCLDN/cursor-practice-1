# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Consultancy Website for an agency that helps businesses leverage AI for creative prompting, workflow automation, and rapid app development. Currently in strategic planning phase.

## Planned Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Radix UI (custom modifications, not stock Shadcn)
- **Content:** Contentlayer / MDX for case studies
- **Email/Forms:** Resend + React Email
- **Typography:** Space Grotesk or Sora (headings), Inter or IBM Plex Sans (body), JetBrains Mono or IBM Plex Mono (code)

## Development Commands (when project is initialized)

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Run production server
```

## Architecture

Five main pages:
1. **Home (Manifesto)** - Hero + 3 Service Pillars, "Busywork vs. Leverage" messaging
2. **Services** - Creative Prompting, Workflow Automation, Rapid App Dev
3. **The Lab** - Case studies showing prompts and code snippets (transparency)
4. **Process** - Sprint model options (1 week, 2 weeks, monthly retainer)
5. **Contact** - "Audit My Business" lead capture form

## Design System: "The Editorial Terminal"

Theme: The New York Times meets Stripe meets Cursor

Three color palette options in STRATEGIC_PLAN.md:
- Option A: "Deep Obsidian & Volt" (dark, high contrast)
- Option B: "Studio Paper & Ink" (light, editorial)
- Option C: "Slate & Ochre" (dark, earthy-tech)

## Key Design Principles

**Avoid:** Space backgrounds, glowing brains, robot hands, generic gradients, stock Shadcn components

**Embrace:** High-density information, editorial typography, terminal-inspired precision, premium micro-interactions

**Copy style:** Specific and pragmatic over buzzwords. "Ship internal tools 10x faster" not "Revolutionize your business with AI"

## Implementation Notes

- Customize `tailwind.config.js` with chosen palette and increased border-radius/spacing for premium feel
- Lead capture form should feel like a "Diagnostic Tool" - include selectable chips for business type, terminal-style loading states
- Include subtle hover effects, smooth page transitions
- Optional: decorative terminal window showing "deploying" sequence on home page
