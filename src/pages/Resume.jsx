import resumePDF from "../assets/resume.pdf";
import resumePhoto from "../images/resume_photo.png";

function Resume() {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Resume
        </h1>
        <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          View or download my resume to learn more about my experience and qualifications.
        </p>
        
        {/* Download Button */}
        <a 
          href={resumePDF}
          download="Adi_Roitburg_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-medium 
                     hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Resume Image */}
      <div className="max-w-3xl mx-auto px-2 sm:px-0">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200 p-2 sm:p-4">
          <img
            src={resumePhoto}
            alt="Adi Roitburg Resume"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </section>
  );
}

export default Resume;