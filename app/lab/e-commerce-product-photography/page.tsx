import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Commerce Product Photography System | The Lab',
  description: 'Built a Midjourney prompt library generating 500+ product photos per day with consistent brand aesthetic.',
}

export default function CaseStudyPage() {
  return (
    <div className="prose-content">
      <div className="mb-8">
        <p className="text-accent font-mono text-sm mb-2">Creative Prompting</p>
        <h1 className="text-4xl font-heading font-bold mb-4">
          E-Commerce Product Photography System
        </h1>
        <div className="flex gap-6 text-sm text-text-secondary">
          <span>January 15, 2025</span>
          <span>5 min read</span>
        </div>
      </div>

      <h2 className="text-3xl font-heading font-bold mt-12 mb-4">The Challenge</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        A D2C e-commerce brand was spending $15k/month on product photography—hiring photographers, renting studios, and waiting weeks for delivery. They needed 500+ product photos per month across multiple SKUs, with consistent lighting, angles, and brand aesthetic.
      </p>
      <p className="text-text-secondary leading-relaxed mb-6">
        The traditional approach wasn&apos;t scalable. As they launched new products, the photography bottleneck slowed everything down.
      </p>

      <h2 className="text-3xl font-heading font-bold mt-12 mb-4">The Solution</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        We built a <strong>Midjourney prompt library</strong> that generates production-ready product photos in minutes, not weeks. The system maintains brand consistency across thousands of variations while reducing costs by 90%.
      </p>

      <h3 className="text-2xl font-heading font-semibold mt-8 mb-3">The Prompt Library</h3>
      <p className="text-text-secondary leading-relaxed mb-6">
        Here&apos;s an example of our structured prompt system:
      </p>

      <pre className="bg-surface border border-border rounded-xl p-6 overflow-x-auto mb-8 font-mono text-sm">
        <code>{`/imagine product photography of [PRODUCT], studio lighting setup with --ar 1:1, soft shadows, white background, professional ecommerce style, consistent brand aesthetic, high resolution, Canon EOS R5 look --v 6.0 --style raw`}</code>
      </pre>

      <p className="text-text-secondary leading-relaxed mb-4">
        We created <strong>15 core prompt templates</strong> covering:
      </p>

      <ul className="space-y-2 mb-6 ml-6">
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span>Hero product shots (white background)</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span>Lifestyle context (in-use scenarios)</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
        <span>Detail close-ups (texture, materials)</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span>Seasonal variations (holiday themes)</span>
        </li>
      </ul>

      <h3 className="text-2xl font-heading font-semibold mt-8 mb-3">The Code</h3>
      <p className="text-text-secondary leading-relaxed mb-6">
        To automate batch generation, we used the Midjourney API with a custom Node.js script:
      </p>

      <pre className="bg-surface border border-border rounded-xl p-6 overflow-x-auto mb-8 font-mono text-sm">
        <code>{`import { Midjourney } from 'midjourney-api'

const mj = new Midjourney({
  apiKey: process.env.MIDJOURNEY_API_KEY,
})

async function generateProductPhotos(products: Product[]) {
  const prompts = products.map(p =>
    \`product photography of \${p.name}, studio lighting, white background, --ar 1:1 --v 6.0\`
  )

  const results = await Promise.all(
    prompts.map(prompt => mj.imagine(prompt))
  )

  return results.map(r => r.imageUrl)
}`}</code>
      </pre>

      <h3 className="text-2xl font-heading font-semibold mt-8 mb-3">Style Consistency</h3>
      <p className="text-text-secondary leading-relaxed mb-4">
        To maintain brand aesthetic, we:
      </p>

      <ul className="space-y-2 mb-6 ml-6">
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span>Created a <strong>style reference library</strong> from existing brand photos</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span>Used <code className="px-1.5 py-0.5 bg-background border border-border rounded text-accent font-mono text-xs">--sref</code> parameter to anchor all generations to brand identity</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span>Built a <strong>QA pipeline</strong> that filters out off-brand outputs</span>
        </li>
      </ul>

      <pre className="bg-surface border border-border rounded-xl p-6 overflow-x-auto mb-8 font-mono text-sm">
        <code>{`/imagine [product], --sref https://brand-library.com/ref-001.jpg --sw 50`}</code>
      </pre>

      <h2 className="text-3xl font-heading font-bold mt-12 mb-4">The Results</h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        After 2 weeks of implementation:
      </p>

      <ul className="space-y-2 mb-6 ml-6">
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>500+ photos generated per day</strong> (vs. 20 per week before)</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>$13.5k monthly savings</strong> (90% cost reduction)</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>3-hour turnaround</strong> from concept to final asset</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>100% brand consistency</strong> across all outputs</span>
        </li>
      </ul>

      <p className="text-text-secondary leading-relaxed mb-6">
        The client now launches new products in days instead of months. Photography is no longer a bottleneck—it&apos;s a competitive advantage.
      </p>

      <h2 className="text-3xl font-heading font-bold mt-12 mb-4">Key Takeaways</h2>
      <ul className="space-y-2 mb-6 ml-6">
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>Prompt engineering is a skill.</strong> Good prompts = good outputs</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>Batch automation scales.</strong> Don&apos;t manually generate one at a time</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>Style references are critical.</strong> They maintain brand identity</span>
        </li>
        <li className="flex items-start text-text-secondary">
          <span className="text-accent mr-3 flex-shrink-0">→</span>
          <span><strong>QA is non-negotiable.</strong> Filter out edge cases before publishing</span>
        </li>
      </ul>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-lg font-heading font-semibold mb-4">
          Want a custom prompt library for your brand?
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-accent text-background font-heading font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]"
        >
          Start a Creative Prompting Project
        </a>
      </div>
    </div>
  )
}

