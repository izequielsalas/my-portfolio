import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center p-8 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to My Dev Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          CS grad with 12+ years in the family print business, now building web applications 
          that solve real problems for real businesses.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link to="/about" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">👨‍💻</div>
              <h3 className="font-semibold text-gray-900 mb-2">About Me</h3>
              <p className="text-gray-600 text-sm">My story and skills</p>
            </div>
          </Link>
          
          <Link to="/projects" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
              <p className="text-gray-600 text-sm">Real solutions built</p>
            </div>
          </Link>
          
          <Link to="/portfolio" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-semibold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600 text-sm">Component showcase</p>
            </div>
          </Link>
          
          <Link to="/components" className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Components</h3>
              <p className="text-gray-600 text-sm">UI library tests</p>
            </div>
          </Link>
        </div>
        
        <div className="space-x-4">
          <Link to="/projects">
            <Button variant="primary" size="lg">View My Work</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg">Learn About Me</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home