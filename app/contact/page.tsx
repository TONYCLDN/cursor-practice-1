import type { Metadata } from 'next'
import ContactForm from './components/contact-form'

export const metadata: Metadata = {
  title: 'Contact | AI Consultancy',
  description: 'Book a free audit call. We\'ll analyze your workflow and recommend the best AI-powered solutions.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-mono text-sm mb-4">Get Started</p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Audit My Business
          </h1>
          <p className="text-xl text-text-secondary">
            Book a free audit call. We&apos;ll analyze your workflow, identify automation opportunities,
            and recommend the best approach—no sales pitch, just pragmatic advice.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-12 bg-surface border border-border rounded-xl">
            <ContactForm />
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-accent font-mono text-sm mb-2">Response Time</p>
              <p className="font-heading font-semibold">Within 24 hours</p>
            </div>
            <div>
              <p className="text-accent font-mono text-sm mb-2">Audit Call</p>
              <p className="font-heading font-semibold">30 minutes, free</p>
            </div>
            <div>
              <p className="text-accent font-mono text-sm mb-2">No Obligation</p>
              <p className="font-heading font-semibold">Zero pressure</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                What happens after I submit this form?
              </h3>
              <p className="text-text-secondary">
                We&apos;ll email you within 24 hours to schedule a 30-minute audit call. No commitment required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                What do you cover in the audit call?
              </h3>
              <p className="text-text-secondary">
                We&apos;ll review your current workflow, identify bottlenecks, and recommend specific AI solutions.
                If we&apos;re a good fit, we&apos;ll propose a sprint plan. If not, we&apos;ll point you in the right direction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Do you work with businesses outside the US?
              </h3>
              <p className="text-text-secondary">
                Yes! We work with clients globally. All communication happens via email, Slack, or video calls.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                What if I&apos;m not sure which service I need?
              </h3>
              <p className="text-text-secondary">
                That&apos;s exactly what the audit call is for. We&apos;ll help you figure out the best approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
