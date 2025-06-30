import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlassHeader from './components/GlassHeader'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ComponentTest from './pages/ComponentTest'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <GlassHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components" element={<ComponentTest />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App