import { Code, Users, Briefcase, Award, Globe, Palette, Video, ChevronRight } from 'lucide-react';

export default function About() {
  const services = [
    { icon: Code, label: 'Web Development', description: 'Custom websites, React, responsive design', color: 'bg-gray-900' },
    { icon: Globe, label: 'WordPress', description: 'Themes, plugins, WooCommerce', color: 'bg-gray-800' },
    { icon: Palette, label: 'Graphic Design', description: 'Branding, logos, marketing materials', color: 'bg-gray-900' },
    { icon: Video, label: 'Motion Video', description: 'Editing, animation, motion graphics', color: 'bg-gray-800' },
  ];

  const stats = [
    { icon: Briefcase, value: '150+', label: 'Projects', color: 'from-gray-900 to-gray-700' },
    { icon: Users, value: '100+', label: 'Happy Clients', color: 'from-gray-800 to-gray-600' },
    { icon: Award, value: '5+', label: 'Years Experience', color: 'from-gray-900 to-gray-700' },
  ];

  return (
    <section className="bg-white py-6">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Minimal Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-black"></div>
          <h2 className="text-2xl font-light tracking-wide text-gray-900">ABOUT</h2>
          <div className="flex-1 h-[2px] bg-gray-100"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="md:col-span-2 space-y-5">
            {/* Short Bio */}
            <div className="space-y-3">
              <p className="text-xl text-gray-900 font-light leading-relaxed">
                Josh Creatives combines 
                <span className="font-medium bg-gray-50 px-2 py-1 mx-1">web development</span>,
                <span className="font-medium bg-gray-50 px-2 py-1 mx-1">design</span>, and
                <span className="font-medium bg-gray-50 px-2 py-1 mx-1">video</span>
                to build complete digital experiences.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Based in Manila, working with startups and businesses worldwide to create 
                websites, brands, and content that connect with audiences.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gray-50 p-4 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-default border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-2 rounded-md bg-white shadow-sm group-hover:bg-gray-800 transition-colors`}>
                        <Icon className="w-4 h-4 text-gray-900 group-hover:text-white" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-white text-sm mb-1">
                      {service.label}
                    </h3>
                    <p className="text-xs text-gray-500 group-hover:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Stats */}
          <div className="space-y-5">
            {/* Stats Section */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h3 className="text-xs font-medium text-gray-500 tracking-wider mb-4">IMPACT</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-md flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="bg-black text-white p-5 rounded-lg">
              <h3 className="text-xs font-medium text-gray-400 tracking-wider mb-3">CURRENT FOCUS</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="text-gray-200">Web & WordPress projects</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="text-gray-200">Brand identity design</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="text-gray-200">Video content creation</span>
                </li>
              </ul>
              
              <div className="mt-4 pt-3 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Freelance</span>
                  <span className="bg-gray-800 text-white text-xs px-2 py-0.5 rounded-full">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}