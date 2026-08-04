import { ExternalLink } from 'lucide-react'
import awardImg from '../assets/matt-award.webp'

export default function Awards() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Awards & Accomplishments</h2>
      <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">2026 Deans Medalist - Department of Mathematics and Statistics</h3>
        <img
          src={awardImg}
          alt="Matt Kuehr award"
          className="w-full max-w-md rounded-lg object-contain mb-4"
        />
        <a
          href="https://wire.auburn.edu/content/cosam/2026/05/cosam-honors-convocation-celebrates-students-faculty-and-a-beloved-legacy.php?property=cosam&utm_source=&utm_medium=web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full max-w-md px-3 py-1.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Read Auburn's Award Ceremony Article
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <p className="w-full max-w-md text-sm text-gray-600 leading-relaxed whitespace-pre-wrap mt-4">
          In 2026, I was awarded the Dean's Medal by Auburn's Department of Mathematics and Statistics for the 2026 graduating cohort. The Dean's Medal is meant to highlight the accomplishments
          and superior academic achievement of graduting seniors in a particular discipline. 
        </p>
      </div>
    </div>
  )
}
