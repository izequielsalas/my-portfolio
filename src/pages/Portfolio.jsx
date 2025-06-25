import Button from '../components/Button'
import Card from '../components/Card'

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Component Library
          </h1>
          <p className="text-xl text-gray-600">
            React components built with Tailwind CSS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="E-commerce Site" 
            subtitle="React, Stripe, Firebase"
            image="https://picsum.photos/400/200?random=1"
          >
            <p className="mb-4">Full-stack e-commerce application with payment processing and inventory management.</p>
            <div className="flex gap-2">
              <Button variant="primary" size="sm">Live Demo</Button>
              <Button variant="outline" size="sm">Code</Button>
            </div>
          </Card>
          
          <Card 
            title="Task Manager" 
            subtitle="React, Node.js, MongoDB"
            image="https://picsum.photos/400/200?random=2"
          >
            <p className="mb-4">Collaborative task management tool with real-time updates and team features.</p>
            <div className="flex gap-2">
              <Button variant="primary" size="sm">Live Demo</Button>
              <Button variant="outline" size="sm">Code</Button>
            </div>
          </Card>
          
          <Card 
            title="Weather App" 
            subtitle="Vanilla JS, API Integration"
            image="https://picsum.photos/400/200?random=3"
          >
            <p className="mb-4">Clean weather application with location detection and 7-day forecasts.</p>
            <div className="flex gap-2">
              <Button variant="primary" size="sm">Live Demo</Button>
              <Button variant="outline" size="sm">Code</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Portfolio