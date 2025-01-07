import React, { useState } from 'react';
import { LucideGithub, LucideExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "AirChat",
      description: "A complete full-stack chat application using the MERN stack featuring real-time messaging, user authentication, and a responsive user interface.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
      githubLink: "https://github.com/",
      liveLink: "https://airchat.com",
      image: "https://img.freepik.com/free-vector/flat-design-phone-text-bubble_23-2149459167.jpg?t=st=1736218508~exp=1736222108~hmac=f1f9464ebf6a56030d0a72c8f500643dacb86f1c2637f4a19e4e425ce9f2a655&w=740"
    },
    {
      title: "Airogram",
      description: "A full-stack social interaction website using Laravel and PHP. Features user profiles, posts, comments, and real-time interactions.",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/",
      liveLink: "https://airogram.com",
      image: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063163.jpg?t=st=1736218613~exp=1736222213~hmac=09b16771d7de240123b424dcf7bdaec9d94ef364a52b106a7ed46f5a6bed927f&w=740"
    },
    {
      title: "UG Jewellers",
      description: "An eCommerce website built with MERN stack featuring product listings, secure checkout, user authentication, and an admin panel.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      githubLink: "https://github.com/",
      liveLink: "https://ugjewellers.com",
      image: "https://img.freepik.com/free-vector/purchase-online-concept-application_23-2148651947.jpg?t=st=1736218660~exp=1736222260~hmac=d19d8bfd634006dc8c18f517ab37d32c95c5be4d1e94622bab888b1b4d34db9f&w=740"
    },
    {
      title: "Pickup and Rental",
      description: "A business website for a UAE-based company with service listings, booking functionality, and customer reviews system.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      githubLink: "https://github.com/",
      liveLink: "https://pickupandrental.com",
      image: "https://img.freepik.com/free-vector/purchase-online-onboarding-app-screens_23-2148409408.jpg?t=st=1736218709~exp=1736222309~hmac=a6142e97c0adb0db332dc7f40b7b8acc5f6eb11cc59a256e6e03321411a1ab49&w=740"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Here are some of my recent works
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <LucideGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <LucideExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;