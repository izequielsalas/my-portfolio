import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

function GlassHeader({ logo = "Izequiel Salas", links = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  const defaultLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]
  
  const navLinks = links.length > 0 ? links : defaultLinks
  
  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphic header with backdrop blur */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl font-bold text-white drop-shadow-lg">
                  {logo}
                </h1>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    transition-all duration-300 drop-shadow-sm
                    ${location.pathname === link.href
                      ? 'text-white font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded-full'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:block">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="bg-white/20 border border-white/30 text-white backdrop-blur-sm hover:bg-white/30 shadow-lg"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white/80 hover:text-white focus:outline-none p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-b-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`
                      block px-3 py-2 transition-all duration-300 rounded-lg
                      ${location.pathname === link.href
                        ? 'text-white font-medium bg-white/20 backdrop-blur-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Link to="/contact">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full bg-white/20 border border-white/30 text-white backdrop-blur-sm hover:bg-white/30"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default GlassHeader