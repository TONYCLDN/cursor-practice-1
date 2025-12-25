import Link from 'next/link'
import type { CaseStudy } from '../case-studies'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/lab/${caseStudy.slug}`} className="group block">
      <article className="h-full p-8 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(223,255,0,0.15)] hover:-translate-y-1">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-accent font-mono text-xs">{caseStudy.category}</span>
          <span className="text-text-secondary text-xs">{caseStudy.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
          {caseStudy.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-6">
          {caseStudy.description}
        </p>

        {/* Read More */}
        <div className="flex items-center text-accent font-mono text-sm group-hover:gap-2 transition-all">
          <span>Read case study</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>

        {/* Date */}
        <div className="mt-6 pt-6 border-t border-border">
          <span className="text-text-secondary text-xs">
            {new Date(caseStudy.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </article>
    </Link>
  )
}
