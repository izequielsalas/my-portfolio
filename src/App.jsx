import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import ComponentTest from './pages/ComponentTest'

function App() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Components', href: '/components' }
  ]

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header logo="Izequiel" links={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/components" element={<ComponentTest />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App