import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import profilePhoto from '../assets/IsaacClipArt_Coder.png'

function About() {
  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 -z-10">
        {/* Animated gradient orbs */}
        <div className="fixed top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
        <div className="fixed bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-1000"></div>
        <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-0 max-w-4xl mx-auto px-4 py-24">
        {/* Hero Section */}
        <GlassCard variant="strong" className="text-center mb-16">
          <div className="w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden ring-4 ring-white/30">
            <img 
              src={profilePhoto} 
              alt="Izequiel - Full Stack Developer" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Hi, I'm Izequiel
          </h1>
          <p className="text-xl text-white/90 mb-2 max-w-2xl mx-auto drop-shadow-sm">
            From Computer Science to Print Business to Web Development
          </p>
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto drop-shadow-sm">
            I understand both the code and the business reality of what makes websites actually work
          </p>
        </GlassCard>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <GlassCard variant="default">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-sm">My Journey</h2>
            <div className="space-y-4 text-white/90">
              <p>
                My path to development wasn't traditional. Right when I entered high school in 2012, I started 
                working with my brother at his print business, Cesargraphics. What began as helping out 
                the family business became a 12-year education in how small businesses really operate.
              </p>
              <p>
                While working full-time at Cesargraphics, I pursued my Computer Science degree at ASU, 
                graduating in December 2023. This unique combination gave me something most developers 
                don't have: years of real-world business experience paired with fresh technical knowledge.
              </p>
              <p>
                During those 12 years serving Phoenix small businesses, I learned their pain points, 
                budget realities, and what actually drives revenue. I discovered that most businesses 
                don't need the latest JavaScript framework – they need websites that convert visitors 
                into customers and solve real problems.
              </p>
            </div>
            <GlassCard variant="colored" className="mt-6">
              <p className="text-white font-medium text-center drop-shadow-sm">
                "When you work with me, you get the best of both worlds: fresh technical skills from 
                my recent Computer Science degree, combined with 12 years of understanding real business needs."
              </p>
            </GlassCard>
          </GlassCard>
          
          <GlassCard variant="default">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-sm">Skills & Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-3 drop-shadow-sm">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm backdrop-blur-sm border border-blue-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-3 drop-shadow-sm">Backend & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'SQL', 'Firebase', 'Git/GitHub', 'VS Code', 'Vercel', 'Netlify'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-400/20 text-green-200 rounded-full text-sm backdrop-blur-sm border border-green-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-3 drop-shadow-sm">Business Understanding</h3>
                <div className="flex flex-wrap gap-2">
                  {['Customer Service', 'Client Relations', 'Project Management', 'Budget Management', 'Print Industry', 'Small Business Operations'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-400/20 text-purple-200 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <GlassCard variant="subtle" className="mt-6">
                <h4 className="font-medium text-white mb-2 drop-shadow-sm">What I Know About Business</h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• Worry about every marketing dollar spent</li>
                  <li>• Need websites that actually generate leads</li>
                  <li>• Work with tight budgets and tighter deadlines</li>
                  <li>• Explain technical decisions to non-technical stakeholders</li>
                  <li>• Balance "perfect code" with "good enough to ship"</li>
                </ul>
              </GlassCard>
            </div>
          </GlassCard>
        </div>

        {/* What I Build Section */}
        <GlassCard variant="default" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-sm">What I Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard variant="subtle" className="text-center">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="font-semibold text-white mb-2">Business Websites</h3>
              <p className="text-white/70 text-sm">Professional sites that convert visitors into customers</p>
            </GlassCard>
            <GlassCard variant="subtle" className="text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-white mb-2">Web Applications</h3>
              <p className="text-white/70 text-sm">Custom tools that solve specific business problems</p>
            </GlassCard>
            <GlassCard variant="subtle" className="text-center">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="font-semibold text-white mb-2">E-commerce</h3>
              <p className="text-white/70 text-sm">Online stores that actually sell products</p>
            </GlassCard>
            <GlassCard variant="subtle" className="text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-white mb-2">Mobile-First</h3>
              <p className="text-white/70 text-sm">Everything works perfectly on every device</p>
            </GlassCard>
          </div>
        </GlassCard>

        {/* Values Section */}
        <GlassCard variant="colored" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-sm">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-white mb-2">Business-First</h3>
              <p className="text-white/80">Your website is a business tool first. Every feature should drive results.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-semibold text-white mb-2">True Partnership</h3>
              <p className="text-white/80">I work with clients, not for them. Your success is my success.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-white mb-2">Results-Focused</h3>
              <p className="text-white/80">Fast loading, easy to update, built to convert. Period.</p>
            </div>
          </div>
        </GlassCard>

        {/* CTA Section */}
        <GlassCard variant="strong" className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">Ready to Build Something That Works?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto drop-shadow-sm">
            Let's talk about your project and how my unique background can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="solid" size="lg">Let's Work Together</Button>
            <Button variant="glass" size="lg">View My Projects</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

export default About