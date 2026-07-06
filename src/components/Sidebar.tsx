import { NavLink } from 'react-router-dom'

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
  return (
    <aside className="w-56 min-h-screen bg-gray-50 border-r border-gray-200 flex flex-col px-4 py-8">
      <div className="mb-10">
        <h1 className="text-lg font-semibold text-gray-900">Matt Kuehr</h1>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.filter((item) => !item.hidden).map(({ label, to }) => (
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
  )
}
