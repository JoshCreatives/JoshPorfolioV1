import { MapPin, Calendar, Mail, BookOpen, Code, Palette, Video, Globe, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Portfolio projects data
  const portfolioProjects = [
    {
      title: 'ArkDesign.nl',
      category: 'WordPress Development',
      description: 'Custom WordPress website for Dutch design agency',
      image: '/portfolio/arkdesign.jpg', // Add your image paths
      tags: ['WordPress', 'PHP', 'Custom Theme'],
    },
    {
      title: 'SIIT Branding',
      category: 'Graphic Design',
      description: 'Complete brand identity for Siargao Island Institute of Technology',
      image: '/portfolio/siit.jpg',
      tags: ['Branding', 'Print Design', 'Logo'],
    },
    {
      title: 'CODECHUM Projects',
      category: 'Web Development',
      description: 'Front-end development and UI/UX design',
      image: '/portfolio/codechum.jpg',
      tags: ['React', 'Tailwind', 'UI/UX'],
    },
    {
      title: 'SUYO Youth Organization',
      category: 'Graphic Design',
      description: 'Event posters and social media graphics',
      image: '/portfolio/suyo.jpg',
      tags: ['Event Design', 'Social Media'],
    },
    {
      title: 'Pilar Esports',
      category: 'Esports Design',
      description: 'Team logos and tournament graphics',
      image: '/portfolio/pilar.jpg',
      tags: ['Logo Design', 'Gaming', 'Tournament'],
    },
    {
      title: 'Portfolio 2025',
      category: 'Web Development',
      description: 'Personal portfolio website',
      image: '/portfolio/portfolio.jpg',
      tags: ['React', 'Tailwind', 'Design'],
    },
  ];

  return (
    <header className="bg-white py-4">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
        {/* Top Row - Logo and Name on Same Line */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-sm">
              <img
                src="JOSH CREATIVES LOGO.png"
                alt="Josh Creatives Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            
            {/* Name and Verification */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Josh Creatives</h1>
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-1 text-gray-500 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs">Pilaring, Pilar Surigao Del Norte</span>
              </div>
            </div>
          </div>

          {/* Award Badge - Desktop only */}
          <div className="hidden md:block">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-center shadow-sm">
              <div className="text-xs font-medium">✨ Ready for freelance</div>
              <div className="text-[10px] opacity-80">Commission me anytime</div>
            </div>
          </div>
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Left Side - Description and Skills */}
          <div className="flex-1">
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mb-3 max-w-2xl">
              Creative technologist bringing ideas to life through 
              <span className="text-gray-900 font-medium"> web development</span>, 
              <span className="text-gray-900 font-medium"> design</span>, and 
              <span className="text-gray-900 font-medium"> video</span>.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="flex items-center gap-1 text-xs bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <Code className="w-3 h-3" /> Web Dev
              </span>
              <span className="flex items-center gap-1 text-xs bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <Globe className="w-3 h-3" /> WordPress
              </span>
              <span className="flex items-center gap-1 text-xs bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <Palette className="w-3 h-3" /> Design
              </span>
              <span className="flex items-center gap-1 text-xs bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <Video className="w-3 h-3" /> Video
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setShowCalendar(true)}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule Call
              </button>
              <button 
                onClick={() => setShowEmail(true)}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm hover:border-gray-300"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
              <button 
                onClick={() => setShowPortfolio(true)}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm hover:border-gray-300"
              >
                <BookOpen className="w-4 h-4" />
                Portfolio
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setShowCalendar(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Calendar Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Schedule a Call</h3>
              <p className="text-sm text-gray-500 mt-1">Choose a date and time that works for you</p>
            </div>

            {/* Simple Calendar UI */}
            <div className="space-y-4">
              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  ←
                </button>
                <span className="font-medium text-gray-900">March 2026</span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  →
                </button>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <button
                    key={day}
                    className="aspect-square flex items-center justify-center text-sm hover:bg-gray-900 hover:text-white rounded-lg transition-colors"
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Available Times</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map((time) => (
                    <button
                      key={time}
                      className="text-xs bg-gray-50 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-lg transition-colors border border-gray-200"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Button */}
              <button 
                onClick={() => {
                  alert('Meeting scheduled! (Demo - In production, this would connect to your calendar)');
                  setShowCalendar(false);
                }}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4"
              >
                Confirm Schedule
              </button>

              <p className="text-xs text-gray-400 text-center">
                This is a demo calendar. In production, it would connect to Calendly or Google Calendar.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setShowEmail(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Email Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Send an Email</h3>
              <p className="text-sm text-gray-500 mt-1">I'll get back to you within 24 hours</p>
            </div>

            {/* Email Form */}
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Email sent! (Demo - In production, this would send a real email)');
              setShowEmail(false);
            }}>
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2"
              >
                Send Message
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Or email directly at: <a href="mailto:josh@joshcreatives.com" className="text-gray-900 font-medium hover:underline">josh@joshcreatives.com</a>
              </p>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              This is a demo form. In production, it would connect to an email service.
            </p>
          </div>
        </div>
      )}

      {/* Portfolio Modal */}
      {showPortfolio && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setShowPortfolio(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-white rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Portfolio Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">My Portfolio</h3>
              <p className="text-sm text-gray-500 mt-1">A selection of my recent work and projects</p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <div key={index} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-gray-900">
                  {/* Image Placeholder - Replace with actual images */}
                  <div className="h-40 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                    <span className="text-white text-4xl opacity-50">🎨</span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 group-hover:text-black">
                        {project.title}
                      </h4>
                      <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {project.category.split(' ')[0]}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Link */}
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-gray-900 font-medium hover:gap-3 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Full portfolio coming soon!');
                }}
              >
                View Full Portfolio
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-gray-400 text-center mt-6">
              Each project represents real work. Contact me for more details and case studies.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}