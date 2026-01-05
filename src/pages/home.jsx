import adiPhoto from "../images/adi_photo.jpg";

function Home() {
  return (
    <section className="min-h-[calc(100vh-7rem)] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-0 items-center">

        {/* LEFT: Image */}
        <div className="flex items-center justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative group">
            <img
              src={adiPhoto}
              alt="Adi Roitburg"
              className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] w-full object-cover rounded-2xl shadow-2xl 
                         transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {/* Optional: Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2 lg:-translate-y-8 lg:translate-x-10">

          {/* Name, Role, and Education - Grouped with tighter spacing */}
          <div className="space-y-2 sm:space-y-3">
            {/* Greeting */}
            <p className="text-base sm:text-lg font-medium text-gray-600 tracking-wide">
              Hi, I'm
            </p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight 
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                          bg-clip-text text-transparent pb-2">
              Adi Roitburg
            </h1>

            {/* Role */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
              Computer Science Major
            </p>

            {/* Education */}
            <p className="text-base sm:text-lg text-gray-600">
              Senior at Loyola Marymount University
            </p>
          </div>

          {/* Accent divider */}
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />

          {/* Introduction */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            Welcome to my website! Here you'll find out who I am, and my experience as 
            a computer scientist.
          </p>

          {/* Optional: CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <a 
              href="/projects" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-medium 
                         hover:bg-gray-800 transition-colors duration-200 shadow-lg 
                         hover:shadow-xl text-center text-sm sm:text-base"
            >
              View My Work
            </a>
            <a 
              href="/resume" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 rounded-lg 
                         font-medium hover:bg-gray-900 hover:text-white transition-all 
                         duration-200 text-center text-sm sm:text-base"
            >
              View My Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;