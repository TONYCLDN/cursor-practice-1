import type { Metadata } from 'next'
import SprintOptions from './components/sprint-options'
import EngagementTimeline from './components/engagement-timeline'

export const metadata: Metadata = {
  title: 'Process | AI Consultancy',
  description: 'Our sprint-based process: 1 week, 2 weeks, or monthly retainer. Transparent, fast, and optimized for results.',
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-mono text-sm mb-4">Our Process</p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            How We Ship
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Sprint-based delivery. No endless discovery phases, no vague timelines.
            Just fast, focused execution.
          </p>
        </div>
      </section>

      {/* Sprint Options */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Choose Your Sprint
            </h2>
            <p className="text-xl text-text-secondary">
              Pick the engagement model that fits your needs
            </p>
          </div>

          <SprintOptions />
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              A Typical 1-Week Sprint
            </h2>
            <p className="text-xl text-text-secondary">
              Here's how we move from idea to production in 5 days
            </p>
          </div>

          <EngagementTimeline />
        </div>
      </section>

      {/* Why Sprint-Based */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Why Sprint-Based?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Fixed Scope, Fixed Price
              </h3>
              <p className="text-text-secondary">
                No surprise bills. You know exactly what you're getting and what it costs upfront.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Fast Feedback Loops
              </h3>
              <p className="text-text-secondary">
                Daily updates mean you catch issues early. No waiting weeks to see progress.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Ownership & Transparency
              </h3>
              <p className="text-text-secondary">
                You own all code, prompts, and IP. Full documentation included. No vendor lock-in.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Production-Ready Output
              </h3>
              <p className="text-text-secondary">
                Not just prototypes. We deploy to production, test thoroughly, and hand off a working solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to start a sprint?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Book a free audit call and we'll recommend the best approach for your project.
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
