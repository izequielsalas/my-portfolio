import Button from '../components/Button'

function ComponentTest() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-y-4 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Button Component Test
        </h1>
        
        <div className="space-y-4">
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          
          <div className="text-center">
            <Button 
              variant="primary" 
              onClick={() => alert('Button clicked!')}
            >
              Click Me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentTest