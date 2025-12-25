import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-heading font-bold mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-heading font-bold mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-heading font-semibold mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-6">
        {children}
      </p>
    ),
    code: ({ children, className }) => {
      const isInline = !className
      return isInline ? (
        <code className="px-1.5 py-0.5 bg-surface border border-border rounded text-accent font-mono text-sm">
          {children}
        </code>
      ) : (
        <code className={`${className} font-mono text-sm`}>{children}</code>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-surface border border-border rounded-xl p-6 overflow-x-auto mb-8 font-mono text-sm">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 ml-6">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="flex items-start text-text-secondary">
        <span className="text-accent mr-3 flex-shrink-0">→</span>
        <span>{children}</span>
      </li>
    ),
    ...components,
  }
}
