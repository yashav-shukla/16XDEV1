import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Lightning',
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-performance e-commerce platform with real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Real-time inventory tracking',
        'Advanced search & filtering',
        'Secure payment processing',
        'Admin dashboard with analytics'
      ],
      liveUrl: '#',
      githubUrl: '#',
      impact: '300% increase in conversion rate'
    },
    {
      id: 2,
      title: 'AI Chat Interface',
      category: 'React',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intelligent chat interface with natural language processing capabilities.',
      tech: ['React', 'TypeScript', 'OpenAI API', 'WebSocket'],
      features: [
        'Real-time messaging',
        'AI-powered responses',
        'Message history & search',
        'Multi-language support'
      ],
      liveUrl: '#',
      githubUrl: '#',
      impact: '95% user satisfaction rate'
    },
    {
      id: 3,
      title: 'Crypto Trading Dashboard',
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time cryptocurrency trading platform with advanced analytics.',
      tech: ['React', 'Express', 'WebSocket', 'Chart.js'],
      features: [
        'Real-time price tracking',
        'Advanced charting tools',
        'Portfolio management',
        'Risk assessment algorithms'
      ],
      liveUrl: '#',
      githubUrl: '#',
      impact: '$2M+ in trading volume'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      category: 'Data Visualization',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive social media analytics platform with predictive insights.',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      features: [
        'Multi-platform integration',
        'Predictive analytics',
        'Custom reporting',
        'Automated insights'
      ],
      liveUrl: '#',
      githubUrl: '#',
      impact: '400% improvement in engagement'
    },
    {
      id: 5,
      title: 'Healthcare Management',
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete healthcare management system with patient portal and telemedicine.',
      tech: ['React', 'Node.js', 'MySQL', 'WebRTC'],
      features: [
        'Patient management',
        'Telemedicine integration',
        'Appointment scheduling',
        'Medical records system'
      ],
      liveUrl: '#',
      githubUrl: '#',
      impact: '10,000+ patients served'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'EdTech',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interactive learning platform with AI-powered personalized learning paths.',
      tech: ['React', 'Node.js', 'MongoDB', 'ML APIs'],
      features: [
        'Personalized learning paths',
        'Interactive assessments',
        'Progress tracking',
        'Collaborative tools'
      ],
      liveUrl: '#',
      githubUrl: '#',
      impact: '50,000+ active learners'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Impact <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into digital experiences that drive real business results. 
            Each project showcases innovation, performance, and measurable impact.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full p-3 text-white hover:bg-red-500/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full p-3 text-white hover:bg-red-500/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                      <div
                        key={project.id}
                        className="group relative bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => openModal(project.id)}
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-red-500/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-400 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-red-400 font-semibold text-sm">
                              {project.impact}
                            </span>
                            <div className="flex space-x-2">
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                              <Github className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                            </div>
                          </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-red-500/30">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full p-2 text-white hover:bg-red-500/30 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>

                {/* Project Details */}
                <div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm font-bold rounded-full">
                      {selectedProjectData.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">
                    {selectedProjectData.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {selectedProjectData.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-6">
                    <h4 className="text-red-400 font-bold mb-2">Impact:</h4>
                    <p className="text-xl font-bold text-white">{selectedProjectData.impact}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-red-400 font-bold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedProjectData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-red-400 font-bold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={selectedProjectData.liveUrl}
                      className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={selectedProjectData.githubUrl}
                      className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;