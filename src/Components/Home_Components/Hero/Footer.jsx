import React from 'react';
import { LucideGithub, LucideLinkedin, LucideMail, LucidePhone, LucideHeart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/',
        icon: LucideGithub
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/',
        icon: LucideLinkedin
      }
    ],
    contact: [
      {
        name: 'anasraheem@synovate.pk',
        href: 'mailto:anasraheem@synovate.pk',
        icon: LucideMail
      },
      {
        name: '+92 346 2440356',
        href: 'tel:+923462440356',
        icon: LucidePhone
      }
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express']
  };

  return (
    <footer className="bg-[#0A0A1F] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Anas Raheem
            </h3>
            <p className="text-gray-400">
              Full Stack Developer crafting seamless digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {links.social.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <platform.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              {links.contact.map((info) => (
                <a
                  key={info.name}
                  href={info.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <info.icon className="w-4 h-4" />
                  <span>{info.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {links.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Anas Raheem. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <LucideHeart className="w-4 h-4 text-red-500" /> by Anas Raheem
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;