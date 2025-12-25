'use client'

interface BusinessTypeChipsProps {
  selected: string
  onChange: (type: string) => void
}

const businessTypes = [
  'E-commerce',
  'SaaS',
  'Agency',
  'Local Service',
  'Other',
]

export default function BusinessTypeChips({ selected, onChange }: BusinessTypeChipsProps) {
  return (
    <div>
      <label className="block text-sm font-mono text-text-secondary mb-3">
        Business Type <span className="text-accent">*</span>
      </label>
      <div className="flex flex-wrap gap-3">
        {businessTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onChange(type)}
            className={`px-4 py-2 rounded-lg font-heading font-semibold text-sm transition-all duration-300 ${
              selected === type
                ? 'bg-accent text-background shadow-[0_0_15px_rgba(223,255,0,0.3)]'
                : 'bg-surface border border-border hover:border-accent'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}
