import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 min-w-0">
        <Outlet />
      </main>
    </div>
  )
}
