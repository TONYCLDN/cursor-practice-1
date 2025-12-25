interface ServiceSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  benefits: string[]
  examples: string[]
  cta: string
}

export default function ServiceSection({
  id,
  title,
  subtitle,
  description,
  benefits,
  examples,
  cta,
}: ServiceSectionProps) {
  return (
    <section id={id} className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div>
            <p className="text-accent font-mono text-sm mb-4">{subtitle}</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              {title}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {description}
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-accent text-background font-heading font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]"
            >
              {cta}
            </a>
          </div>

          {/* Right Column - Benefits & Examples */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-surface border border-border rounded-xl p-8">
              <h3 className="text-xl font-heading font-semibold mb-4">
                What You Get
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-text-secondary">
                    <span className="text-accent mr-3 flex-shrink-0 font-mono">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examples */}
            <div className="bg-surface border border-border rounded-xl p-8">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Real Applications
              </h3>
              <ul className="space-y-3">
                {examples.map((example, index) => (
                  <li key={index} className="flex items-start text-text-secondary">
                    <span className="text-accent mr-3 flex-shrink-0">→</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-border"></div>
      </div>
    </section>
  )
}
