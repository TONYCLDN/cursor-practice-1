interface SprintOption {
  name: string
  duration: string
  price: string
  description: string
  deliverables: string[]
  bestFor: string
  cta: string
}

const sprintOptions: SprintOption[] = [
  {
    name: '1 Week Sprint',
    duration: '5 business days',
    price: 'Starting at $2,500',
    description: 'Rapid prototyping and single-feature delivery. Perfect for testing ideas quickly.',
    deliverables: [
      'Single feature or MVP prototype',
      'Basic documentation',
      'Code review and cleanup',
      'Deployment to staging',
    ],
    bestFor: 'Proof of concepts, simple automations, prompt libraries',
    cta: 'Start 1-Week Sprint',
  },
  {
    name: '2 Week Sprint',
    duration: '10 business days',
    price: 'Starting at $5,000',
    description: 'Full MVP or complex integration. Most popular option for complete solutions.',
    deliverables: [
      'Full-featured application or workflow',
      'Comprehensive documentation',
      'Testing and QA',
      'Production deployment',
      '2 rounds of revisions',
    ],
    bestFor: 'Internal dashboards, workflow automations, custom integrations',
    cta: 'Start 2-Week Sprint',
  },
  {
    name: 'Monthly Retainer',
    duration: 'Ongoing partnership',
    price: 'Custom pricing',
    description: 'Continuous development and optimization. Your dedicated AI development team.',
    deliverables: [
      'Weekly feature releases',
      'Priority support',
      'Ongoing optimization',
      'Strategic consulting',
      'Unlimited revisions',
    ],
    bestFor: 'Ongoing product development, multiple projects, long-term partnerships',
    cta: 'Discuss Retainer',
  },
]

export default function SprintOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sprintOptions.map((option, index) => (
        <div
          key={option.name}
          className={`relative p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
            index === 1
              ? 'border-accent bg-surface shadow-[0_0_30px_rgba(223,255,0,0.2)]'
              : 'border-border bg-surface hover:border-accent'
          }`}
        >
          {index === 1 && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-background px-4 py-1 rounded-full text-xs font-heading font-bold">
                MOST POPULAR
              </span>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-2xl font-heading font-bold mb-2">{option.name}</h3>
            <p className="text-text-secondary text-sm mb-1">{option.duration}</p>
            <p className="text-accent font-heading text-xl font-semibold">{option.price}</p>
          </div>

          <p className="text-text-secondary mb-6 leading-relaxed">
            {option.description}
          </p>

          <div className="mb-6">
            <h4 className="font-heading font-semibold mb-3 text-sm">Deliverables:</h4>
            <ul className="space-y-2">
              {option.deliverables.map((item) => (
                <li key={item} className="flex items-start text-sm text-text-secondary">
                  <span className="text-accent mr-2 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 p-4 bg-background rounded-lg">
            <p className="text-xs text-text-secondary mb-1">Best for:</p>
            <p className="text-sm">{option.bestFor}</p>
          </div>

          <a
            href="/contact"
            className={`block w-full text-center px-6 py-3 rounded-lg font-heading font-semibold transition-all duration-300 ${
              index === 1
                ? 'bg-accent text-background hover:scale-105 hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]'
                : 'bg-surface border border-border hover:border-accent'
            }`}
          >
            {option.cta}
          </a>
        </div>
      ))}
    </div>
  )
}
