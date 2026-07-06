import { ExternalLink, FileText } from 'lucide-react'

interface ResearchGroup {
  title: string
  institution: string
  duration: string
  summary: string
  details: string
  researchGateUrl?: string
  slidesUrl?: string
  githubUrl?: string
}

const groups: ResearchGroup[] = [
  {
    title: 'Research Assistant',
    institution: 'Auburn University',
    duration: 'Jan 2024 – Present',
    summary: 'Since January of 2024, I have served as a research assistant in a lab directed by Dr. Mark Carpenter from the Department of Mathematics and Statistics and Dr. Roy Hartfield in the Department of Aerospace Engineering. Our group focuses on applying machine learning to problems in aerospace and physics.',
    details: 'My contributions focused on applying various neural networks architectures to classification and regression problems in the aerospace domain. To that end, I designed and implemented multi-layer perceptrons (MLPs), physics-informed neural networks (PINNs) and transformer-based architectures. I presented my work to our contract partners in Huntsville, AL on multiple occasions, in August of 2024 and February of 2025.\n\nIn the second half of 2025, I focused on research applying neural networks as surrogate models for computing aerodynamic forces and moments. That research culminated in me presenting my work at the SciTech\'s 2026 conference in Orlando, FL. You can read the paper here:',
    researchGateUrl: 'https://www.researchgate.net/publication/400219571_Surrogate_Modeling_of_Flight_Behavior_With_Deep_Neural_Networks',
  },
  {
    title: 'Undergraduate Research Fellow',
    institution: 'Auburn University',
    duration: 'Aug 2025 – Dec 2025',
    summary: 'I was awarded an undergraduate research fellowship for the Fall semester of the 2025 academic year. During that semester, I researched photonic crystals under the mentorship of Dr. Junshan Lin in the Department of Mathematics and Statistics.',
    details: 'My research focused on calculating and detecting the band structure of one dimensional non-Hermitian topological photonic crystals. I implemented a transfer-matrix-based method for calculating the band structure of a photonic crystal. The method used NumPy to calculate the eigenvalues using the Schur decomposition and SciPy to apply Newton\'s method for finding complex roots. Later, I optimized this band calculation algorithm for large jobs using just-in-time compilation and parallel computing with Numba. I designed and implemented an algorithm for unsupervised band detection and assignment which utilized KD-Trees and various heuristics to accurately assign the points calculated with the aforementioned method to the correct photonic band.\n\nI presented my work at Auburn\'s Undergraduate Research Symposium in March of 2026. You can see my slideshow here:',
    slidesUrl: `${import.meta.env.BASE_URL}URS_Presentation_Matt_Kuehr.pdf`,
    githubUrl: 'https://github.com/MattKuehr/PhotonicResearch',
  },
]

export default function Research() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Research</h2>
      <div className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.title} className="border border-gray-200 rounded-xl p-6 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{group.title}</h3>
            <div className="text-sm font-medium text-gray-500 mb-1">{group.institution}</div>
            <div className="text-sm text-gray-400 mb-4">{group.duration}</div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{group.summary}</p>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{group.details}</p>
            {(group.researchGateUrl !== undefined || group.slidesUrl !== undefined || group.githubUrl !== undefined) && (
              <div className="flex flex-wrap gap-3 mt-4">
                {group.researchGateUrl !== undefined && (
                  <a
                    href={group.researchGateUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors w-fit"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
                    </svg>
                    Read on ResearchGate
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {group.slidesUrl !== undefined && (
                  <a
                    href={group.slidesUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors w-fit"
                  >
                    <FileText className="w-4 h-4" />
                    View Slideshow
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {group.githubUrl !== undefined && (
                  <a
                    href={group.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors w-fit"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
