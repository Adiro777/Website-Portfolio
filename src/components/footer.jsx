function Footer() {
  return (
    <footer className="mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-0">
        <div className="w-full h-0.5 bg-gray-400"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          
          {/* Social Links - Centered and Bigger */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <a href="https://www.linkedin.com/in/adi-roitburg/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 font-semibold transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Adiro777" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 font-semibold transition-colors">
              GitHub
            </a>
          </div>

          {/* Email - Below Links */}
          <div className="text-center">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">Want to get in touch?</p>
            <a href="mailto:adi.roitburg@gmail.com" className="text-sm sm:text-base md:text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors break-all sm:break-normal">
              adi.roitburg@gmail.com
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-xs sm:text-sm mt-6 sm:mt-8">
          <p>© 2025 Adi Roitburg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;