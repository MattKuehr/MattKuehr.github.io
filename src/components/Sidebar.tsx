import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Education', to: '/education' },
  { label: 'Awards', to: '/awards', hidden: true },
  { label: 'Experience', to: '/experience' },
  { label: 'Research', to: '/research' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const links = navItems.filter((item) => !item.hidden)

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-gray-50 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">Matt Kuehr</h1>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          className="p-1.5 text-gray-500 hover:text-gray-900"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-gray-50 border-b border-gray-200">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 min-h-screen flex-shrink-0 bg-gray-50 border-r border-gray-200 flex-col px-4 py-8">
        <div className="mb-10">
          <h1 className="text-lg font-semibold text-gray-900">Matt Kuehr</h1>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
