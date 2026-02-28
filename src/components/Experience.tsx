import { Briefcase, GraduationCap, Heart, Code, Palette, Globe, Video, Sparkles, X, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const experiences = [
    {
      category: 'work',
      items: [
        {
          id: 'arkdesign',
          title: 'WordPress Developer',
          company: 'ArkDesign.nl',
          location: 'Netherlands (Remote)',
          year: '2023 - Present',
          description: 'Developing and maintaining WordPress websites, custom themes, and plugins for Dutch clients.',
          fullDescription: 'As a WordPress Developer at ArkDesign.nl, I work closely with Dutch clients to create stunning, functional websites that meet their specific business needs. My responsibilities include developing custom WordPress themes from scratch, creating bespoke plugins to extend functionality, optimizing website performance, and ensuring responsive design across all devices. I collaborate with the design team to translate Figma designs into pixel-perfect WordPress implementations, and provide ongoing maintenance and security updates for client websites.',
          icon: Globe,
          color: 'bg-gray-900',
          images: [
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
            'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
          ],
          achievements: [
            'Developed 15+ custom WordPress websites for Dutch businesses',
            'Created a custom booking plugin used by 5+ clients',
            'Improved website load times by 40% through optimization',
            'Implemented multilingual support for international clients',
          ],
          technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'WooCommerce', 'Elementor'],
        },
        {
          id: 'codechum',
          title: 'Front End Developer & Designer',
          company: 'CODECHUM',
          location: 'Philippines',
          year: '2022 - Present',
          description: 'Building modern web applications and creating UI/UX designs for various projects.',
          fullDescription: 'At CODECHUM, I bridge the gap between design and development, creating intuitive user interfaces and implementing them with clean, efficient code. I work on a variety of projects ranging from educational platforms to business applications, ensuring that every user interaction is smooth and meaningful. My role involves both designing UI/UX mockups in Figma and translating them into responsive React applications, as well as mentoring junior developers and contributing to code reviews.',
          icon: Code,
          color: 'bg-gray-800',
          images: [
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          ],
          achievements: [
            'Built 10+ responsive web applications using React',
            'Redesigned the company website, increasing user engagement by 35%',
            'Created a component library used across multiple projects',
            'Mentored 3 junior developers in front-end best practices',
          ],
          technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX Design', 'Next.js'],
        },
        {
          id: 'siit',
          title: 'Graphic Designer',
          company: 'SIIT - Siargao Island Institute of Technology',
          location: 'Siargao, Philippines',
          year: '2021 - Present',
          description: 'Creating marketing materials, branding, and visual content for the institute.',
          fullDescription: 'Working with SIIT, I develop and maintain the visual identity of the institute across all platforms. This includes creating marketing materials for student recruitment, designing event posters and social media graphics, developing branded templates for presentations, and ensuring brand consistency across all communications. I work closely with the marketing team to understand their needs and translate concepts into compelling visual designs that resonate with students and faculty.',
          icon: Palette,
          color: 'bg-gray-900',
          images: [
            'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
            'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          ],
          achievements: [
            'Designed the official institute logo and brand guidelines',
            'Created 50+ marketing materials for student recruitment',
            'Developed a social media template system for consistent branding',
            'Designed yearbook and graduation materials for 500+ students',
          ],
          technologies: ['Photoshop', 'Illustrator', 'InDesign', 'Branding', 'Print Design'],
        },
        {
          id: 'suyo',
          title: 'Graphic Designer',
          company: 'SUYO - Siargao United Youth Organization',
          location: 'Siargao, Philippines',
          year: '2020 - Present',
          description: 'Designing promotional materials and visual assets for youth organization events and initiatives.',
          fullDescription: 'As a volunteer graphic designer for SUYO, I create visual assets that help promote youth engagement and community development in Siargao. I design posters for events and workshops, create social media content to reach young people, and develop branding materials for youth-led initiatives. This role allows me to give back to my community while honing my design skills and understanding the unique needs of non-profit organizations.',
          icon: Heart,
          color: 'bg-gray-800',
          images: [
            'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
            'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          ],
          achievements: [
            'Designed materials for 20+ youth events and workshops',
            'Created a brand identity for the organization',
            'Developed social media graphics that increased engagement by 50%',
            'Trained youth members in basic design principles',
          ],
          technologies: ['Photoshop', 'Illustrator', 'Social Media Design', 'Event Materials'],
        },
        {
          id: 'pilar',
          title: 'Graphic Designer',
          company: 'Pilar Esports',
          location: 'Siargao, Philippines',
          year: '2020 - Present',
          description: 'Creating esports branding, team logos, tournament graphics, and social media content.',
          fullDescription: 'For Pilar Esports, I create dynamic, gaming-inspired designs that capture the energy and excitement of competitive gaming. I design team logos that represent the identity of each squad, create tournament brackets and graphics for livestreams, and develop social media content to engage the gaming community in Siargao. This role combines my passion for gaming with my design skills, allowing me to create visuals that resonate with the esports audience.',
          icon: Sparkles,
          color: 'bg-gray-900',
          images: [
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
            'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
          ],
          achievements: [
            'Designed logos for 8 esports teams',
            'Created graphics for 15+ tournaments and events',
            'Developed streaming overlays used by local streamers',
            'Built a social media presence from 0 to 5,000 followers',
          ],
          technologies: ['Photoshop', 'Illustrator', 'After Effects', 'Twitch Graphics', 'Logo Design'],
        },
      ],
    },
    {
      category: 'education',
      items: [
        {
          id: 'usc',
          title: 'BS Information Technology',
          company: 'University of San Carlos',
          location: 'Cebu, Philippines',
          year: '2015 - 2019',
          description: 'Major in Web Development and Design',
          fullDescription: 'I completed my Bachelor of Science in Information Technology at the University of San Carlos, with a focus on Web Development and Design. During my time at university, I built a strong foundation in programming principles, database management, and web technologies. I was actively involved in student organizations and participated in several hackathons, which helped me develop practical skills and learn to work in team environments.',
          icon: GraduationCap,
          color: 'bg-gray-800',
          images: [
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          ],
          achievements: [
            'Graduated with honors (Cum Laude)',
            'Won 2nd place in regional hackathon',
            'Served as president of the IT student organization',
            'Completed thesis on responsive web design',
          ],
          technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Java', 'UI/UX Fundamentals'],
        },
      ],
    },
    {
      category: 'milestone',
      items: [
        {
          id: 'firstcode',
          title: 'Hello World! 👋',
          company: 'First Line of Code',
          location: 'Siargao, Philippines',
          year: '2015',
          description: 'Started my journey into web development and design',
          fullDescription: 'This is where it all began! In 2015, I wrote my first line of code - a simple "Hello World" in HTML. Little did I know that this moment would spark a passion that would shape my entire career. I spent countless nights teaching myself through online tutorials, building simple websites, and gradually falling in love with the creative possibilities of code and design. This milestone represents the beginning of my journey into the world of technology and creativity.',
          icon: Heart,
          color: 'bg-gray-900',
          images: [
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          ],
          achievements: [
            'First HTML page created',
            'First CSS styling experiment',
            'First JavaScript alert',
            'Started my self-taught journey',
          ],
          technologies: ['HTML', 'CSS', 'JavaScript Basics'],
        },
      ],
    },
  ];

  const categories = [
    { id: 'work', name: 'Work Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'milestone', name: 'Milestone', icon: Heart },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedExperience(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

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
                      <div 
                        key={index} 
                        className="flex gap-4 relative group cursor-pointer"
                        onClick={() => openModal(item)}
                      >
                        {/* Timeline Dot */}
                        <div className="relative z-10">
                          <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform group-hover:ring-2 group-hover:ring-gray-300`}>
                            <ItemIcon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-5 group-hover:bg-gray-50 p-3 rounded-lg transition-all -ml-3 -mt-3">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-black transition-colors flex items-center gap-2">
                                {item.title}
                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Click for details</span>
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

      {/* Experience Modal */}
      {showModal && selectedExperience && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop with blur and transparency */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white/90 backdrop-blur-sm rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-md"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Image Gallery */}
            {selectedExperience.images && selectedExperience.images.length > 0 && (
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <div className="flex h-full">
                  {selectedExperience.images.slice(0, 3).map((img, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>
                
                {/* Image count indicator */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {selectedExperience.images.length} images
                </div>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6">
              {/* Title and Company */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedExperience.title}</h3>
                <p className="text-lg text-gray-700">{selectedExperience.company}</p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full">
                  <MapPin className="w-3 h-3" />
                  <span>{selectedExperience.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3 h-3" />
                  <span>{selectedExperience.year}</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">About this role</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedExperience.fullDescription}
                </p>
              </div>

              {/* Achievements */}
              {selectedExperience.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {selectedExperience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-900 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {selectedExperience.technologies && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Want to know more about this experience? {' '}
                  <a 
                    href="#" 
                    className="text-gray-900 font-medium hover:underline inline-flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Contact me for more details!');
                    }}
                  >
                    Let's talk
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}