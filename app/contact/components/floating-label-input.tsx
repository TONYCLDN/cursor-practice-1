'use client'

import { useState } from 'react'

interface FloatingLabelInputProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export default function FloatingLabelInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`peer w-full px-4 py-3 bg-surface border-2 rounded-lg font-sans transition-all duration-300 outline-none ${
          isFocused || value
            ? 'border-accent pt-6 pb-2'
            : 'border-border'
        } hover:border-text-secondary focus:border-accent`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 font-mono text-sm transition-all duration-300 pointer-events-none ${
          isFocused || value
            ? 'top-2 text-accent text-xs'
            : 'top-3.5 text-text-secondary'
        }`}
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
    </div>
  )
}
