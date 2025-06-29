import { useState } from 'react'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

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
    const baseClasses = "w-full px-4 py-3 bg-white/10 backdrop-blur-md border rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-white placeholder-white/60"
    const errorClasses = "border-red-400/50 focus:ring-red-400/50 focus:border-red-400/50"
    const successClasses = "border-white/30 hover:border-white/40"
    
    return `${baseClasses} ${errors[fieldName] ? errorClasses : successClasses}`
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 -z-10">
        {/* Floating gradient orbs */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="fixed top-1/4 right-0 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="fixed bottom-0 left-1/3 w-88 h-88 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Floating glass elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="fixed top-1/4 left-16 w-20 h-20 bg-rose-300/10 backdrop-blur-sm rounded-full border border-rose-300/20 animate-float"></div>
        <div className="fixed top-1/3 right-24 w-16 h-16 bg-pink-300/10 backdrop-blur-sm rounded-full border border-pink-300/20 animate-float animation-delay-1000"></div>
        <div className="fixed bottom-1/3 left-24 w-24 h-24 bg-purple-300/10 backdrop-blur-sm rounded-full border border-purple-300/20 animate-float animation-delay-2000"></div>
        <div className="fixed bottom-1/4 right-16 w-12 h-12 bg-indigo-300/10 backdrop-blur-sm rounded-full border border-indigo-300/20 animate-float animation-delay-3000"></div>
      </div>

      <div className="relative z-0 max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <GlassCard variant="strong" className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Let's Work Together</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-sm">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </GlassCard>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassCard variant="default">
            <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-sm">Send me a message</h2>
            
            {/* Success Message */}
            {submitted && (
              <GlassCard variant="colored" className="mb-6 bg-green-500/10 border-green-300/20">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2 text-xl">✅</span>
                  <div>
                    <span className="font-medium text-green-200">Message sent successfully!</span>
                    <p className="text-sm mt-1 text-green-300/80">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </GlassCard>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">
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
                    <p className="mt-2 text-sm text-red-300 flex items-center drop-shadow-sm">
                      <span className="mr-1">⚠️</span>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">
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
                    <p className="mt-2 text-sm text-red-300 flex items-center drop-shadow-sm">
                      <span className="mr-1">⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">
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
                    <option value="" className="bg-gray-800 text-white">Select a project type</option>
                    <option value="website" className="bg-gray-800 text-white">Business Website</option>
                    <option value="webapp" className="bg-gray-800 text-white">Web Application</option>
                    <option value="ecommerce" className="bg-gray-800 text-white">E-commerce Store</option>
                    <option value="landing" className="bg-gray-800 text-white">Landing Page</option>
                    <option value="redesign" className="bg-gray-800 text-white">Website Redesign</option>
                    <option value="other" className="bg-gray-800 text-white">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">
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
                    <option value="" className="bg-gray-800 text-white">Select budget range</option>
                    <option value="under-1k" className="bg-gray-800 text-white">Under $1,000</option>
                    <option value="1-5k" className="bg-gray-800 text-white">$1,000 - $5,000</option>
                    <option value="5-10k" className="bg-gray-800 text-white">$5,000 - $10,000</option>
                    <option value="10-25k" className="bg-gray-800 text-white">$10,000 - $25,000</option>
                    <option value="25k+" className="bg-gray-800 text-white">$25,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">
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
                <div className="mt-2 flex justify-between">
                  {errors.message ? (
                    <p className="text-sm text-red-300 flex items-center drop-shadow-sm">
                      <span className="mr-1">⚠️</span>
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-sm text-white/60 drop-shadow-sm">
                      The more details you provide, the better I can help you.
                    </p>
                  )}
                  <p className="text-sm text-white/50">
                    {formData.message.length}/500
                  </p>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="solid" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </GlassCard>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <GlassCard variant="default">
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-sm">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <GlassCard variant="subtle" className="w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-2xl">📧</span>
                  </GlassCard>
                  <div>
                    <p className="font-medium text-white drop-shadow-sm">Email</p>
                    <a href="mailto:isaac@isaacezequielsalas.com" className="text-pink-300 hover:text-pink-200 transition-colors drop-shadow-sm">
                      isaac@isaacezequielsalas.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <GlassCard variant="subtle" className="w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-2xl">📍</span>
                  </GlassCard>
                  <div>
                    <p className="font-medium text-white drop-shadow-sm">Location</p>
                    <p className="text-white/80 drop-shadow-sm">Phoenix, Arizona</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <GlassCard variant="subtle" className="w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-2xl">⏰</span>
                  </GlassCard>
                  <div>
                    <p className="font-medium text-white drop-shadow-sm">Response Time</p>
                    <p className="text-white/80 drop-shadow-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* FAQ */}
            <GlassCard variant="default">
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm">Frequently Asked</h3>
              <div className="space-y-4">
                <GlassCard variant="subtle">
                  <h4 className="font-medium text-white mb-1 drop-shadow-sm">What's your process?</h4>
                  <p className="text-white/80 text-sm drop-shadow-sm">Discovery call → Proposal → Design → Development → Launch. I keep you involved every step.</p>
                </GlassCard>
                
                <GlassCard variant="subtle">
                  <h4 className="font-medium text-white mb-1 drop-shadow-sm">How long do projects take?</h4>
                  <p className="text-white/80 text-sm drop-shadow-sm">Simple websites: 2-4 weeks. Complex applications: 6-12 weeks. Depends on scope and requirements.</p>
                </GlassCard>
                
                <GlassCard variant="subtle">
                  <h4 className="font-medium text-white mb-1 drop-shadow-sm">Do you work remotely?</h4>
                  <p className="text-white/80 text-sm drop-shadow-sm">Yes! I work with clients worldwide. Local Phoenix clients can meet in person if preferred.</p>
                </GlassCard>
                
                <GlassCard variant="subtle">
                  <h4 className="font-medium text-white mb-1 drop-shadow-sm">What about ongoing support?</h4>
                  <p className="text-white/80 text-sm drop-shadow-sm">All projects include 30 days of free support. Ongoing maintenance packages available.</p>
                </GlassCard>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard variant="colored">
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-3">
                <a 
                  href="https://linkedin.com/in/isaac-salas-74825819a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 border border-blue-400/20"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a 
                  href="https://twitter.com/izequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 border border-gray-600/20"
                  aria-label="Twitter"
                >
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a 
                  href="https://github.com/izequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gray-700/30 transition-all duration-300 hover:scale-110 border border-gray-500/20"
                  aria-label="GitHub"
                >
                  <span className="text-sm font-bold">GH</span>
                </a>
                <a 
                  href="https://youtube.com/@isaacezequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-red-500/30 transition-all duration-300 hover:scale-110 border border-red-400/20"
                  aria-label="YouTube"
                >
                  <span className="text-sm font-bold">YT</span>
                </a>
                <a 
                  href="https://instagram.com/izequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-pink-500/30 transition-all duration-300 hover:scale-110 border border-pink-400/20"
                  aria-label="Instagram"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a 
                  href="https://reddit.com/u/izequielsalas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-orange-500/30 transition-all duration-300 hover:scale-110 border border-orange-400/20"
                  aria-label="Reddit"
                >
                  <span className="text-sm font-bold">RD</span>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact