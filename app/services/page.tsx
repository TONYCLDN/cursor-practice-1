import type { Metadata } from 'next'
import ServiceSection from './components/service-section'

export const metadata: Metadata = {
  title: 'Services | AI Consultancy',
  description: 'Creative prompting, workflow automation, and rapid app development services for pragmatic founders.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-mono text-sm mb-4">Our Services</p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            The Toolkit
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Three core services designed to eliminate busywork and maximize leverage.
            No buzzwords, just pragmatic solutions that ship.
          </p>
        </div>
      </section>

      {/* Creative Prompting */}
      <ServiceSection
        id="creative-prompting"
        subtitle="Service 01"
        title="Creative Prompting"
        description="We build Midjourney styles consistent with your brand guidelines. High-fidelity image and video systems that actually match your visual identity—not generic AI art."
        benefits={[
          'Custom AI model training aligned with brand guidelines',
          'Reusable prompt libraries for consistent output',
          'Style transfer for existing brand assets',
          'Video generation workflows (Runway, Pika, etc.)',
          'Marketing asset automation pipelines',
        ]}
        examples={[
          'E-commerce product photography with consistent lighting and angles',
          'Social media content that matches brand colors and typography',
          'Video ads generated from text scripts with brand-specific visuals',
          'Print-ready designs for campaigns and collateral',
        ]}
        cta="Start a Creative Prompting Project"
      />

      {/* Workflow Automation */}
      <ServiceSection
        id="workflow-automation"
        subtitle="Service 02"
        title="Workflow Automation"
        description="Remove the 'glue work' between apps. We connect your tools and eliminate the manual copy-paste nightmares that waste hours every week."
        benefits={[
          'Cross-platform integrations (Zapier, Make, n8n)',
          'Custom API connections for proprietary systems',
          'Real-time data syncing between databases',
          'No-code automation setup with documentation',
          'Workflow optimization and bottleneck analysis',
        ]}
        examples={[
          'CRM to email marketing sync (HubSpot → Mailchimp)',
          'Order processing automation (Shopify → fulfillment → accounting)',
          'Lead qualification pipelines with auto-follow-ups',
          'Content publishing workflows (Notion → WordPress → social)',
        ]}
        cta="Automate My Workflow"
      />

      {/* Rapid App Dev */}
      <ServiceSection
        id="rapid-app-dev"
        subtitle="Service 03"
        title="Rapid App Development"
        description="Ship internal tools 10x faster. We build the software your team needs but doesn't have budget for a Senior Dev to build. Think of us as junior-level engineering on steroids."
        benefits={[
          'MVPs delivered in days, not months',
          'Full-stack web applications with modern frameworks',
          'Database design and backend API development',
          'User authentication and role-based permissions',
          'Tested, documented, and deployed to production',
        ]}
        examples={[
          'Internal dashboards for operations teams',
          'Customer portals for order tracking and support',
          'Inventory management systems with barcode scanning',
          'Booking platforms for service-based businesses',
          'Admin panels for content management',
        ]}
        cta="Build My Internal Tool"
      />

      {/* Bottom CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Book a free audit call. We&apos;ll analyze your workflow and recommend the best approach.
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
