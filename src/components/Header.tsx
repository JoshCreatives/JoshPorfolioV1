import { MapPin, Calendar, Mail, BookOpen, Code, Palette, Video, Globe, ChevronRight, X } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PopupModal } from 'react-calendly';

export default function Header() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  // Form ref
  const formRef = useRef<HTMLFormElement>(null);

  // Your EmailJS credentials
  const PUBLIC_KEY = 'wWJGX8p_3_nSFbKWf';
  const SERVICE_ID = 'service_iajb2y7';
  const TEMPLATE_ID = 'template_n3xn2z6';

  // Initialize EmailJS
  emailjs.init(PUBLIC_KEY);

  // Portfolio projects data
  const portfolioProjects = [
    {
      title: 'ArkDesign.nl',
      category: 'WordPress Development',
      description: 'Custom WordPress website for Dutch design agency',
      image: '/portfolio/arkdesign.jpg',
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

  // Handle email form submission
  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setEmailStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const formFields = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formFields
      );

      console.log('Email sent successfully:', result);
      
      setEmailStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setTimeout(() => {
        setShowEmail(false);
        setTimeout(() => {
          setEmailStatus({ type: null, message: '' });
        }, 300);
      }, 2000);
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      
      setEmailStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      });
      
      setTimeout(() => {
        setEmailStatus({ type: null, message: '' });
      }, 3000);
    } finally {
      setIsSending(false);
    }
  };

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
              {/* Updated Schedule Call button with Calendly */}
              <button 
                onClick={() => setIsCalendlyOpen(true)}
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

      {/* Calendly Popup Modal - This replaces your old calendar modal */}
      <PopupModal
        url="https://calendly.com/joshcreatives081200/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root') as HTMLElement}
        /*
          Optional: Pre-fill user data if you have it
          prefill={{
            email: '',
            name: '',
          }}
        */
      />

      {/* Email Modal */}
      {showEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => {
                setShowEmail(false);
                setEmailStatus({ type: null, message: '' });
              }}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Email Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Send an Email</h3>
              <p className="text-sm text-gray-500 mt-1">I'll get back to you within 24 hours</p>
            </div>

            {/* Status Message */}
            {emailStatus.type && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                emailStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {emailStatus.message}
              </div>
            )}

            {/* Email Form */}
            <form ref={formRef} className="space-y-4" onSubmit={handleEmailSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                  disabled={isSending}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                  disabled={isSending}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                  disabled={isSending}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  required
                  disabled={isSending}
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 rounded-lg font-medium transition-colors mt-2 ${
                  isSending
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Or email directly at:{' '}
                <a 
                  href="mailto:joshcreatives081200@gmail.com" 
                  className="text-gray-900 font-medium hover:underline"
                >
                  joshcreatives081200@gmail.com
                </a>
              </p>
            </div>
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