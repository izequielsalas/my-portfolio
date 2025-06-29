function GlassCard({ children, title, subtitle, image, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'bg-white/10 backdrop-blur-md border border-white/20',
    strong: 'bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl',
    subtle: 'bg-white/5 backdrop-blur-sm border border-white/10',
    dark: 'bg-black/20 backdrop-blur-md border border-white/10',
    colored: 'bg-blue-500/10 backdrop-blur-md border border-blue-300/20'
  }
  
  return (
    <div 
      className={`
        rounded-xl overflow-hidden transition-all duration-300 
        hover:bg-white/15 hover:shadow-2xl hover:scale-105
        ${variants[variant]} ${className}
      `} 
      {...props}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-white/80 mb-4 drop-shadow-sm">
            {subtitle}
          </p>
        )}
        
        <div className="text-white/90 drop-shadow-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

export default GlassCard