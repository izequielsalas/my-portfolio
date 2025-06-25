import { useState } from 'react'
import Button from '../components/Button'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Validation rules
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For now, just log the data. Later integrate with Netlify Forms, Formspree, or EmailJS
      console.log('Form submitted:', formData)
      
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Input styling helper
  const getInputClasses = (fieldName) => {
    const baseClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
    const errorClasses = "border-red-500 focus:ring-red-500 focus:border-red-500"
    const successClasses = "border-gray-300"
    
    return `${baseClasses} ${errors[fieldName] ? errorClasses : successClasses}`
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            
            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <p className="text-sm mt-1">I'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={getInputClasses('name')}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={getInputClasses('email')}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className={getInputClasses('project')}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a project type</option>
                    <option value="website">Business Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="landing">Landing Page</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={getInputClasses('budget')}
                    disabled={isSubmitting}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1-5k">$1,000 - $5,000</option>
                    <option value="5-10k">$5,000 - $10,000</option>
                    <option value="10-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={getInputClasses('message')}
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  disabled={isSubmitting}
                />
                <div className="mt-1 flex justify-between">
                  {errors.message ? (
                    <p className="text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      The more details you provide, the better I can help you.
                    </p>
                  )}
                  <p className="text-sm text-gray-400">
                    {formData.message.length}/500
                  </p>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:isaac@isaacezequielsalas.com" className="text-blue-600 hover:text-blue-700">
                      isaac@isaacezequielsalas.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Phoenix, Arizona</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">⏰</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">What's your process?</h4>
                  <p className="text-gray-600 text-sm">Discovery call → Proposal → Design → Development → Launch. I keep you involved every step.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">How long do projects take?</h4>
                  <p className="text-gray-600 text-sm">Simple websites: 2-4 weeks. Complex applications: 6-12 weeks. Depends on scope and requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Do you work remotely?</h4>
                  <p className="text-gray-600 text-sm">Yes! I work with clients worldwide. Local Phoenix clients can meet in person if preferred.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">What about ongoing support?</h4>
                  <p className="text-gray-600 text-sm">All projects include 30 days of free support. Ongoing maintenance packages available.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/isaac-salas-74825819a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a 
                  href="https://twitter.com/izequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a 
                  href="https://github.com/izequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <span className="text-sm font-bold">GH</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact