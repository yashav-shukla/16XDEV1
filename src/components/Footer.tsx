import {
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Twitter
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yashav-shukla',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yashavshukla',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/16xdev',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:yashavshukla1@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Code Arena', href: '#code-arena' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'API Integration',
    'Performance Optimization',
    'Technical Consulting'
  ];

  return (
    <footer className="bg-black border-t border-red-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
            <img src="/BLACK_HOGA2.png" alt="16XDEV Logo" className="h-20 w-auto"/>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting lightning-fast, premium web experiences that electrify users 
              and drive business results. Based in Kanpur, serving clients globally.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Kanpur, India</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center group cursor-pointer">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Ready to start your project?</p>
                <a
                  href="mailto:hello@16xdev.com"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  hello@16xdev.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 mb-2">Quick chat on WhatsApp:</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  +91 9876543210
                </a>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-6">
                <p className="text-red-400 font-semibold text-sm mb-1">
                  ⚡ Lightning Response
                </p>
                <p className="text-gray-400 text-sm">
                  Average response time: 2-4 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2025 16XDEV. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ⚡</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Electrify. Innovate. Deliver.
              </span>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/30 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-px h-20 bg-gradient-to-t from-red-500/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-red-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-2/3 w-px h-12 bg-gradient-to-t from-red-600/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;