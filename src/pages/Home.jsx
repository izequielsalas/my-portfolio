import { Link } from 'react-router-dom'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 -z-10">
        {/* Animated gradient orbs */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="fixed bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Glassmorphic floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="fixed top-20 left-10 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-float"></div>
        <div className="fixed top-40 right-20 w-16 h-16 bg-blue-300/10 backdrop-blur-sm rounded-full border border-blue-300/20 animate-float animation-delay-1000"></div>
        <div className="fixed bottom-40 left-20 w-24 h-24 bg-purple-300/10 backdrop-blur-sm rounded-full border border-purple-300/20 animate-float animation-delay-2000"></div>
        <div className="fixed bottom-20 right-10 w-12 h-12 bg-pink-300/10 backdrop-blur-sm rounded-full border border-pink-300/20 animate-float animation-delay-3000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-0 flex items-center justify-center py-8 min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero section */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Building Digital
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              CS Grad With 12+ Years In The Print Business, Now Crafting Web Applications 
              That Solve Real Problems For Real Companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/projects">
                <Button 
                  variant="solid" 
                  size="lg"
                >
                  View My Work
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="glass" 
                  size="lg"
                >
                  Learn About Me
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Feature cards - UPDATED: Portfolio removed, grid changed to 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link to="/about" className="block group">
              <GlassCard variant="subtle" className="h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍💻</div>
                  <h3 className="font-semibold text-white mb-2">About Me</h3>
                  <p className="text-white/70 text-sm">My journey & expertise</p>
                </div>
              </GlassCard>
            </Link>
            
            <Link to="/projects" className="block group">
              <GlassCard variant="subtle" className="h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-semibold text-white mb-2">Projects</h3>
                  <p className="text-white/70 text-sm">Real solutions built</p>
                </div>
              </GlassCard>
            </Link>
            
            <Link to="/contact" className="block group">
              <GlassCard variant="subtle" className="h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="font-semibold text-white mb-2">Contact</h3>
                  <p className="text-white/70 text-sm">Let's work together</p>
                </div>
              </GlassCard>
            </Link>
          </div>

          {/* Skills showcase */}
          <GlassCard variant="default" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-white mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['React', 'JavaScript', 'Tailwind CSS', 'Three.js'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm backdrop-blur-sm border border-blue-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Node.js', 'Python', 'SQL', 'Firebase'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-400/20 text-green-200 rounded-full text-sm backdrop-blur-sm border border-green-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Business</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Small Business', 'Client Relations', 'Project Management', 'Sales', 'Automation'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-400/20 text-purple-200 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

export default Home