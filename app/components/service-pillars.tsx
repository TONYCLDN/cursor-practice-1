import ServiceCard from './service-card'

export default function ServicePillars() {
  const services = [
    {
      title: 'Creative Prompting',
      description: 'Build Midjourney styles consistent with your brand guidelines. High-fidelity image and video systems for marketing.',
      icon: '✦',
      href: '/services#creative-prompting',
      details: [
        'Custom AI model training',
        'Brand-consistent visual libraries',
        'Video generation workflows',
        'Marketing asset automation',
      ],
    },
    {
      title: 'Workflow Automation',
      description: 'Remove the "glue work" between apps. Connect your tools and eliminate manual data transfer.',
      icon: '⚡',
      href: '/services#workflow-automation',
      details: [
        'Cross-platform integrations',
        'No-code automation setup',
        'Custom API connections',
        'Real-time data syncing',
      ],
    },
    {
      title: 'Rapid App Dev',
      description: 'Ship internal tools your team needs but doesn\'t have budget for. AI-first development at 5x speed.',
      icon: '⟨⟩',
      href: '/services#rapid-app-dev',
      details: [
        'MVPs in days, not months',
        'Internal dashboards & portals',
        'Database-backed applications',
        'Tested, documented, deployed',
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            The Toolkit for
            <br />
            <span className="text-text-secondary">Pragmatic Founders</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Three core services designed to eliminate busywork and maximize leverage.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:gap-4 transition-all"
          >
            <span>Explore all services in detail</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
