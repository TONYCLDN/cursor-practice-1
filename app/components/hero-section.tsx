import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Overline */}
        <p className="text-accent font-mono text-sm mb-6 animate-fade-in">
          The Editorial Terminal
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          Leverage
          <br />
          <span className="text-text-secondary">Over Busywork</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Ship internal tools 10x faster with AI-powered creative prompting,
          workflow automation, and rapid app development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-accent text-background font-heading font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(223,255,0,0.5)] active:scale-95"
          >
            <span className="relative z-10">Audit My Business</span>
          </Link>

          <Link
            href="/lab"
            className="px-8 py-4 bg-surface text-text-primary font-heading font-semibold rounded-lg border border-border transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_rgba(223,255,0,0.2)] active:scale-95"
          >
            View Case Studies
          </Link>
        </div>

        {/* Stats or Social Proof */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-border pt-12">
          <div>
            <p className="text-3xl font-heading font-bold text-accent">10x</p>
            <p className="text-sm text-text-secondary mt-1">Faster Delivery</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-accent">3</p>
            <p className="text-sm text-text-secondary mt-1">Core Services</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold text-accent">100%</p>
            <p className="text-sm text-text-secondary mt-1">Transparency</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}
