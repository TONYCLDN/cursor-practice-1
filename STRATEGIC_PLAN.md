# AI Consultancy Website — Strategic Build Plan

## 1. Core Concept & Positioning
**The "Non-Generic" Angle:** Most AI agencies sell "The Future." You sell **"Leverage."**
Avoid: Space backgrounds, glowing brains, robot hands, and generic gradients.
Embrace: High-density information, editorial typography, "behind-the-scenes" process shots, and terminal-inspired precision.

**Marketing "Vibe Coding":** Frame it as **"Rapid Software Delivery"** or **"Junior-ish Engineering."**
- *The Pitch:* "We build the software your team needs but doesn't have the budget for a Senior Dev to build. We ship internal tools and MVPs at 5x the speed by leveraging modern AI-first development workflows."

---

## 2. Information Architecture (What we're building)

### Pages
1.  **Home (The Manifesto):** Focus on the "Busywork vs. Leverage" problem.
2.  **Services (The Toolkit):**
    *   **Creative Prompting:** High-fidelity video and image systems for marketing.
    *   **Workflow Automation:** Removing the "glue work" between apps.
    *   **Rapid App Dev:** Frame Vibe coding as high-velocity junior engineering.
3.  **The Lab (Case Studies):** Not just "what we did," but "how it works." Show the prompts, show the code snippets.
4.  **Process (How we ship):** The "Sprint" model. 1 week, 2 weeks, or Monthly Retainer.
5.  **Contact (The Audit Engine):** A high-conversion section designed to capture lead details: Name, Email, Telephone, and Business Type.
    *   **The Hook:** "Audit my business" button that triggers a premium interaction.

---

## 3. Design System & Visual Identity

### Theme: "The Editorial Terminal"
Think *The New York Times* meets *Stripe* meets *Cursor*.

### Color Palettes (Pick One)

#### Option A: "Deep Obsidian & Volt" (High Contrast, Bold)
*   **Background:** `#050505` (Deepest Black)
*   **Surface:** `#111111` (Elevated cards)
*   **Accent:** `#DFFF00` (Volt Green - for CTAs/Success)
*   **Text:** `#FFFFFF` (Primary), `#A1A1AA` (Secondary)
*   **Border:** `#27272A` (Subtle dividers)

#### Option B: "Studio Paper & Ink" (Professional, Editorial)
*   **Background:** `#FBFBF9` (Warm Paper)
*   **Surface:** `#FFFFFF` (White)
*   **Accent:** `#0000FF` (Classic International Blue - for CTAs)
*   **Text:** `#121212` (Ink Black), `#666666` (Subtle)
*   **Border:** `#E5E5E5` (Thin grid lines)

#### Option C: "Slate & Ochre" (Sophisticated, Earthy-Tech)
*   **Background:** `#0F172A` (Deep Slate)
*   **Surface:** `#1E293B`
*   **Accent:** `#F59E0B` (Ochre/Amber - for warmth)
*   **Text:** `#F8FAFC`, `#94A3B8`
*   **Border:** `#334155`

### Typography
*   **Headings:** *Space Grotesk* or *Sora* (Geometric, technical but modern).
*   **Body:** *Inter* or *IBM Plex Sans* (Highly readable, neutral).
*   **Accents/Code:** *JetBrains Mono* or *IBM Plex Mono* (The "Vibe" coding signature).

---

## 4. Technical Stack (How it's built)

### Framework: Next.js (App Router)
*   **Why:** Best-in-class performance, SEO, and developer experience.

### Styling: Tailwind CSS + Radix UI
*   **The Customization Layer:** We won't use stock Shadcn. We will modify the `tailwind.config.js` to use our custom palette and increase border-radius/spacing for a more premium feel.

### Content: Contentlayer / MDX
*   **Why:** Allows you to write Case Studies and Service details in Markdown but render them as beautiful, interactive React components.

### Form Handling: Resend + React Email
*   **Why:** Clean, developer-centric email delivery for your "Request an Audit" flow.

---

## 5. Copy Strategy

### Headlines that don't sound like AI-spam:
*   Instead of: "Revolutionize your business with AI."
*   Try: **"Ship internal tools 10x faster."**
*   Try: **"Build a prompt library your marketing team actually uses."**
*   Try: **"AI systems for the Pragmatic Founder."**

### "Junior-ish Software Dev" Copy:
"We don't build the next Google. We build the tool that replaces your messy spreadsheet. We build the customer portal your ops team has been asking for. We use AI to code like a junior dev on steroids—shipping robust, tested, and documented features in days, not months."

---

## 6. Implementation Roadmap

### Phase 1: The Foundation (Week 1)
*   Setup Next.js repo.
*   Configure Tailwind with the chosen **Color Palette**.
*   Build the "Global Nav" and "Footer" (The structural frame).

### Phase 2: The Core Pages (Week 2)
*   **Home:** Hero section + The 3 Service Pillars.
*   **Services:** Deep dive into Prompting, Automation, and Junior-Dev apps.
*   **Contact:** Build the "Audit Request" form.

### Phase 3: The "Proof" (Week 3)
*   Add 2-3 detailed Case Studies (even if they are demo projects).
*   Refine the mobile experience (making it feel like a native app).

---

## 7. How to keep it "World-Class"
1.  **Micro-interactions:** Subtle hover effects on cards, smooth transitions between pages.
2.  **Specifics > Generalities:** Don't say "We do image prompting." Say "We build Midjourney styles consistent with your brand guidelines."
3.  **The "Terminal" Hook:** Include a small, non-functional (or functional) terminal window on the Home page showing a "deploying" sequence for an AI-generated app.

---

## 8. Lead Capture: The "Audit My Business" Engine

To ensure the form looks world-class and non-generic, we will treat it as a "Diagnostic Tool" rather than a standard contact form.

### Form Fields
*   **Full Name:** Floating label with a subtle mono-spaced hint.
*   **Business Email:** Validation that highlights the field in the `Accent` color on focus.
*   **Telephone Number:** Modern input with international prefix support.
*   **Business Type:** A custom-styled dropdown or a set of "Selectable Chips" (e.g., E-commerce, SaaS, Agency, Local Service) to keep the interaction tactile.

### The "Audit my business" Button Design
*   **Visual Style:** A high-contrast, "glassmorphism" or "brutalist" style button depending on the chosen palette.
*   **Interaction:** On hover, the button should show a subtle "scanning" animation or a slight glow of the `Accent` color.
*   **The "Non-Generic" Detail:** Instead of a standard loading spinner, when clicked (even if non-functional for now), it could show a momentary "Analyzing Workflow..." status message in a terminal-style font.

