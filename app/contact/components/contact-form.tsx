'use client'

import { useState, FormEvent } from 'react'
import FloatingLabelInput from './floating-label-input'
import BusinessTypeChips from './business-type-chips'
import TerminalLoading from './terminal-loading'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', businessType: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 2000)
    }
  }

  return (
    <>
      {isSubmitting && <TerminalLoading />}

      <form onSubmit={handleSubmit} className="space-y-6">
        <FloatingLabelInput
          id="name"
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          required
        />

        <FloatingLabelInput
          id="email"
          name="email"
          label="Business Email"
          type="email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          required
        />

        <FloatingLabelInput
          id="phone"
          name="phone"
          label="Telephone Number"
          type="tel"
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
          required
        />

        <BusinessTypeChips
          selected={formData.businessType}
          onChange={(value) => setFormData({ ...formData, businessType: value })}
        />

        <button
          type="submit"
          disabled={!formData.businessType || isSubmitting}
          className="group relative w-full px-8 py-4 bg-accent text-background font-heading font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(223,255,0,0.5)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span className="relative z-10">
            {isSubmitting ? 'Analyzing Workflow...' : 'Audit My Business'}
          </span>
        </button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-surface border border-accent rounded-lg">
            <p className="text-accent font-mono text-sm">
              ✓ Request submitted! We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-surface border border-red-500 rounded-lg">
            <p className="text-red-500 font-mono text-sm">
              ✗ Something went wrong. Please try again or email us directly.
            </p>
          </div>
        )}
      </form>
    </>
  )
}
