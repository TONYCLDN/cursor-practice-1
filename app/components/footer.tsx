import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4">AI Consultancy</h3>
            <p className="text-text-secondary text-sm max-w-md">
              Leverage over Busywork. Ship internal tools 10x faster with AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  The Lab
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-text-secondary text-sm">Creative Prompting</li>
              <li className="text-text-secondary text-sm">Workflow Automation</li>
              <li className="text-text-secondary text-sm">Rapid App Dev</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} AI Consultancy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-text-secondary text-xs font-mono">
              Built with Next.js × Tailwind × Editorial Terminal aesthetic
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
