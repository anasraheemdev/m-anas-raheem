import React from 'react';
import { LucideBriefcase, LucideGraduationCap } from 'lucide-react';

const JourneySection = () => {
  const experiences = [
    {
      title: "Full Stack Engineer",
      organization: "FI Consultancy",
      location: "United Kingdom",
      type: "Hybrid",
      period: "Sep 2024 – Present",
      details: [
        "Developing and maintaining full-stack applications using the MERN stack",
        "Optimizing user interfaces for a seamless experience",
        "Collaborating with a team to implement innovative solutions"
      ],
      category: "work"
    },
    {
      title: "Software Engineer",
      organization: "Synovate Technologies",
      location: "Islamabad, Pakistan",
      type: "Hybrid",
      period: "Feb 2023 – Present",
      details: [
        "Designed and delivered enterprise-level web solutions for businesses",
        "Integrated advanced e-commerce technologies into platforms for improved customer engagement",
        "Contributed to the growth of the company's portfolio by leading high-impact projects"
      ],
      category: "work"
    },
    {
      title: "Website Developer",
      organization: "Fiverr",
      location: "Islamabad, Pakistan",
      type: "Remote",
      period: "Mar 2023 – Aug 2024",
      details: [
        "Delivered high-quality freelance website development services to global clients",
        "Specialized in responsive web design and functional interfaces"
      ],
      category: "work"
    },
    {
      title: "Jr. MERN Stack Developer",
      organization: "PNY",
      location: "Rawalpindi, Pakistan",
      type: "On-site",
      period: "Apr 2022 – Feb 2023",
      details: [
        "Conducted development and maintenance of web applications using modern frameworks",
        "Created RESTful APIs for client projects, enhancing performance and scalability"
      ],
      category: "work"
    },
    {
      title: "Bachelor of Artificial Intelligence",
      organization: "Air University",
      location: "Islamabad",
      period: "2024 – 2028",
      category: "education"
    },
    {
      title: "Intermediate in Computer Science",
      organization: "FBISE",
      location: "Islamabad",
      period: "2022 – 2024",
      category: "education"
    },
    {
      title: "Matriculation",
      organization: "FBISE",
      location: "Islamabad",
      period: "2020 – 2022",
      category: "education"
    }
  ];

  const certifications = [
    "IBM Full Stack Engineering - IBM",
    "Machine Learning - Stanford University (deeplearning.ai)",
    "Website Development - John Hopkins University",
    "Meta MERN Stack - META"
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              My Journey
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            My professional experience and education
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Timeline items */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-8 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } fade-in`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 flex">
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } w-full`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {exp.category === 'work' ? (
                        <LucideBriefcase className="w-5 h-5 text-blue-500" />
                      ) : (
                        <LucideGraduationCap className="w-5 h-5 text-purple-500" />
                      )}
                      <span className="text-sm font-medium text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {exp.organization} • {exp.location}
                    </p>
                    {exp.type && (
                      <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">
                        {exp.type}
                      </span>
                    )}
                    {exp.details && (
                      <ul className="mt-3 space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <LucideGraduationCap className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;