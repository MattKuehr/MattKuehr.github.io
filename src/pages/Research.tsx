interface ResearchGroup {
  title: string
  institution: string
  duration: string
  summary: string
  bullets: string[]
}

const groups: ResearchGroup[] = [
  {
    title: 'Research Assistant',
    institution: 'Auburn University',
    duration: 'Aug 2024 – Present',
    summary: 'A brief summary of this research role goes here.',
    bullets: [
      'Research contribution one.',
      'Research contribution two.',
      'Research contribution three.',
    ],
  },
  {
    title: 'Undergraduate Research Fellow',
    institution: 'Auburn University',
    duration: 'Aug 2025 – Dec 2025',
    summary: 'A brief summary of this research role goes here.',
    bullets: [
      'Research contribution one.',
      'Research contribution two.',
      'Research contribution three.',
    ],
  },
]

export default function Research() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Research</h2>
      <div className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.title} className="border border-gray-200 rounded-xl p-6 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{group.title}</h3>
            <div className="text-sm font-medium text-gray-500 mb-1">{group.institution}</div>
            <div className="text-sm text-gray-400 mb-4">{group.duration}</div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{group.summary}</p>
            <ul className="space-y-2">
              {group.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
