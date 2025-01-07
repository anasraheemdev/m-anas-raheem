import React, { useState } from 'react';
import { LucideMail, LucidePhone, LucideLinkedin, LucideGithub, LucideSend } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#0A0A1F] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-4">
                <a 
                  href="mailto:anasraheem@synovate.pk" 
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <div className="bg-gray-700/50 p-3 rounded-full">
                    <LucideMail className="w-6 h-6" />
                  </div>
                  <span>anasraheem@synovate.pk</span>
                </a>
                
                <a 
                  href="tel:+923462440356" 
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <div className="bg-gray-700/50 p-3 rounded-full">
                    <LucidePhone className="w-6 h-6" />
                  </div>
                  <span>+92 346 2440356</span>
                </a>
                
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <div className="bg-gray-700/50 p-3 rounded-full">
                    <LucideLinkedin className="w-6 h-6" />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <div className="bg-gray-700/50 p-3 rounded-full">
                    <LucideGithub className="w-6 h-6" />
                  </div>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <LucideSend className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;