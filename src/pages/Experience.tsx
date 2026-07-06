import { useState } from 'react'
import hadrianLogo from '../assets/hadrian-logo.png'

type Tab = 'projects' | 'skills'

interface Internship {
  season: string
  role: string
  company: string
  companyLogo?: string
  location: string
  duration: string
  projects: string[]
  skills: string[]
}

const internships: Internship[] = [
  {
    season: 'Summer 2026',
    role: 'Machine Learning Engineer Intern',
    company: 'Hadrian Automation',
    companyLogo: hadrianLogo,
    location: 'Torrance, CA',
    duration: 'May 2026 – Present',
    projects: ['I developed an end-to-end stratification routine for an OCR dataset of content from engineering drawings. To validate how the stratification decisions separated data samples, I created an embedding space visualization tool using uniform manifold approximation and projection (UMAP). In service of that tool, I deployed an endpoint on AWS for image embedding using a vision language model (VLM) encoder.'],
    skills: ['Python', 'TypeScript', 'SQL', 'Bash', 'Docker', 'PyTorch', 'Hugging Face'],
  },
  {
    season: 'Summer 2025',
    role: 'Machine Learning Engineer Intern',
    company: 'Hadrian Automation',
    companyLogo: hadrianLogo,
    location: 'Torrance, CA',
    duration: 'May 2025 – Aug 2025',
    projects: [
      'I built an image segmentation pipeline using OpenCV to detect title blocks in engineering drawings. I applied this pipeline to efficiently curate a dataset of engineering title block images which I used for downstream tasks.',
      'I used low-rank adaptation (LoRA) and supervised fine-tuning (SFT) to train a vision language model (VLM) for parsing and extracting key information from the dataset of title block crops I curated. I used Hugging Face\'s PEFT framework to create an SFT routine with LoRA and used AWS SageMaker to train the model and deploy it for inference.'
    ],
    skills: ['Python', 'OpenCV', 'PyTorch', 'Hugging Face', 'LoRA', 'AWS'],
  },
]

function InternshipBlock({
  internship,
  isLast,
}: {
  internship: Internship
  isLast: boolean
}) {
  const [activeTab, setActiveTab] = useState<Tab>('projects')

  return (
    <div className="flex gap-6">
      {/* Date */}
      <div className="w-28 text-right text-sm text-gray-400 font-medium pt-2 flex-shrink-0">
        {internship.season}
      </div>

      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-gray-900 ring-4 ring-white mt-1.5 flex-shrink-0" />
        {!isLast && <div className="w-px bg-gray-200 flex-1 mt-1" />}
      </div>

      {/* Card */}
      <div className={`flex-1 ${!isLast ? 'mb-10' : ''}`}>
        <div className="border border-gray-200 rounded-xl p-6">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="text-xl font-bold text-gray-900">{internship.role}</h3>
            {internship.companyLogo && (
              <img src={internship.companyLogo} alt="" className="w-6 h-6 rounded-sm flex-shrink-0" />
            )}
          </div>
          <div className="text-sm font-medium text-gray-500 mb-1">{internship.company}</div>
          <div className="flex gap-3 text-sm text-gray-400 mb-5">
            <span>{internship.location}</span>
            <span>·</span>
            <span>{internship.duration}</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-gray-200 mb-4">
            {(['projects', 'skills'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-sm font-medium capitalize rounded-t-md transition-colors ${
                  activeTab === tab
                    ? 'text-gray-900 border border-b-white border-gray-200 -mb-px bg-white'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <ul className="space-y-2">
            {internship[activeTab].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
      <p className="text-gray-500 leading-relaxed mb-4">
        Here is a quick summary of my internship experience. For more insight, check out my résumé.
      </p>
      <a
        href={`${import.meta.env.BASE_URL}Matt_Kuehr_Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors mb-10"
      >
        View Résumé
      </a>
      <div className="flex flex-col">
        {internships.map((internship, i) => (
          <InternshipBlock
            key={internship.season}
            internship={internship}
            isLast={i === internships.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
