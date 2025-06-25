import Button from '../components/Button'
import profilePhoto from '../assets/IsaacClipArt_Coder.png'

function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
        <div className="w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden">
          <img 
            src={profilePhoto} 
            alt="Izequiel - Full Stack Developer" 
            className="w-full h-full object-cover"
          />
        </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm Izequiel
          </h1>
          <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            From Computer Science to Print Business to Web Development
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            I understand both the code and the business reality of what makes websites actually work
          </p>
          <Button variant="primary" size="lg">Download Resume</Button>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-gray-700 mb-4">
              My path to development wasn't traditional. Right when I entered high school in 2012, I started 
              working with my brother at his print business, Cesargraphics. What began as helping out 
              the family business became a 12-year education in how small businesses really operate.
            </p>
            <p className="text-gray-700 mb-4">
              While working full-time at Cesargraphics, I pursued my Computer Science degree at ASU, 
              graduating in December 2023. This unique combination gave me something most developers 
              don't have: years of real-world business experience paired with fresh technical knowledge.
            </p>
            <p className="text-gray-700 mb-4">
              During those 12 years serving Phoenix small businesses, I learned their pain points, 
              budget realities, and what actually drives revenue. I discovered that most businesses 
              don't need the latest JavaScript framework – they need websites that convert visitors 
              into customers and solve real problems.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="text-blue-800 font-medium">
                "When you work with me, you get the best of both worlds: fresh technical skills from 
                my recent Computer Science degree, combined with 12 years of understanding real business needs."
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'SQL', 'Firebase', 'Git/GitHub', 'VS Code', 'Vercel', 'Netlify'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Understanding</h3>
                <div className="flex flex-wrap gap-2">
                  {['Customer Service', 'Client Relations', 'Project Management', 'Budget Management', 'Print Industry', 'Small Business Operations'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">What I Know About Business</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Worry about every marketing dollar spent</li>
                  <li>• Need websites that actually generate leads</li>
                  <li>• Work with tight budgets and tighter deadlines</li>
                  <li>• Explain technical decisions to non-technical stakeholders</li>
                  <li>• Balance "perfect code" with "good enough to ship"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What I Build Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What I Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Websites</h3>
              <p className="text-gray-600 text-sm">Professional sites that convert visitors into customers</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Applications</h3>
              <p className="text-gray-600 text-sm">Custom tools that solve specific business problems</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-600 text-sm">Online stores that actually sell products</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile-First</h3>
              <p className="text-gray-600 text-sm">Everything works perfectly on every device</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business-First</h3>
              <p className="text-gray-600">Your website is a business tool first. Every feature should drive results.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">True Partnership</h3>
              <p className="text-gray-600">I work with clients, not for them. Your success is my success.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Results-Focused</h3>
              <p className="text-gray-600">Fast loading, easy to update, built to convert. Period.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Something That Works?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's talk about your project and how my unique background can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Let's Work Together</Button>
            <Button variant="outline" size="lg">View My Projects</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About