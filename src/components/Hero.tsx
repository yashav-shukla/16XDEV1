import { Eye, Mouse, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';


const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['MERN Stack', 'API Expert', 'React Pro', 'DSA Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Lightning Streaks */}
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Tagline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
        <span className="text-white">Striking</span>{' '}
              <span className="text-red-500 relative">
                Code
                <Zap className="absolute -top-2 -right-8 w-8 h-8 text-yellow-400 animate-bounce" />
              </span>
              <br />
          <span className=" bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Lightning Fast.
          </span>
        </h1>

        

        
{/* Logo Integration */}
<div className="flex items-center justify-center mb-8">
  <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl px-8 py-4">
    
    {/* Lighting Logo */}
    <img 
      src="public/BLACK_HOGA1.png" 
      alt="Lighting Logo" 
      className="h-12 w-auto object-contain"
    />            

    
  </div>
</div>

        {/* Animated Skills */}
        <div className="mb-12">
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Specializing in{' '}
            <span className="inline-block min-w-[200px] text-left">
              <span className="text-red-500 font-bold animate-pulse">
                {skills[currentSkill]}
              </span>
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Hire Me</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-pulse bg-red-500/20 rounded-full"></div>
          </button>
          
          
          <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <span className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>View My Work</span>
            </span>
          </button>
        </div>
        
        

        

        {/* Scroll Indicator */}
        <div className="animate-bounce ">
          <Mouse className="w-8 h-8 text-red-500 mx-auto" />
        </div>
      </div>

      

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;