import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'

interface Degree {
  label: string
  institution: string
  location: string
  duration: string
  dateLabel: string
  gpa: string
  credentialId?: string
  summaCumLaude?: boolean
  honorsDistinction?: string
}

const degrees: Degree[] = [
  {
    label: 'Master of Science | Data Science',
    institution: 'Auburn University',
    location: 'Auburn, AL',
    duration: 'Aug 2026 – May 2027 (Expected)',
    dateLabel: 'August 2026',
    gpa: 'N/A',
  },
  {
    label: 'Bachelor of Science | Applied Mathematics',
    institution: 'Auburn University',
    location: 'Auburn, AL',
    duration: 'Aug 2022 – May 2026',
    dateLabel: 'May 2026',
    gpa: '3.97/4.0',
    summaCumLaude: true,
    honorsDistinction: 'Honors Scholar',
    credentialId: '2697-ULBQ-MYRM',
  },
  {
    label: 'Undergraduate Certificate | Artificial Intelligence Engineering',
    institution: 'Auburn University',
    location: 'Auburn, AL',
    duration: 'Jan 2025 – May 2026',
    dateLabel: 'May 2026',
    gpa: '4.0/4.0',
    credentialId: '26UH-XDAA-M4R2',
  },
]

function CredentialSection({ credentialId }: { credentialId: string }) {
  const [shown, setShown] = useState(false)
  const [copied, setCopied] = useState(false)

  function copyId() {
    navigator.clipboard.writeText(credentialId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <a
          href="https://ediploma.auburn.edu/validate/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Validate Credential
          <ExternalLink className="w-3 h-3" />
        </a>
        <button
          onClick={() => setShown((s) => !s)}
          className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {shown ? 'Hide Credential ID' : 'Show Credential ID'}
        </button>
      </div>

      {shown && (
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
          <span className="flex-1 text-xs font-mono text-gray-700 truncate">{credentialId}</span>
          <button
            onClick={copyId}
            className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-colors"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  )
}

function DegreeBlock({ degree, isLast }: { degree: Degree; isLast: boolean }) {
  return (
    <div className="flex gap-6">
      {/* Date */}
      <div className="w-28 text-right text-sm text-gray-400 font-medium pt-2 flex-shrink-0">
        {degree.dateLabel}
      </div>

      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-gray-900 ring-4 ring-white mt-1.5 flex-shrink-0" />
        {!isLast && <div className="w-px bg-gray-200 flex-1 mt-1" />}
      </div>

      {/* Card */}
      <div className={`flex-1 ${!isLast ? 'mb-10' : ''}`}>
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{degree.label}</h3>
          <div className="text-sm font-medium text-gray-500 mb-1">{degree.institution}</div>
          <div className="flex gap-3 text-sm text-gray-400 mb-3">
            <span>{degree.location}</span>
            <span>·</span>
            <span>{degree.duration}</span>
          </div>
          <div className="text-sm text-gray-500 mb-1">
            GPA: <span className="font-medium text-gray-700">{degree.gpa}</span>
            {degree.summaCumLaude && (
              <span className="ml-2 italic text-gray-500">Summa Cum Laude</span>
            )}
          </div>
          {degree.honorsDistinction && (
            <div className="text-sm text-gray-500 mb-1">
              Honors Distinction: <span className="font-medium text-gray-700">{degree.honorsDistinction}</span>
            </div>
          )}
          {degree.credentialId && (
            <CredentialSection credentialId={degree.credentialId} />
          )}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Education</h2>
      <div className="flex flex-col">
        {degrees.map((degree, i) => (
          <DegreeBlock
            key={degree.label}
            degree={degree}
            isLast={i === degrees.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
