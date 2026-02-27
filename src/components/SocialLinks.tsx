import { Linkedin, Github, Instagram, Mail, Calendar, MessageCircle, Globe, MapPin, Heart } from 'lucide-react';

export default function SocialLinks() {
  return (
    <section className="bg-white py-10 border-t border-gray-100 mb-[50px]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-black"></div>
          <h2 className="text-sm font-medium text-gray-400 tracking-wider">CONNECT</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Column 1: Social Links */}
          <div>
            <h3 className="font-medium text-gray-900 text-sm mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-black rounded-full"></span>
              Social
            </h3>
            <div className="space-y-2.5">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Github className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">Discord</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-medium text-gray-900 text-sm mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-black rounded-full"></span>
              Contact
            </h3>
            <div className="space-y-2.5">
              <a
                href="mailto:josh@joshcreatives.com"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">josh@joshcreatives.com</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Calendar className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">Schedule a Call</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm">Pilaring, Pilar Surigao Del Norte</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm">Available worldwide</span>
              </div>
            </div>
          </div>

          {/* Column 3: Services Quick Links */}
          <div>
            <h3 className="font-medium text-gray-900 text-sm mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-black rounded-full"></span>
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">• Web Development</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">• WordPress</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">• Graphic Design</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">• Motion Video</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">• Branding</li>
            </ul>
          </div>

          {/* Column 4: Availability & CTA */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-gray-900" />
              <h3 className="font-medium text-gray-900 text-sm">Open for work</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Currently accepting freelance projects and collaborations worldwide.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-500">Available now</span>
            </div>
            <button className="w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Let's work together
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2025 Josh Creatives. All rights reserved.
          </p>
          <div className="flex gap-3 text-xs text-gray-400">
            <span>✓ Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}