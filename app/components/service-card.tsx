import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  details: string[]
}

export default function ServiceCard({ title, description, icon, href, details }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <article className="h-full p-8 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(223,255,0,0.15)] hover:-translate-y-1">
        {/* Icon/Visual Element */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-background border border-border rounded-lg">
            <span className="text-2xl font-mono text-accent">{icon}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed">
          {description}
        </p>

        {/* Details List */}
        <ul className="space-y-2 mb-6">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-text-secondary">
              <span className="text-accent mr-2 flex-shrink-0">→</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="flex items-center text-accent font-mono text-sm group-hover:gap-2 transition-all">
          <span>Learn more</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </article>
    </Link>
  )
}
