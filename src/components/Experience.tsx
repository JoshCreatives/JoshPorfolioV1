import { Briefcase, GraduationCap, Heart, Code, Palette, Globe, Video, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      category: 'work',
      items: [
        {
          title: 'WordPress Developer',
          company: 'ArkDesign.nl',
          location: 'Netherlands (Remote)',
          year: '2023 - Present',
          description: 'Developing and maintaining WordPress websites, custom themes, and plugins for Dutch clients.',
          icon: Globe,
          color: 'bg-gray-900',
        },
        {
          title: 'Front End Developer & Designer',
          company: 'CODECHUM',
          location: 'Philippines',
          year: '2022 - Present',
          description: 'Building modern web applications and creating UI/UX designs for various projects.',
          icon: Code,
          color: 'bg-gray-800',
        },
        {
          title: 'Graphic Designer',
          company: 'SIIT - Siargao Island Institute of Technology',
          location: 'Siargao, Philippines',
          year: '2021 - Present',
          description: 'Creating marketing materials, branding, and visual content for the institute.',
          icon: Palette,
          color: 'bg-gray-900',
        },
        {
          title: 'Graphic Designer',
          company: 'SUYO - Siargao United Youth Organization',
          location: 'Siargao, Philippines',
          year: '2020 - Present',
          description: 'Designing promotional materials and visual assets for youth organization events and initiatives.',
          icon: Heart,
          color: 'bg-gray-800',
        },
        {
          title: 'Graphic Designer',
          company: 'Pilar Esports',
          location: 'Siargao, Philippines',
          year: '2020 - Present',
          description: 'Creating esports branding, team logos, tournament graphics, and social media content.',
          icon: Sparkles,
          color: 'bg-gray-900',
        },
      ],
    },
    {
      category: 'education',
      items: [
        {
          title: 'BS Information Technology',
          company: 'University of San Carlos',
          location: 'Cebu, Philippines',
          year: '2015 - 2019',
          description: 'Major in Web Development and Design',
          icon: GraduationCap,
          color: 'bg-gray-800',
        },
      ],
    },
    {
      category: 'milestone',
      items: [
        {
          title: 'Hello World! 👋',
          company: 'First Line of Code',
          location: 'Siargao, Philippines',
          year: '2015',
          description: 'Started my journey into web development and design',
          icon: Heart,
          color: 'bg-gray-900',
        },
      ],
    },
  ];

  const categories = [
    { id: 'work', name: 'Work Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'milestone', name: 'Milestone', icon: Heart },
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-black"></div>
          <h2 className="text-2xl font-light tracking-wide text-gray-900">EXPERIENCE</h2>
          <div className="flex-1 h-[2px] bg-gray-100"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categoryData = experiences.find(cat => cat.category === category.id);
            if (!categoryData) return null;
            
            const Icon = category.icon;
            
            return (
              <div key={category.id} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-5 sticky top-0 bg-white py-2 z-10">
                  <div className="bg-black p-2 rounded-lg text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <div className="flex-1 h-px bg-gray-200 ml-2"></div>
                  <span className="text-xs text-gray-400">{categoryData.items.length} {categoryData.items.length === 1 ? 'item' : 'items'}</span>
                </div>

                {/* Timeline Items */}
                <div className="space-y-5 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
                  
                  {categoryData.items.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={index} className="flex gap-4 relative group">
                        {/* Timeline Dot */}
                        <div className="relative z-10">
                          <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                            <ItemIcon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-5">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-gray-700 text-sm font-medium">{item.company}</p>
                            </div>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full whitespace-nowrap border border-gray-200">
                              {item.year}
                            </span>
                          </div>
                          
                          <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            {item.location}
                          </p>
                          
                          {item.description && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h4 className="text-xs font-medium text-gray-500 tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-black rounded-full"></span>
              EXPERTISE HIGHLIGHTS
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1.5 rounded-full text-xs border border-gray-200 flex items-center gap-1">
                <Code className="w-3 h-3" /> Front-End Dev
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full text-xs border border-gray-200 flex items-center gap-1">
                <Globe className="w-3 h-3" /> WordPress
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full text-xs border border-gray-200 flex items-center gap-1">
                <Palette className="w-3 h-3" /> Graphic Design
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full text-xs border border-gray-200 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> UI/UX Design
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full text-xs border border-gray-200 flex items-center gap-1">
                🎮 Esports Design
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full text-xs border border-gray-200 flex items-center gap-1">
                🏝️ Siargao-Based
              </span>
            </div>
          </div>
        </div>

        {/* Note about continuous experience */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            ✦ Currently available for freelance work • 5+ years of combined experience ✦
          </p>
        </div>
      </div>
    </section>
  );
}