const timelineSteps = [
  {
    phase: 'Day 1',
    title: 'Discovery & Planning',
    description: 'Audit call to understand requirements, define scope, and set expectations.',
    icon: '🔍',
  },
  {
    phase: 'Day 2-3',
    title: 'Build & Iterate',
    description: 'Rapid development with daily check-ins. You see progress in real-time.',
    icon: '⚡',
  },
  {
    phase: 'Day 4',
    title: 'Review & Refine',
    description: 'Demo the solution, gather feedback, make adjustments.',
    icon: '🔄',
  },
  {
    phase: 'Day 5',
    title: 'Deploy & Document',
    description: 'Production deployment, documentation, and handoff. You own everything.',
    icon: '🚀',
  },
]

export default function EngagementTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2"></div>

      {/* Timeline steps */}
      <div className="space-y-12">
        {timelineSteps.map((step, index) => (
          <div
            key={step.phase}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-accent flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(223,255,0,0.3)]">
                {step.icon}
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex-1 p-6 bg-surface border border-border rounded-xl ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <p className="text-accent font-mono text-sm mb-2">{step.phase}</p>
              <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
