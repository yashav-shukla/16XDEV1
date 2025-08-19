import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "Working with 16XDEV was a game-changer for our startup. The lightning-fast delivery and attention to detail exceeded all expectations. Our platform now handles 10x more traffic seamlessly.",
      project: 'E-commerce Platform',
      result: '300% increase in conversions'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'CTO, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "Exceptional technical expertise combined with creative problem-solving. The API integration project was completed ahead of schedule and works flawlessly. Highly recommend!",
      project: 'API Integration Suite',
      result: '50% reduction in processing time'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Product Manager, DigitalFlow',
      company: 'DigitalFlow',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "The mobile app developed by 16XDEV transformed our user engagement. Beautiful design, smooth performance, and excellent communication throughout the project.",
      project: 'Mobile App Development',
      result: '400% increase in user retention'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder, CloudSync',
      company: 'CloudSync',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "Outstanding work on our dashboard redesign. The new interface is intuitive, fast, and our users love it. The project was delivered exactly on time with zero bugs.",
      project: 'Dashboard Redesign',
      result: '95% user satisfaction score'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "Professional, reliable, and incredibly talented. The website redesign boosted our lead generation by 250%. Communication was excellent throughout the entire process.",
      project: 'Website Redesign',
      result: '250% increase in leads'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Trust & <span className="text-red-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with 16XDEV.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full p-3 text-white hover:bg-red-500/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full p-3 text-white hover:bg-red-500/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-red-500" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={currentTest.image}
                    alt={currentTest.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-red-500/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-black text-xs">{currentTest.company[0]}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">
                  {currentTest.name}
                </h3>
                <p className="text-red-400 font-semibold mb-2">
                  {currentTest.role}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {currentTest.company}
                </p>

                {/* Rating */}
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Project Info */}
                <div className="bg-red-500/10 rounded-lg p-3">
                  <p className="text-red-400 font-semibold text-sm mb-1">
                    Project: {currentTest.project}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {currentTest.result}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="md:col-span-2">
                <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-6">
                  "{currentTest.text}"
                </blockquote>
                
                {/* Additional Visual Elements */}
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Verified Client</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Project Completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-50"></div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-400 mb-8 font-semibold">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm border border-red-500/20 rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white font-bold text-lg">
                  {testimonial.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '100%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support' },
            { number: '2-4 weeks', label: 'Avg. Delivery' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;