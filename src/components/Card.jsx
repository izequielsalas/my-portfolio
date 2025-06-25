function Card({ children, title, subtitle, image, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden ${className}`} {...props}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-gray-600 mb-4">
            {subtitle}
          </p>
        )}
        
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card