'use client'

import { useEffect, useState } from 'react'

export default function TerminalLoading() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-surface border border-accent rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(223,255,0,0.3)]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <p className="text-text-secondary text-xs font-mono ml-4">terminal — processing</p>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="text-accent">$ analyzing workflow{dots}</div>
            <div className="text-text-secondary">⚡ Scanning business requirements...</div>
            <div className="text-text-secondary">⚡ Identifying automation opportunities...</div>
            <div className="text-text-secondary">⚡ Calculating potential time savings...</div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-4 bg-accent animate-pulse"></div>
              <span className="text-accent">Processing your audit request...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
