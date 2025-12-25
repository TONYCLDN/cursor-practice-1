import type { Metadata } from 'next'
import CaseStudyCard from './components/case-study-card'
import { caseStudies } from './case-studies'

export const metadata: Metadata = {
  title: 'The Lab | AI Consultancy',
  description: 'Case studies showing how we build AI solutions. See the prompts, code, and results—complete transparency.',
}

export default function LabPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-mono text-sm mb-4">The Lab</p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Behind the Scenes
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We don&apos;t just show what we built—we show <em>how</em> we built it.
            See the prompts, the code, and the real results. Complete transparency.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Want results like these?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Let&apos;s build something together. Start with a free audit call.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-background font-heading font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]"
          >
            Audit My Business
          </a>
        </div>
      </section>
    </div>
  )
}
