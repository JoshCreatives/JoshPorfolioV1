import { ExternalLink, Github, Globe, Sparkles, Palette, Code, Video } from 'lucide-react';

export default function Projects() {
  const projects = [
    // Web Development Projects
    {
      title: 'ArkDesign.nl',
      description: 'WordPress website development and maintenance for Dutch design agency.',
      link: 'arkdesign.nl',
      category: 'WordPress',
      tags: ['WordPress', 'PHP', 'Custom Theme'],
      icon: Globe,
      color: 'from-gray-900 to-gray-800',
    },
    {
      title: 'CODECHUM Projects',
      description: 'Front-end development and UI/UX design for various client projects.',
      link: '#',
      category: 'Web Development',
      tags: ['React', 'Tailwind CSS', 'UI/UX'],
      icon: Code,
      color: 'from-gray-800 to-gray-700',
    },
    
    // Graphic Design Projects
    {
      title: 'SIIT Branding',
      description: 'Complete brand identity and marketing materials for Siargao Island Institute of Technology.',
      link: '#',
      category: 'Graphic Design',
      tags: ['Branding', 'Print Design', 'Marketing'],
      icon: Palette,
      color: 'from-gray-900 to-gray-800',
    },
    {
      title: 'SUYO Youth Organization',
      description: 'Event posters, social media graphics, and promotional materials for youth initiatives in Siargao.',
      link: '#',
      category: 'Graphic Design',
      tags: ['Event Design', 'Social Media', 'Posters'],
      icon: Sparkles,
      color: 'from-gray-800 to-gray-700',
    },
    {
      title: 'Pilar Esports Branding',
      description: 'Team logos, tournament graphics, and esports visual identity for Siargao gaming community.',
      link: '#',
      category: 'Esports Design',
      tags: ['Logo Design', 'Gaming', 'Tournament Graphics'],
      icon: Video,
      color: 'from-gray-900 to-gray-800',
    },
    
    // Personal Projects
    {
      title: 'Portfolio 2025',
      description: 'Personal portfolio website showcasing creative and development work.',
      link: '#',
      category: 'Personal',
      tags: ['React', 'Tailwind', 'Design'],
      icon: Code,
      color: 'from-gray-800 to-gray-700',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'web', name: 'Web Dev' },
    { id: 'design', name: 'Design' },
    { id: 'esports', name: 'Esports' },
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-black"></div>
          <h2 className="text-2xl font-light tracking-wide text-gray-900">PROJECTS</h2>
          <div className="flex-1 h-[2px] bg-gray-100"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className="text-xs px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg border border-gray-200 hover:border-gray-900 transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                {/* Colored Header Bar */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-5">
                  {/* Header with Icon and Category */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 bg-gradient-to-br ${project.color} rounded-lg text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-black">
                          {project.title}
                        </h3>
                        <span className="text-xs text-gray-500">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* External Link Icon - Only show if actual link exists */}
                    {project.link !== '#' && (
                      <a
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                        aria-label="Visit website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link (if available) */}
                  {project.link !== '#' && (
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 flex items-center gap-1 hover:text-gray-900 transition-colors group/link"
                    >
                      <span>{project.link}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  )}

                  {/* "In Development" Badge for placeholder links */}
                  {project.link === '#' && (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                      Portfolio Piece
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}