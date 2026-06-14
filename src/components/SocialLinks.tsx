import { Linkedin, Facebook, Instagram, Mail, Calendar, MessageCircle, Globe, MapPin, Heart } from 'lucide-react';

export default function SocialLinks() {
  return (
    <section className="bg-white py-10 border-t border-gray-100 mb-[50px]">
      <div className="w-full">
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
                href="https://www.facebook.com/JoshCreatives"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">Josh Creatives</span>
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

            <div id="footer-contact" className="space-y-2.5">
              <a
                href="mailto:josh@joshcreatives.com"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
                <span className="text-sm">joshcreatives081200@gmail.com</span>
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
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=joshcreatives081200@gmail.com&su=Project%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
            >
              Let's work together
            </a>
          </div>
        </div>

        {/* Footer note moved to page footer; contact section ends here */}
      </div>
    </section>
  );
}