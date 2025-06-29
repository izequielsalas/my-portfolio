import GlassCard from '../components/GlassCard'
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
      category: "E-commerce",
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
      category: "SaaS Platform",
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
      category: "Web App",
      features: ["Location Detection", "7-Day Forecast", "Weather Alerts", "Offline Support"]
    },
    {
      id: 4,
      title: "Business Landing Page",
      subtitle: "Next.js, TypeScript",
      description: "High-converting landing page for Phoenix consulting firm. Features A/B testing capabilities and conversion optimization that increased leads by 300%.",
      image: "https://picsum.photos/600/300?random=4",
      liveUrl: "#",
      codeUrl: "#",
      status: "Completed",
      category: "Landing Page",
      features: ["A/B Testing", "Conversion Optimization", "SEO Optimized", "Analytics Integration"]
    },
    {
      id: 5,
      title: "Restaurant Ordering System",
      subtitle: "React, Node.js, Stripe",
      description: "Complete online ordering platform for local restaurant chain. Handles orders, payments, delivery tracking, and customer management.",
      image: "https://picsum.photos/600/300?random=5",
      liveUrl: "#",
      codeUrl: "#",
      status: "Completed",
      category: "E-commerce",
      features: ["Online Ordering", "Payment Processing", "Delivery Tracking", "Customer Portal"]
    },
    {
      id: 6,
      title: "Non-Profit Website",
      subtitle: "WordPress, Custom Theme",
      description: "Complete website redesign for Phoenix animal rescue. Includes donation system, volunteer portal, and pet adoption showcase.",
      image: "https://picsum.photos/600/300?random=6",
      liveUrl: "#",
      codeUrl: "#",
      status: "Completed",
      category: "Business Website",
      features: ["Donation System", "Volunteer Portal", "Pet Showcase", "Mobile Optimized"]
    }
  ]

  const categories = ["All", "E-commerce", "SaaS Platform", "Web App", "Landing Page", "Business Website"]

  return (
    <div className="min-h-screen relative">
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10">
        {/* Floating gradient orbs */}
        <div className="fixed top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="fixed top-0 right-0 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="fixed bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Floating glass elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="fixed top-1/4 left-10 w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-float"></div>
        <div className="fixed top-1/3 right-20 w-20 h-20 bg-blue-300/10 backdrop-blur-sm rounded-full border border-blue-300/20 animate-float animation-delay-1000"></div>
        <div className="fixed bottom-1/3 left-20 w-24 h-24 bg-purple-300/10 backdrop-blur-sm rounded-full border border-purple-300/20 animate-float animation-delay-2000"></div>
        <div className="fixed bottom-1/4 right-10 w-12 h-12 bg-cyan-300/10 backdrop-blur-sm rounded-full border border-cyan-300/20 animate-float animation-delay-3000"></div>
      </div>

      <div className="relative z-0 max-w-6xl mx-auto px-4 py-24">
        {/* Header section */}
        <GlassCard variant="strong" className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            My Projects
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-sm">
            Real solutions for real businesses. Each project represents a problem solved and a lesson learned.
          </p>
        </GlassCard>

        {/* Filter Buttons */}
        <GlassCard variant="default" className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant="glass"
                size="sm"
                className="hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </GlassCard>

        {/* Featured Project */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">Featured Project</h2>
          <GlassCard variant="strong" className="overflow-hidden">
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
                  <span className="px-3 py-1 bg-green-400/20 text-green-200 rounded-full text-sm font-medium backdrop-blur-sm border border-green-300/20">
                    Live
                  </span>
                  <span className="text-white/50">•</span>
                  <span className="text-white/70">React, Firebase, Stripe</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">Small Business Website Builder</h3>
                <p className="text-white/80 mb-6 drop-shadow-sm">
                  A drag-and-drop website builder specifically designed for small businesses. Includes templates, 
                  hosting, domain management, and integrated booking/payment systems. Currently serving 15+ local businesses with 
                  an average 40% increase in online leads.
                </p>
                <ul className="text-white/80 mb-6 space-y-2">
                  <li>• 50+ customizable templates</li>
                  <li>• Integrated payment processing</li>
                  <li>• SEO optimization tools</li>
                  <li>• 40% average increase in leads</li>
                </ul>
                <div className="flex gap-4">
                  <Button variant="solid">
                    View Live Site
                  </Button>
                  <Button variant="glass">
                    Case Study
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <GlassCard key={project.id} variant="default" className="h-full flex flex-col group hover:scale-105 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      project.status === 'Completed' 
                        ? 'bg-green-400/20 text-green-200 border-green-300/20' 
                        : 'bg-yellow-400/20 text-yellow-200 border-yellow-300/20'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs backdrop-blur-sm border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-sm">{project.title}</h3>
                  <p className="text-white/80 mb-4 flex-1 drop-shadow-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-white mb-2 drop-shadow-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map(feature => (
                        <span key={feature} className="px-2 py-1 bg-blue-400/20 text-blue-200 rounded text-xs backdrop-blur-sm border border-blue-300/20">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs backdrop-blur-sm border border-white/20">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="flex-1"
                    >
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Technologies I Love Section */}
        <GlassCard variant="colored" className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-sm">Technologies I Love</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-blue-400/20 text-blue-200 rounded-full text-xs backdrop-blur-sm border border-blue-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-white mb-2">Backend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Node.js', 'Python', 'Express', 'Firebase'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-green-400/20 text-green-200 rounded-full text-xs backdrop-blur-sm border border-green-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-semibold text-white mb-2">Cloud & Deploy</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Vercel', 'Netlify', 'Firebase', 'AWS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-purple-400/20 text-purple-200 rounded-full text-xs backdrop-blur-sm border border-purple-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-white mb-2">Business Focus</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['12+ Years', 'Client Relations', 'ROI Focused', 'Lead Generation'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-pink-400/20 text-pink-200 rounded-full text-xs backdrop-blur-sm border border-pink-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* CTA Section */}
        <GlassCard variant="strong" className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">Have a Project in Mind?</h2>
          <p className="text-xl text-white/80 mb-6 drop-shadow-sm">
            Let's build something amazing together. I'm currently available for new projects and ready to help your business grow.
          </p>
          <Button variant="solid" size="lg">
            Start a Conversation
          </Button>
        </GlassCard>
      </div>

      <style jsx>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
      `}</style>
    </div>
  )
}

export default Projects