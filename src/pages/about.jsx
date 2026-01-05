import adiPhoto from "../images/adi_po.jpg";
import lmuLogo from "../images/lmu_logo.png";

// Import your skill icons
import pythonIcon from "../images/Python.png";
import javaIcon from "../images/Java.png";
import jsIcon from "../images/JavaScript.png";
import csharpIcon from "../images/CS.png";
import reactIcon from "../images//React.png";
import electronIcon from "../images/Electron.png";
import svelteIcon from "../images/Svelte.png";
import gitIcon from "../images/Git.png";
import unrealIcon from "../images/Unreal.png";
import unityIcon from "../images/Unity.png";
import firebaseIcon from "../images/Firebase.png";
import asepriteIcon from "../images/aseprite.png";

function About() {
  const skills = [
    { name: "Python", icon: pythonIcon },
    { name: "Java", icon: javaIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "C#", icon: csharpIcon },
    { name: "React", icon: reactIcon },
    { name: "Electron", icon: electronIcon },
    { name: "Svelte", icon: svelteIcon },
    { name: "Git", icon: gitIcon },
    { name: "Unreal Engine", icon: unrealIcon },
    { name: "Unity", icon: unityIcon },
    { name: "Firebase", icon:  firebaseIcon},
    { name: "Aseprite", icon: asepriteIcon },
  ];

  const interests = [
    { icon: "💻", title: "Software Development", description: "Building tools and applications that solve real problems" },
    { icon: "🎮", title: "Game Development", description: "Creating interactive experiences with Unity and Unreal Engine" },
    { icon: "🎨", title: "Human-Computer Interaction", description: "Designing intuitive interfaces for various technologies" },
    { icon: "🚀", title: "Tennis, Bouldering, Bowling", description: "Participating in a variety of sports (these are my favorite)" },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
          Get to know who I am, what my skills are, and what I'm passionate about.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <img
                src={adiPhoto}
                alt="Adi Roitburg"
                className="max-w-sm sm:max-w-md lg:max-w-lg w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Who I Am</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Hi! I'm Adi. I'm a senior at Loyola Marymount University, pursuing a major in Computer Science and a minor
                in Interactive Games And Immersive Media (IGI).
              </p>
              <p>
                My interest in computer science started with game development, but evolved through my time 
                in academia. I'm now interested in Human-Computer Interactions, designing and developing intuitive
                interfaces for a variety of technologies.
              </p>
              <p>
                When I'm not coding, you'll see me in the bouldering gym, on the tennis courts, in the 
                bowling alley, or in my room playing video games.
              </p>
            </div>
          </div>

        </div>

        {/* Tech Stack Section - Redesigned */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Tech Stack</h2>
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl flex items-center justify-center 
                                  hover:bg-blue-50 transition-all duration-300 group-hover:scale-110 shadow-md hover:shadow-lg">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">What I'm Passionate About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{interest.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{interest.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

  {/* Education Section - Text Left, Logo Right with Title */}
<div>
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Education</h2>
  <div className="flex justify-center">
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-3xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-3 sm:p-4 md:p-6 items-center">
        
        {/* Education Info - Now on the Left */}
        <div className="md:col-span-2 space-y-2 sm:space-y-3 text-left order-2 md:order-1">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900">Loyola Marymount University</h3>
          <div className="space-y-1.5">
            <p className="text-sm sm:text-base font-semibold text-gray-700">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Minor in Interactive Games and Immersive Media
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">GPA:</span> 3.77 / 4.0
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">Expected Graduation:</span> May 2026
            </p>
          </div>
        </div>

        {/* Logo - Now on the Right, Bigger */}
        <div className="flex justify-end order-1 md:order-2">
          <img 
            src={lmuLogo} 
            alt="LMU Logo" 
            className="w-[180%] h-auto object-contain"
          />
        </div>

      </div>
    </div>
  </div>
</div>

        {/* Call to Action
        <div className="text-center space-y-4 sm:space-y-6 py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Let's Connect</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            I'm always interested in hearing about new opportunities, collaborations, or just chatting about technology.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a 
              href="#contact" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-medium 
                         hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Get In Touch
            </a>
            <a 
              href="/resume" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 rounded-lg 
                         font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm sm:text-base"
            >
              View Resume
            </a>
          </div>
        </div> */}

      </div>

    </section>
  );
}

export default About;