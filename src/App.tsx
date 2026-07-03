import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Education from './pages/Education'
import Awards from './pages/Awards'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Research from './pages/Research'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="awards" element={<Awards />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="research" element={<Research />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
