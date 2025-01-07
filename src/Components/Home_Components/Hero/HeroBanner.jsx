import React, { useCallback } from 'react';
import {
  LucideGithub,
  LucideMail,
  LucideLinkedin,
  LucideChevronsDown,
} from 'lucide-react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const HeroBanner = () => {
  // Initialize particles with proper callback
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine); // Load the full tsparticles engine
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  }, []);

  // Particle configuration
  const particlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#2962ff', '#6f42c1', '#e83e8c'],
      },
      shape: {
        type: ['circle', 'triangle', 'square'],
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: '#808080',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'bounce',
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0a0a1f] flex items-center pt-24 overflow-hidden z-23">
      {/* TSParticles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="space-y-6 max-w-2xl">
            {/* Greeting */}
            <h2 className="text-gray-300 text-xl md:text-2xl font-medium">
              Hi there, I'm
            </h2>

            {/* Name with gradient and neon effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                Anas Raheem
              </span>
            </h1>

            {/* Role with neon effect */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Full Stack Developer
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl">
              Innovative and results-driven Full Stack Developer with 3+ years
              of experience in building scalable web applications and delivering
              enterprise-level solutions.
            </p>

            {/* Tech stack */}
            <div className="py-4">
              <p className="text-gray-300 mb-2">Tech Stack |</p>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:anasraheem@synovate.pk"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-600 
                          text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              >
                <LucideMail className="w-5 h-5" />
                Contact Me
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <LucideGithub className="w-5 h-5 text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <LucideLinkedin className="w-5 h-5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Programming Logo */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="text-[300px] text-gray-700/20 font-bold select-none">
                {'</>'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <LucideChevronsDown className="w-8 h-8 text-gray-400" />
      </button>
    </div>
  );
};

export default HeroBanner;
