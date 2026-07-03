import { Mail } from 'lucide-react'

const EMAIL = 'mck0063@auburn.edu'

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Mail className="w-20 h-20 text-gray-300 mb-6" strokeWidth={1.25} />
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
      <p className="text-gray-500 mb-8">
        Have a question or want to connect? Feel free to reach out.
      </p>
      <div className="flex items-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Contact Me
        </a>
        <span className="text-gray-500 font-medium">at</span>
        <span className="text-lg font-semibold text-gray-800">{EMAIL}</span>
      </div>
    </div>
  )
}
