function Button({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 backdrop-blur-md'
  
  const variants = {
    primary: 'bg-white/20 hover:bg-white/30 text-white focus:ring-white/50 shadow-lg hover:shadow-xl border border-white/30 hover:border-white/40',
    secondary: 'bg-gray-600/20 hover:bg-gray-600/30 text-white focus:ring-gray-500/50 shadow-lg hover:shadow-xl border border-white/20 hover:border-white/30',
    outline: 'bg-white/10 hover:bg-white/20 text-white focus:ring-white/50 shadow-lg hover:shadow-xl border border-white/30 hover:border-white/40',
    glass: 'bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white shadow-2xl hover:shadow-2xl border-0 hover:scale-105',
    solid: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-500 shadow-xl hover:shadow-2xl border-0 hover:scale-105'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button