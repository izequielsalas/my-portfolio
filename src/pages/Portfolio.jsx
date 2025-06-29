import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "React, Stripe, Firebase",
      description: "Full-stack e-commerce application with payment processing and inventory management. Modern glassmorphic design with smooth animations.",
      image: "https://picsum.photos/400/200?random=1",
      category: "Web Application",
      tech: ["React", "Stripe", "Firebase", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Task Manager Pro",
      subtitle: "React, Node.js, MongoDB",
      description: "Collaborative task management tool with real-time updates and team features. Built with modern glassmorphism design principles.",
      image: "https://picsum.photos/400/200?random=2",
      category: "SaaS Platform",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      subtitle: "Vanilla JS, API Integration",
      description: "Clean weather application with location detection and 7-day forecasts. Features beautiful glassmorphic cards and smooth animations.",
      image: "https://picsum.photos/400/200?random=3",
      category: "Web App",
      tech: ["JavaScript", "Weather API", "CSS3", "HTML5"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "React, Tailwind CSS",
      description: "Modern portfolio website showcasing glassmorphism design trends. Fully responsive with smooth animations and interactive elements.",
      image: "https://picsum.photos/400/200?random=4",
      category: "Portfolio",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Netlify"]
    },
    {
      id: 5,
      title: "Business Landing Page",
      subtitle: "Next.js, TypeScript",
      description: "High-converting landing page for SaaS business. Features modern design, A/B testing capabilities, and conversion optimization.",
      image: "https://picsum.photos/400/200?random=5",
      category: "Landing Page",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      id: 6,
      title: "Component Library",
      subtitle: "React, Storybook",
      description: "Comprehensive glassmorphic component library with documentation. Reusable components following modern design principles.",
      image: "https://picsum.photos/400/200?random=6",
      category: "Design System",
      tech: ["React", "Storybook", "TypeScript", "CSS Modules"]
    }
  ]

  const categories = ["All", "Web Application", "SaaS Platform", "Web App", "Portfolio", "Landing Page", "Design System"]

  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 -z-10">
        {/* Floating gradient orbs */}
        <div className="fixed top-10 left-10 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="fixed top-1/4 right-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="fixed bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Floating glass elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="fixed top-20 left-20 w-16 h-16 bg-emerald-300/10 backdrop-blur-sm rounded-full border border-emerald-300/20 animate-float"></div>
        <div className="fixed top-1/3 right-32 w-20 h-20 bg-teal-300/10 backdrop-blur-sm rounded-full border border-teal-300/20 animate-float animation-delay-1000"></div>
        <div className="fixed bottom-1/3 left-32 w-24 h-24 bg-cyan-300/10 backdrop-blur-sm rounded-full border border-cyan-300/20 animate-float animation-delay-2000"></div>
        <div className="fixed bottom-20 right-20 w-12 h-12 bg-blue-300/10 backdrop-blur-sm rounded-full border border-blue-300/20 animate-float animation-delay-3000"></div>
      </div>

      <div className="relative z-0 max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <GlassCard variant="strong" className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            My Portfolio
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-sm">
            A showcase of modern web applications built with cutting-edge technologies and glassmorphic design principles.
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

        {/* Featured Work */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard variant="strong" className="group hover:scale-105 transition-all duration-300">
              <img 
                src="https://picsum.photos/600/300?random=featured1" 
                alt="Featured work"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-emerald-400/20 text-emerald-200 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-300/20">
                    Featured
                  </span>
                  <span className="text-white/60 text-sm">Full-Stack Application</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">SaaS Dashboard Platform</h3>
                <p className="text-white/80 mb-4 drop-shadow-sm">
                  Comprehensive business intelligence dashboard with real-time analytics, user management, and subscription billing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'PostgreSQL', 'Stripe'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-teal-400/20 text-teal-200 rounded text-xs backdrop-blur-sm border border-teal-300/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="solid" size="sm">Live Demo</Button>
                  <Button variant="glass" size="sm">View Code</Button>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="strong" className="group hover:scale-105 transition-all duration-300">
              <img 
                src="https://picsum.photos/600/300?random=featured2" 
                alt="Featured work"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-200 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-300/20">
                    Award Winner
                  </span>
                  <span className="text-white/60 text-sm">E-commerce Platform</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">Boutique Online Store</h3>
                <p className="text-white/80 mb-4 drop-shadow-sm">
                  Award-winning e-commerce platform with inventory management, order tracking, and integrated payment solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'Shopify API', 'Tailwind', 'Vercel'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-cyan-400/20 text-cyan-200 rounded text-xs backdrop-blur-sm border border-cyan-300/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="solid" size="sm">Live Demo</Button>
                  <Button variant="glass" size="sm">Case Study</Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map(item => (
              <GlassCard key={item.id} variant="default" className="group hover:scale-105 transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs backdrop-blur-sm border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-3 drop-shadow-sm">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-emerald-400/20 text-emerald-200 rounded text-xs backdrop-blur-sm border border-emerald-300/20">
                        {tech}
                      </span>
                    ))}
                    {item.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs backdrop-blur-sm border border-white/20">
                        +{item.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm" className="flex-1">Demo</Button>
                    <Button variant="outline" size="sm" className="flex-1">Code</Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Skills Showcase */}
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
                {['Node.js', 'Python', 'Express', 'PostgreSQL'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-green-400/20 text-green-200 rounded-full text-xs backdrop-blur-sm border border-green-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-semibold text-white mb-2">Cloud</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Vercel', 'Netlify', 'Firebase', 'AWS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-purple-400/20 text-purple-200 rounded-full text-xs backdrop-blur-sm border border-purple-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold text-white mb-2">Design</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Figma', 'Glassmorphism', 'UX/UI', 'Responsive'].map(skill => (
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
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">Let's Create Something Amazing</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto drop-shadow-sm">
            Ready to bring your ideas to life with modern technology and stunning design? Let's work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="solid" size="lg">Start a Project</Button>
            <Button variant="glass" size="lg">View My Process</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

export default Portfolio