export interface CaseStudy {
  slug: string
  title: string
  description: string
  date: string
  category: 'Creative Prompting' | 'Workflow Automation' | 'Rapid App Dev'
  readTime: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'e-commerce-product-photography',
    title: 'E-Commerce Product Photography System',
    description: 'Built a Midjourney prompt library that generates 500+ product photos per day with consistent lighting, angles, and brand aesthetic.',
    date: '2025-01-15',
    category: 'Creative Prompting',
    readTime: '5 min read',
  },
  {
    slug: 'crm-to-email-automation',
    title: 'HubSpot to Mailchimp Automation Pipeline',
    description: 'Eliminated 15 hours/week of manual data entry by building a real-time sync between CRM and email marketing platform.',
    date: '2025-01-10',
    category: 'Workflow Automation',
    readTime: '4 min read',
  },
  {
    slug: 'internal-dashboard-mvp',
    title: 'Operations Dashboard Built in 5 Days',
    description: 'Shipped a full-stack internal dashboard for inventory tracking, replacing messy spreadsheets with a real-time web app.',
    date: '2025-01-05',
    category: 'Rapid App Dev',
    readTime: '6 min read',
  },
]
