'use client'

import { useEffect, useState } from 'react'

export default function TerminalWindow() {
  const [currentLine, setCurrentLine] = useState(0)

  const terminalLines = [
    { text: '$ claude deploy --project ai-consultancy', delay: 0 },
    { text: '⚡ Analyzing project structure...', delay: 800 },
    { text: '✓ Dependencies resolved', delay: 1600 },
    { text: '✓ Building optimized bundle', delay: 2200 },
    { text: '✓ Running automated tests', delay: 2800 },
    { text: '✓ All tests passed', delay: 3400 },
    { text: '🚀 Deploying to production...', delay: 4200 },
    { text: '✓ Deployment complete', delay: 5000 },
    { text: '→ https://your-app.vercel.app', delay: 5600 },
  ]

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = []

    terminalLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setCurrentLine(index + 1)
      }, line.delay)
      intervals.push(timeout)
    })

    return () => intervals.forEach(clearTimeout)
  }, [])

  return (
    <div className="max-w-2xl mx-auto my-24 px-4">
      <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <p className="text-text-secondary text-xs font-mono ml-4">terminal — deployment</p>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
          {terminalLines.slice(0, currentLine).map((line, index) => (
            <div
              key={index}
              className={`animate-fade-in ${
                line.text.startsWith('✓') || line.text.startsWith('🚀')
                  ? 'text-accent'
                  : line.text.startsWith('→')
                  ? 'text-blue-400 underline'
                  : 'text-text-primary'
              }`}
            >
              {line.text}
            </div>
          ))}
          {currentLine < terminalLines.length && (
            <span className="inline-block w-2 h-4 bg-accent animate-pulse"></span>
          )}
        </div>
      </div>

      <p className="text-center text-text-secondary text-sm mt-6 font-mono">
        This is how fast we ship. Days, not months.
      </p>
    </div>
  )
}
