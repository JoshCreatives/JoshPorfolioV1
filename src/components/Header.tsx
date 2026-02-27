import { MapPin, Calendar, Mail, BookOpen, Code, Palette, Video, Globe, ChevronRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white py-4"> {/* was py-6 or py-8 */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
        {/* Top Row - Logo and Name on Same Line */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-xl flex items-center justify-center shadow-sm">
              <img
                src="/JOSH CREATIVES LOGO.png"
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

          {/* Award Badge */}
          <div className="hidden md:block">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-center shadow-sm">
              <div className="text-xs font-medium">- Ready for freelance</div>
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
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors text-sm">
                <Calendar className="w-4 h-4" />
                Schedule Call
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm hover:border-gray-300">
                <Mail className="w-4 h-4" />
                Email
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm hover:border-gray-300">
                <BookOpen className="w-4 h-4" />
                Portfolio
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Side - Availability (Mobile only) */}
          <div className="flex md:hidden items-center gap-2">
            <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-center text-xs">
              🏆 Hackathon Champion
            </div>
            <div className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-center text-xs">
              📍 Available
            </div>
          </div>

          {/* Desktop Availability - REMOVED */}
        </div>
      </div>
    </header>
  );
}