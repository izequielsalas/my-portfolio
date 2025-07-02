import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import proofingAppDashboard from '../assets/projects/proofingApp-dashboard.png'
import proofingAppLogin from '../assets/projects/proofingApp-login.png'
import stickershopHero from '../assets/projects/stickershop-hero.png'
import stickershopCard from '../assets/projects/stickershop-card.png'
import portfolioHero from '../assets/projects/3d-portfolio-hero.png'
import portfolioHover from '../assets/projects/3d-portfolio-hover.png'

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "PrintPro Proofing System",
      subtitle: "React, Node.js, Firebase, Stripe",
      description: "Complete digital proofing workflow for print shops. Built from 12 years of industry experience, this system streamlines client approvals and eliminates revision confusion.",
      image: proofingAppLogin,
      category: "B2B Web Application",
      tech: ["React", "Node.js", "Firebase", "Stripe", "Material-UI", "Express"],
              highlights: ["Beta Testing", "Industry Solution", "Active Development"]
    },
    {
      id: 2,
      title: "StickerShop Landing Page",
      subtitle: "Next.js, Tailwind CSS, Stripe API",
      description: "High-converting e-commerce landing page with product customization and instant quotes. A/B tested design achieved 45% higher conversion rates.",
      image: stickershopCard,
      category: "E-commerce Landing",
      tech: ["Next.js", "Tailwind CSS", "Stripe API", "Framer Motion", "Vercel"],
      highlights: ["45% Higher Conversion", "Mobile Optimized", "A/B Tested"],
      liveUrl: "https://sticker-shop-nine.vercel.app"
    },
    {
      id: 3,
      title: "3D Interactive Portfolio",
      subtitle: "Three.js, React, WebGL",
      description: "Immersive 3D portfolio showcasing projects in virtual environments. Features smooth animations, interactive scenes, and responsive 3D elements.",
      image: portfolioHover,
      category: "3D Web Experience",
      tech: ["Three.js", "React", "WebGL", "GSAP", "Blender", "React Three Fiber"],
      highlights: ["WebGL Performance", "Mobile Compatible", "Interactive Scenes"],
      liveUrl: "https://three-practice-seven.vercel.app"
    }
  ]

  const categories = ["All", "B2B Web Application", "E-commerce Landing", "3D Web Experience"]

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
            Real-world applications built with modern technologies and deep industry knowledge. Each project solves actual business problems.
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
                src={proofingAppDashboard} 
                alt="PrintPro Proofing System"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-300/20">
                    Beta Testing
                  </span>
                  <span className="text-white/60 text-sm">B2B Application</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">PrintPro Proofing System</h3>
                <p className="text-white/80 mb-4 drop-shadow-sm">
                  Revolutionary digital proofing system currently transforming workflow at Cesargraphics. Built from 12 years of print industry experience and showing promising results in beta testing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'Firebase', 'Stripe'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-teal-400/20 text-teal-200 rounded text-xs backdrop-blur-sm border border-teal-300/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="https://proofingapp1.web.app" target="_blank" rel="noopener noreferrer">
                    <Button variant="solid" size="sm">Watch Demo</Button>
                  </a>
                  <Button variant="glass" size="sm">View Screenshots</Button>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="strong" className="group hover:scale-105 transition-all duration-300">
              <img 
                src={portfolioHero} 
                alt="3D Interactive Portfolio"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-200 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-300/20">
                    Technical Showcase
                  </span>
                  <span className="text-white/60 text-sm">3D Web Experience</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">3D Interactive Portfolio</h3>
                <p className="text-white/80 mb-4 drop-shadow-sm">
                  Immersive WebGL portfolio featuring interactive 3D scenes, smooth animations, and responsive design. Demonstrates advanced frontend capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Three.js', 'WebGL', 'React', 'GSAP'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-cyan-400/20 text-cyan-200 rounded text-xs backdrop-blur-sm border border-cyan-300/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="https://three-practice-seven.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Button variant="solid" size="sm">Explore 3D</Button>
                  </a>
                  <Button variant="glass" size="sm">View Code</Button>
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
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.highlights.map(highlight => (
                      <span key={highlight} className="px-2 py-1 bg-emerald-400/20 text-emerald-200 rounded text-xs backdrop-blur-sm border border-emerald-300/20">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-blue-400/20 text-blue-200 rounded text-xs backdrop-blur-sm border border-blue-300/20">
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
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="primary" size="sm" className="w-full">View Demo</Button>
                    </a>
                    <Button variant="outline" size="sm" className="flex-1">Learn More</Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Skills Showcase */}
        <GlassCard variant="colored" className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-sm">Real-World Experience</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🖨️</div>
              <h3 className="font-semibold text-white mb-2">Print Industry</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['12+ Years', 'Workflow Design', 'Client Relations', 'Project Management'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-blue-400/20 text-blue-200 rounded-full text-xs backdrop-blur-sm border border-blue-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['React', 'Next.js', 'Three.js', 'Tailwind'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-green-400/20 text-green-200 rounded-full text-xs backdrop-blur-sm border border-green-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-white mb-2">Full Stack</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Node.js', 'Firebase', 'APIs', 'Databases'].map(skill => (
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
                {['ROI Driven', 'User Experience', 'Problem Solving', 'Scalability'].map(skill => (
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
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">Ready to Build Something Real?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto drop-shadow-sm">
            These projects represent solutions to actual business challenges. Let's discuss how I can solve yours.
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

export default Portfolio```