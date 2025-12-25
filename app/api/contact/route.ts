import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, businessType } = body

    // Validate required fields
    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log to console (for demo purposes)
    console.log('Form submission received:', { name, email, phone, businessType })

    // Send email via Resend if API key is configured
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: 'AI Consultancy <onboarding@resend.dev>',
        to: ['your-email@example.com'], // Replace with your email
        subject: `New Audit Request from ${name}`,
        html: `
          <h2>New Audit Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
        `,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      return NextResponse.json({ success: true, data })
    }

    // Return success even without email sending (for development)
    return NextResponse.json({ success: true, message: 'Form submitted (email not configured)' })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
