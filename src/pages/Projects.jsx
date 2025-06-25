import Card from '../components/Card'
import Button from '../components/Button'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "React, Stripe, Firebase",
      description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard. Built for a local boutique to expand online.",
      image: "https://picsum.photos/600/300?random=1",
      liveUrl: "#",
      codeUrl: "#",
      status: "In Progress",
      features: ["Payment Processing", "Inventory Management", "Admin Dashboard", "Mobile Responsive"]
    },
    {
      id: 2,
      title: "Task Management Tool", 
      subtitle: "React, Node.js, MongoDB",
      description: "Collaborative project management tool with real-time updates, team messaging, and deadline tracking. Designed for small creative agencies.",
      image: "https://picsum.photos/600/300?random=2",
      liveUrl: "#",
      codeUrl: "#", 
      status: "Completed",
      features: ["Real-time Updates", "Team Collaboration", "Deadline Tracking", "File Sharing"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      subtitle: "Vanilla JS, Weather API",
      description: "Clean weather application with location detection, 7-day forecasts, and weather alerts. Focus on performance and accessibility.",
      image: "https://picsum.photos/600/300?random=3",
      liveUrl: "#",
      codeUrl: "#",
      status: "Completed", 
      features: ["Location Detection", "7-Day Forecast", "Weather Alerts", "Offline Support"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real solutions for real businesses. Each project represents a problem solved and a lesson learned.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Project</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://picsum.photos/800/400?random=featured" 
                  alt="Featured project"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Live
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">React, Firebase, Stripe</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Small Business Website Builder</h3>
                <p className="text-gray-700 mb-6">
                  A drag-and-drop website builder specifically designed for small businesses. Includes templates, 
                  hosting, domain management, and integrated booking/payment systems. Currently serving 15+ local businesses.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• 50+ customizable templates</li>
                  <li>• Integrated payment processing</li>
                  <li>• SEO optimization tools</li>
                  <li>• Mobile-first design</li>
                </ul>
                <div className="flex gap-4">
                  <Button variant="primary">View Live Site</Button>
                  <Button variant="outline">View Code</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card key={project.id} className="h-full flex flex-col">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-sm">{project.subtitle}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map(feature => (
                        <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button variant="primary" size="sm" className="flex-1">Demo</Button>
                    <Button variant="outline" size="sm" className="flex-1">Code</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Let's build something amazing together. I'm currently available for new projects.
          </p>
          <Button variant="primary" size="lg">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}

export default Projects