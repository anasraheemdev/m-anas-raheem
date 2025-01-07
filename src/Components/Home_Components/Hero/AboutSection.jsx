import React from 'react';
import { Terminal, Code2, Globe, Database } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      technologies: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 88 },
        { name: "Angular", level: 80 },
      ]
    },
    {
      category: "Backend Development",
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "PHP", level: 75 },
        { name: "Python", level: 70 },
      ]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      technologies: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 75 },
      ]
    },
    {
      category: "Other Skills",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      technologies: [
        { name: "Git", level: 88 },
        { name: "RESTful APIs", level: 85 },
        { name: "Socket.IO", level: 80 },
        { name: "Redux", level: 82 },
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Professional Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a Full Stack Developer with over 3 years of experience in building scalable web applications 
                and delivering enterprise-level solutions. My journey in software development has been driven by 
                a passion for creating efficient, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Currently working at FI Consultancy, UK, where I focus on developing and maintaining full-stack 
                applications using the MERN stack. My experience spans across various industries, allowing me to 
                bring diverse perspectives to every project.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Education & Certifications
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-300">
                  <span className="font-semibold">Bachelor of Artificial Intelligence</span>
                  <p>Air University, Islamabad (2024-2028)</p>
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Certifications:</span>
                  <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
                    <li>IBM Full Stack Engineering</li>
                    <li>Machine Learning - Stanford University</li>
                    <li>Website Development - John Hopkins University</li>
                    <li>Meta MERN Stack</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{tech.name}</span>
                        <span className="text-gray-400">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;