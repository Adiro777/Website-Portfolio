import { useState, useEffect } from "react";
import LPhoto1 from "../images/loominary1.png";
import Gravity from "../images/gravity.png";
import robo from "../images/robo1.png";
import lmural from "../images/lmural.png";
import graphics from "../images/graphics.png";
import strat from "../images/strat.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Loominary",
      date: "September 2025 - December 2025",
      image: LPhoto1,
      description: "A desktop data processing tool, making data manipulation accessible to non-programmers",
      longDescription: "Loominary is a desktop application designed to make data manipulation more accessible and simple for people who can't code. Loominary's workflow editor is node-based, where users can drag and connect different nodes to perform complex data manipulation operations. The front-end was developed with React and TailwindCSS, while the data manipulation logic was handled with Python. ",
      tags: ["Electron", "React", "Python"],
      link: "https://github.com/Adiro777/Loominary",
      linkText: "Code on Github",
    },
    {
      title: "Gravity",
      date: "February 2025 - March 2025",
      image: Gravity,
      description: "An endless runner with gravity shifting mechanics",
      longDescription: "Gravity is a 2D endless runner with gravity shifting movement mechanics. The player has to avoid various of obstacles for as long as possible, utilizing power-ups to survive longer. Gravity was developed in the Unity game engine, and the art was made in Aseprite. ",
      tags: ["Unity", "C#", "Aseprite"],
      link: "https://adiro777.itch.io/gravity",
      linkText: "Play here!",
    },
    {
      title: "Robo Runaway",
      date: "September 2024 - December 2024",
      image: robo,
      description: "A parkour game with advanced movement mechanics",
      longDescription: "Robo Runaway is a first person parkour game built in Unreal Engine 5. The player controls a robot, escaping from an evil high-tech facility, utilizing advanced movement mechanics such as wall running, sliding, and slide jumping. The player traverses across rooftops, keeping their battery charge up by collecting scraps.",
      tags: ["Unreal Engine", "Blueprints"],
    },
    {
      title: "LMUral",
      date: "March 2025",
      image: lmural,
      description: "A collaborative tile-based drawing experience",
      longDescription: "LMUral is a collaberative tile-based drawing experience developed with Svelte. Individuals can create new murals, or add onto existing murals. When creating new murals, users can choose its name and dimensions, followed by drawing the inital tile. When adding onto an existing mural, the user can choose which tile to work on. When a mural is finished, it'll be added to a feed where users can view it. Individual tiles and murals are stored in Supabase.",
      tags: ["Svelte", "Supabase"],
    },
    {
      title: "Custom Graphics Library",
      date: "March 2023 - May 2023",
      image: graphics,
      description: "An interactive space experience, rendered and played on a custom graphics library",
      longDescription: "This project involved building a custom graphics rendering library from scratch using JavaScript and Three.js fundamentals. The library handles 3D transformations, lighting calculations, texture mapping, and camera controls. To demonstrate its capabilities, an interactive space exploration game was developed where players navigate through a procedurally generated asteroid field. The project deepened understanding of graphics programming concepts including the rendering pipeline, shader programming, and performance optimization techniques. The custom library supports both orthographic and perspective projections and includes a basic physics engine for collision detection.",
      tags: ["Javascript", "Three.js"],
    },
    {
      title: "Strat Roulette",
      date: "January 2023 - May 2023",
      image: strat,
      description: "A mobile application for gamers, letting them network and make existing games more fun",
      longDescription: "Strat Roulette is a mobile social platform designed to inject randomness and creativity into existing gaming experiences. Users can create profiles, join communities around specific games, and create / share challenges for others to use. Users can also store these challenges in playlists, which can randomly select a challenge for further variety. Strat Roulette was developed in XCode, and user information is stored in Firebase.",
      tags: ["XCode", "Swift", "Firebase"],
    },
  ];

  return (
    <>
      <section className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
        
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent pb-2">
            Projects
          </h1>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            A selection of projects exploring software engineering,
            systems design, and creative development.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              onLearnMore={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}


function ProjectCard({ title, date, image, description, tags, onLearnMore }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">

      {/* Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        
        {/* Title and Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap self-start">
            {date}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium text-blue-700 bg-blue-50 px-2 sm:px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="pt-2">
          <button 
            onClick={onLearnMore}
            className="text-blue-600 font-medium text-xs sm:text-sm hover:text-blue-700 transition-colors flex items-center gap-1 group/btn"
          >
            Learn more
            <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}


function ProjectModal({ project, onClose }) {
  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-gray-100 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title and Date */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {project.title}
            </h2>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {project.date}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm font-medium text-blue-700 bg-blue-50 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Long Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">About This Project</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Project Link - Only shows if link exists */}
          {project.link && (
            <div className="pt-4">
              
               
              <a  href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium 
                           hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                {project.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}


export default Projects;