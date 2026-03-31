import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, FileText, Home as HomeIcon, Briefcase, User, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Design Philosophy: Minimalist Coffee Noir
 * - Deep black background (#000000) with coffee brown accents (#6F4E37)
 * - Primary accent: #1243ae (deep blue) for technical elements
 * - Secondary accent: #38b6ff (cyan) for interactive states
 * - Glassmorphism cards with subtle blur and borders
 * - Left-side vertical navigation bar (fixed position)
 * - Smooth scroll behavior and fade-in animations
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent! Thank you for reaching out.');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Left-side Vertical Navigation Bar */}
      <nav className="fixed left-0 top-0 h-screen w-20 bg-black/80 backdrop-blur-md border-r border-white/5 flex flex-col items-center justify-center gap-8 z-50">
        {/* Navigation Items */}
        <button
          onClick={() => scrollToSection('home')}
          className={`nav-icon-btn ${activeSection === 'home' ? 'active' : ''}`}
          title="Home"
        >
          <HomeIcon size={20} />
        </button>
        
        <button
          onClick={() => scrollToSection('experience')}
          className={`nav-icon-btn ${activeSection === 'experience' ? 'active' : ''}`}
          title="Experience"
        >
          <Briefcase size={20} />
        </button>
        
        <button
          onClick={() => scrollToSection('about')}
          className={`nav-icon-btn ${activeSection === 'about' ? 'active' : ''}`}
          title="About"
        >
          <User size={20} />
        </button>
        
        <button
          onClick={() => scrollToSection('resume')}
          className={`nav-icon-btn ${activeSection === 'resume' ? 'active' : ''}`}
          title="Resume"
        >
          <FileText size={20} />
        </button>
        
        <button
          onClick={() => scrollToSection('contact')}
          className={`nav-icon-btn ${activeSection === 'contact' ? 'active' : ''}`}
          title="Contact"
        >
          <Mail size={20} />
        </button>
      </nav>

      {/* Main Content */}
      <main className="ml-20 min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-start px-8 md:px-16 overflow-hidden"
          style={{  
            background: 'linear-gradient(135deg, #ece0d1 0%, #dbc1ac 50%, #c9b5a0 100%)',
          }}
        >
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at top right, rgba(99, 72, 50, 0.1), transparent)' }} />
          
          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              Hey, I'm<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-orange-700">
                Benedict Abellana
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-mono mb-8 font-light" style={{ color: '#634832' }}>
              Front-End Developer who loves Coffee
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                { icon: '⚛️', label: 'React' },
                { icon: '🎨', label: 'Tailwind' },
                { icon: '📘', label: 'TypeScript' },
                { icon: '🚀', label: 'Next.js' },
                { icon: '🎭', label: 'Framer' },
                { icon: '☕', label: 'Coffee' },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="tech-badge"
                  title={tech.label}
                >
                  <span className="text-2xl">{tech.icon}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-8 md:px-16 max-w-4xl">
          <h2 className="section-title section-title-experience">Experience</h2>
          
          <div className="space-y-8">
            {/* Experience Card 1 */}
            <div className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Senior Frontend Developer</h3>
                  <p className="text-cyan-400 font-semibold">Tech Innovations Inc.</p>
                </div>
                <p className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">2022 - Present</p>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Led development of responsive web applications using React and TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Implemented glassmorphism design patterns and modern UI/UX best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Optimized performance achieving 95+ Lighthouse scores</span>
                </li>
              </ul>
            </div>

            {/* Experience Card 2 */}
            <div className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Frontend Developer</h3>
                  <p className="text-cyan-400 font-semibold">Digital Solutions Co.</p>
                </div>
                <p className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">2020 - 2022</p>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Built interactive dashboards and data visualization components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Collaborated with UX/UI designers to implement pixel-perfect designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Mentored junior developers and established coding standards</span>
                </li>
              </ul>
            </div>

            {/* Experience Card 3 */}
            <div className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Junior Frontend Developer</h3>
                  <p className="text-cyan-400 font-semibold">StartUp Ventures</p>
                </div>
                <p className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">2019 - 2020</p>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Developed responsive web pages using HTML, CSS, and vanilla JavaScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Implemented bug fixes and performance improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Participated in code reviews and learned best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-8 md:px-16 max-w-4xl">
          <h2 className="section-title section-title-about">About Me</h2>
          
          <div className="glass-effect p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate frontend developer with a deep love for creating beautiful, functional web experiences. With over 5 years of experience in the industry, I've worked with startups and established companies to build products that users love.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new coffee shops, contributing to open-source projects, or experimenting with the latest web technologies. I believe in the power of clean code, thoughtful design, and continuous learning.
            </p>
          </div>

          {/* Skills */}
          <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion',
              'JavaScript', 'HTML/CSS', 'Responsive Design', 'UI/UX', 'Git',
              'REST APIs', 'GraphQL', 'Web Performance', 'Accessibility', 'Testing'
            ].map((skill, idx) => (
              <span key={idx} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-24 px-8 md:px-16 max-w-4xl">
          <h2 className="section-title section-title-resume">Resume</h2>
          
          <div className="glass-effect p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">My Resume</h3>
              <p className="text-gray-300 mb-6">
                Download my full resume to see a comprehensive overview of my experience, education, and technical skills.
              </p>
              <Button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>
            
            {/* Resume Preview Placeholder */}
            <div className="w-full md:w-64 h-80 bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FileText size={48} className="mx-auto mb-4 text-cyan-400" />
                <p className="text-gray-400 text-sm">Resume Preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-8 md:px-16 max-w-4xl">
          <h2 className="section-title section-title-contact">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just chat about coffee and code!
              </p>
              
              {/* Social Links */}
              <div className="space-y-4">
                <a
                  href="mailto:hello@benedictabellana.dev"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span>abellanabenedict@gmail.com</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>https://github.com/coffeebdict</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                  <span>https://www.linkedin.com/in/benedict-abellana-b277571b2/</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="contact-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="contact-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="contact-input resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 md:px-16 border-t border-white/5 text-center text-gray-500">
          <p>© 2024 Benedict Abellana. Built with React, Tailwind CSS, and ☕ Coffee.</p>
        </footer>
      </main>
    </div>
  );
}
