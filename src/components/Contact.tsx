import {
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Quick response guaranteed',
      value: '+91 9876543210',
      action: 'Chat Now',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed project discussions',
      value: 'hello@16xdev.com',
      action: 'Send Email',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Direct consultation call',
      value: '+91 9876543210',
      action: 'Call Now',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'UI/UX Design',
    'API Integration',
    'E-commerce',
    'Other'
  ];

  const budgetRanges = [
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Let\'s discuss'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let's Create Something <span className="text-red-500">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Get in touch and let's discuss 
            how we can electrify your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 text-red-500 mr-2" />
                Start Your Project
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Project Type *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-red-500/30 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-gray-900">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-red-500/30 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-gray-900">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-black/40 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>


          


            {/* Location & Availability */}
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Location & Availability
              </h3>
              
              <div className="space-y-4">
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="text-white font-semibold">Kanpur, India</p>
                    <p className="text-gray-400 text-sm">UTC +5:30</p>
                  </div>
                </div>

                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Working Hours</p>
                    <p className="text-gray-400 text-sm">Monday - Saturday ( 9:00 AM - 8:00 PM IST )</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">yashav@16xdev.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold"> Global Clients</p>
                    <p className="text-gray-400 text-sm">Remote collaboration</p>
                  </div>
                </div>
              

            


            {/* Response Time Guarantee */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
              <div className="text-center">
                <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">
                  Lightning Response
                </h4>
                <p className="text-gray-300 mb-4">
                  I respond to all inquiries within 24 hours, usually much faster!
                </p>
                <div className="bg-red-500/20 rounded-lg p-3">
                  <p className="text-red-400 font-bold">
                    Average Response: 2-4 hours
                  </p>
                </div>
              </div>
          </div>
          </div>

          </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;