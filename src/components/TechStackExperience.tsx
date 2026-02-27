import { Code, Server, Cloud, Sparkles, Briefcase, GraduationCap, Heart, Globe, Palette, Video } from 'lucide-react';

export default function TechStackExperience() {
  // Tech Stack Data
  const techCategories = [
    {
      name: 'Frontend',
      icon: Code,
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5/SCSS', 'Tailwind CSS'],
      color: 'bg-gray-900'
    },
    {
      name: 'Backend',
      icon: Server,
      items: ['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: 'bg-gray-800'
    },
    {
      name: 'CMS & E-commerce',
      icon: Globe,
      items: ['WordPress', 'WooCommerce', 'Elementor', 'Shopify'],
      color: 'bg-gray-900'
    },
    {
      name: 'Design & Video',
      icon: Palette,
      items: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Figma'],
      color: 'bg-gray-800'
    },
    {
      name: 'DevOps & Tools',
      icon: Cloud,
      items: ['AWS', 'Docker', 'Git', 'GitHub Actions', 'Vercel', 'Netlify'],
      color: 'bg-gray-900'
    },
  ];

  // Experience Data
  const experiences = [
    {
      role: 'WordPress Developer',
      company: 'ArkDesign.nl',
      location: 'Netherlands (Remote)',
      period: '2023 — Present',
      type: 'work',
      icon: Globe,
    },
    {
      role: 'Front End Developer & Designer',
      company: 'CODECHUM',
      location: 'Philippines',
      period: '2022 — Present',
      type: 'work',
      icon: Code,
    },
    {
      role: 'Graphic Designer',
      company: 'SIIT - Siargao Island Institute of Technology',
      location: 'Siargao, Philippines',
      period: '2021 — Present',
      type: 'work',
      icon: Palette,
    },
    {
      role: 'Graphic Designer',
      company: 'SUYO - Siargao United Youth Organization',
      location: 'Siargao, Philippines',
      period: '2020 — Present',
      type: 'work',
      icon: Heart,
    },
    {
      role: 'Graphic Designer',
      company: 'Pilar Esports',
      location: 'Siargao, Philippines',
      period: '2020 — Present',
      type: 'work',
      icon: Sparkles,
    },
    {
      role: 'BS Information Technology',
      company: 'University of San Carlos',
      location: 'Cebu, Philippines',
      period: '2015 — 2019',
      type: 'education',
      icon: GraduationCap,
    },
    {
      role: 'Hello World! 👋',
      company: 'First line of code',
      location: 'Siargao, Philippines',
      period: '2015',
      type: 'milestone',
      icon: Heart,
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - TECH STACK */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-5 bg-black"></div>
              <h2 className="text-sm font-medium text-gray-400 tracking-wider">TECH STACK & TOOLS</h2>
            </div>
            
            <div className="space-y-5">
              {techCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`${category.color} p-1.5 rounded-md text-white`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* Tech Stats */}
              <div className="grid grid-cols-4 gap-2 bg-gray-50 rounded-lg p-3">
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">30+</div>
                  <div className="text-[10px] text-gray-500">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">5</div>
                  <div className="text-[10px] text-gray-500">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">15+</div>
                  <div className="text-[10px] text-gray-500">Advanced</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">∞</div>
                  <div className="text-[10px] text-gray-500">Learning</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN - EXPERIENCE */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-5 bg-black"></div>
              <h2 className="text-sm font-medium text-gray-400 tracking-wider">EXPERIENCE</h2>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="space-y-3">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 py-1.5 border-b border-gray-100 last:border-0">
                      <div className={`mt-1 p-1 ${
                        exp.type === 'work' ? 'bg-gray-900' : 
                        exp.type === 'education' ? 'bg-gray-700' : 'bg-gray-500'
                      } rounded text-white`}>
                        <Icon className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-2">
                          <h3 className="font-medium text-gray-900 text-sm">{exp.role}</h3>
                          <span className="text-xs text-gray-500">• {exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-gray-400">{exp.location}</span>
                          <span className="text-[10px] text-gray-300">•</span>
                          <span className="text-[10px] text-gray-400">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Experience Stats */}
            <div className="mt-4 bg-black text-white rounded-lg p-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-bold">5+</div>
                  <div className="text-[9px] text-gray-400">Years</div>
                </div>
                <div>
                  <div className="text-sm font-bold">7</div>
                  <div className="text-[9px] text-gray-400">Roles</div>
                </div>
                <div>
                  <div className="text-sm font-bold">🌏</div>
                  <div className="text-[9px] text-gray-400">Global</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}