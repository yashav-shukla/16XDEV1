import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Rocket
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      subtitle: 'Full-Stack Excellence',
      description: 'Lightning-fast, scalable web applications built with modern technologies.',
      features: [
        'React/Next.js Applications',
        'Node.js Backend Development',
        'Database Design & Optimization',
        'API Development & Integration',
        'Performance Optimization',
        'SEO & Analytics Setup'
      ],
      price: 'From $2,500',
      deliveryTime: '2-4 weeks',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile Apps',
      subtitle: 'Cross-Platform Power',
      description: 'Native-quality mobile experiences that work seamlessly across all devices.',
      features: [
        'React Native Development',
        'iOS & Android Deployment',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'Analytics & Crash Reporting'
      ],
      price: 'From $3,500',
      deliveryTime: '3-6 weeks',
      gradient: 'from-red-600 to-red-700'
    },
    {
      id: 3,
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'Pixel-Perfect Interfaces',
      description: 'Stunning designs that convert visitors into customers with intuitive user experiences.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Responsive Design',
        'Usability Testing',
        'Design System Creation'
      ],
      price: 'From $1,500',
      deliveryTime: '1-3 weeks',
      gradient: 'from-red-400 to-red-500'
    },
    {
      id: 4,
      icon: Database,
      title: 'API Integration',
      subtitle: 'Seamless Connections',
      description: 'Robust API solutions that connect your applications with third-party services.',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'Third-party Integrations',
        'Authentication Systems',
        'Rate Limiting & Security',
        'Documentation & Testing'
      ],
      price: 'From $1,200',
      deliveryTime: '1-2 weeks',
      gradient: 'from-red-700 to-red-800'
    }
  ];

  const guarantees = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Projects delivered on time, every time'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction or money back'
    },
    {
      icon: Rocket,
      title: 'Performance Optimized',
      description: 'Lighthouse scores 90+ guaranteed'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Freelance <span className="text-red-500">Power Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your ideas into digital reality with premium development services 
            that deliver results, not just code.
          </p>
          
          {/* Lightning Guarantee Banner */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-bold">Lightning Guarantee:</span>
            <span className="text-white font-semibold">Fast Delivery. Flawless Code.</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: hoveredService === service.id ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)'
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative p-8">
                {/* Service Icon & Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-red-400 font-semibold">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Price Tag */}
                  <div className="text-right">
                    <div className="text-2xl font-black text-white mb-1">
                      {service.price}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* 3D Tilt Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-black text-white text-center mb-8">
            Why Choose <span className="text-red-500">16XDEV</span>?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {guarantee.title}
                </h4>
                <p className="text-gray-400">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-black text-white mb-4">
            Ready to <span className="text-red-500">Electrify</span> Your Project?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
            <Zap className="w-6 h-6" />
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;