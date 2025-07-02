import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

// Import real project images
import proofingAppDashboard from '../assets/projects/proofingApp-dashboard.png'
import proofingAppLogin from '../assets/projects/proofingApp-login.png'
import proofingAppProofReview from '../assets/projects/proofingApp-proofReview.png'
import stickershopHero from '../assets/projects/stickershop-hero.png'
import stickershopCard from '../assets/projects/stickershop-card.png'
import stickershopMobileCheckout from '../assets/projects/stickershop-mobile-checkout.png'
import portfolioHero from '../assets/projects/3d-portfolio-hero.png'
import portfolioHover from '../assets/projects/3d-portfolio-hover.png'
import portfolioMobile from '../assets/projects/3d-portfolio-mobile.png'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "PrintPro Proofing System",
      subtitle: "React, Node.js, Firebase, Stripe",
      description: "Digital proofing system in development for Cesargraphics print shop. Born from 12 years of industry frustration with manual approval processes. Currently in beta testing phase, designed to eliminate email confusion, track revisions, and integrate billing workflows.",
      image: proofingAppDashboard,
      liveUrl: "https://proofingapp1.web.app",
      codeUrl: "https://github.com/yourusername/printpro-proofing", // Update with your actual repo
      status: "In Development",
      category: "B2B Web Application",
      features: [
        "Digital Proof Delivery",
        "User Role Management", 
        "Revision Tracking System",
        "Payment Integration Ready",
        "Client Portal Interface",
        "Real-time Notifications",
        "Multi-client Support",
        "Industry-focused Workflow"
      ],
      techStack: ["React", "Node.js", "Firebase", "Stripe", "Material-UI", "Express", "Firestore"],
      highlights: ["Real Business Problem", "Industry Experience", "Beta Testing"],
      gallery: [proofingAppDashboard, proofingAppLogin, proofingAppProofReview]
    },
    {
      id: 2,
      title: "StickerShop Landing Page", 
      subtitle: "Next.js, Tailwind CSS, Stripe API",
      description: "Demo e-commerce landing page showcasing modern conversion-focused design. Features product customization interface, dynamic pricing calculator, and streamlined checkout flow. Built to demonstrate e-commerce development skills and user experience optimization.",
      image: stickershopHero,
      liveUrl: "https://sticker-shop-nine.vercel.app",
      codeUrl: "https://github.com/yourusername/stickershop", // Update with your actual repo
      status: "Demo Project",
      category: "E-commerce Demo",
      features: [
        "Product Customization Tool",
        "Dynamic Pricing Calculator", 
        "Stripe Payment Integration",
        "Mobile-Responsive Design",
        "Performance Optimized",
        "Modern UI/UX Design",
        "Conversion-Focused Layout",
        "Interactive Elements"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Stripe API", "Framer Motion", "Vercel", "React"],
      highlights: ["E-commerce Skills", "UX/UI Design", "Payment Integration"],
      gallery: [stickershopHero, stickershopCard, stickershopMobileCheckout]
    },
    {
      id: 3,
      title: "3D Interactive Portfolio",
      subtitle: "Three.js, React, WebGL",
      description: "Experimental 3D portfolio website demonstrating advanced WebGL capabilities. Features interactive virtual environments, smooth animations, and touch-optimized controls. A technical showcase exploring the boundaries of web-based 3D experiences.",
      image: portfolioHero,
      liveUrl: "https://three-practice-seven.vercel.app",
      codeUrl: "https://github.com/yourusername/3d-portfolio", // Update with your actual repo
      status: "Technical Demo", 
      category: "3D Web Experience",
      features: [
        "WebGL 3D Rendering",
        "Interactive Scene Navigation", 
        "GSAP Animation System",
        "Mobile Touch Controls",
        "Performance Optimization",
        "Cross-browser Testing",
        "Responsive 3D Design",
        "Creative Experimentation"
      ],
      techStack: ["Three.js", "React", "WebGL", "GSAP", "Blender", "React Three Fiber", "Vercel"],
      highlights: ["WebGL Skills", "3D Development", "Creative Coding"],
      gallery: [portfolioHover, portfolioHero, portfolioMobile]
    }
  ]

  const categories = ["All", "B2B Web Application", "E-commerce Demo", "3D Web Experience"]

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
            From real business solutions to creative experiments. Each project represents learning, growth, and 12+ years of industry experience applied to modern web development.
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

        {/* Featured Project - PrintPro */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">Featured Project</h2>
          <GlassCard variant="strong" className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={proofingAppDashboard} 
                  alt="PrintPro Proofing System Dashboard"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-300/20">
                    In Development
                  </span>
                  <span className="text-white/50">•</span>
                  <span className="text-white/70">React, Node.js, Firebase</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">PrintPro Proofing System</h3>
                <p className="text-white/80 mb-6 drop-shadow-sm">
                  Born from 12 years of frustration with manual proofing processes at Cesargraphics. This system is designed to eliminate 
                  back-and-forth emails, track all revisions, and integrate billing. Currently in beta development, 
                  representing a real solution to genuine industry problems I've experienced firsthand.
                </p>
                <ul className="text-white/80 mb-6 space-y-2">
                  <li>• Digital proof delivery & approval workflow</li>
                  <li>• Multi-user role management system</li>
                  <li>• Integrated payment processing framework</li>
                  <li>• Real-time notification system</li>
                  <li>• Industry-specific workflow design</li>
                  <li>• Built from real business needs</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://proofingapp1.web.app" target="_blank" rel="noopener noreferrer">
                    <Button variant="solid">
                      View Beta Demo
                    </Button>
                  </a>
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
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Project gallery preview on hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      {project.gallery.slice(0, 3).map((img, idx) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${project.title} preview ${idx + 1}`}
                          className="w-16 h-12 object-cover rounded border border-white/30"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      project.status === 'In Development' 
                        ? 'bg-blue-400/20 text-blue-200 border-blue-300/20' 
                        : project.status === 'Demo Project'
                        ? 'bg-green-400/20 text-green-200 border-green-300/20'
                        : 'bg-purple-400/20 text-purple-200 border-purple-300/20'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs backdrop-blur-sm border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-sm">{project.title}</h3>
                  <p className="text-white/80 mb-4 flex-1 drop-shadow-sm line-clamp-3">{project.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.highlights.map(highlight => (
                        <span key={highlight} className="px-2 py-1 bg-emerald-400/20 text-emerald-200 rounded text-xs backdrop-blur-sm border border-emerald-300/20">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-medium text-white mb-2 drop-shadow-sm text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map(feature => (
                        <span key={feature} className="px-2 py-1 bg-blue-400/20 text-blue-200 rounded text-xs backdrop-blur-sm border border-blue-300/20">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs backdrop-blur-sm border border-white/20">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-full"
                      >
                        {project.status === 'In Development' ? 'View Beta' : 'Live Demo'}
                      </Button>
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Project Philosophy Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">Development Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Real Problems */}
            <GlassCard variant="colored" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🎯</div>
                <h3 className="text-xl font-bold text-white">Solving Real Problems</h3>
              </div>
              <p className="text-white/80 mb-4">
                My best projects come from experiencing real frustrations in my 12+ years in the print industry. 
                PrintPro isn't just a coding exercise - it's solving problems I've lived with daily.
              </p>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Industry experience drives better solutions</li>
                <li>• Understanding user pain points deeply</li>
                <li>• Building with business impact in mind</li>
                <li>• Iterating based on real feedback</li>
              </ul>
            </GlassCard>

            {/* Technical Growth */}
            <GlassCard variant="colored" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🚀</div>
                <h3 className="text-xl font-bold text-white">Continuous Learning</h3>
              </div>
              <p className="text-white/80 mb-4">
                Each project pushes my technical boundaries. From mastering Firebase real-time features 
                to exploring WebGL performance optimization - always growing.
              </p>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Modern JavaScript frameworks & libraries</li>
                <li>• Full-stack development capabilities</li>
                <li>• Performance optimization techniques</li>
                <li>• User experience design principles</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Technologies Section */}
        <GlassCard variant="colored" className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-sm">Technologies I Work With</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['React', 'Next.js', 'Three.js', 'Tailwind'].map(skill => (
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
                {['Node.js', 'Firebase', 'Express', 'Firestore'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-green-400/20 text-green-200 rounded-full text-xs backdrop-blur-sm border border-green-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-semibold text-white mb-2">Integration</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Stripe', 'WebGL', 'APIs', 'PWA'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-purple-400/20 text-purple-200 rounded-full text-xs backdrop-blur-sm border border-purple-300/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-white mb-2">Industry</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {['Print Workflow', 'E-commerce', 'B2B Systems', 'UX Design'].map(skill => (
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
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">Let's Build Something Together</h2>
          <p className="text-xl text-white/80 mb-6 drop-shadow-sm">
            Whether you need a real business solution or want to explore creative possibilities, 
            I bring both technical skills and industry understanding to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="solid" size="lg">
                Discuss Your Project
              </Button>
            </Link>
            <Link to="/contact#connect">
              <Button variant="glass" size="lg">
                View My Process
              </Button>
            </Link>
          </div>
        </GlassCard>
      </div>

      <style jsx>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Projects