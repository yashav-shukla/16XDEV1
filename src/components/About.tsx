import { Calendar, Code, Trophy, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    commits: 0,
    years: 0,
    clients: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    projects: 150,
    commits: 10000,
    years: 2 ,
    clients: 10
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        projects: Math.floor(finalValues.projects * easeOut),
        commits: Math.floor(finalValues.commits * easeOut),
        years: Math.floor(finalValues.years * easeOut),
        clients: Math.floor(finalValues.clients * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, stepDuration);
  };

  const stats = [
    {
      icon: Trophy,
      label: 'Projects Delivered',
      value: counters.projects,
      suffix: '+',
      color: 'text-red-500'
    },
    {
      icon: Code,
      label: 'Code Commits',
      value: counters.commits,
      suffix: '+',
      color: 'text-red-400'
    },
    {
      icon: Calendar,
      label: 'Years Coding',
      value: counters.years,
      suffix: '+',
      color: 'text-red-600'
    },
    {
      icon: Users,
      label: 'Happy Clients',
      value: counters.clients,
      suffix: '+',
      color: 'text-red-500'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl font-black text-white">YS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Yashav Shukla</h3>
              <p className="text-red-400 font-semibold">Full Stack Developer</p>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
              About <span className="text-red-500">16XDEV</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm <span className="text-red-500 font-bold">Yashav Shukla</span> — crafting web experiences 
                that combine visual beauty with engineering precision.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                With 5+ years of experience in full-stack development, I specialize in creating 
                lightning-fast, scalable applications that don't just work — they electrify users 
                and drive business results.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                From MERN stack applications to complex API integrations, I deliver code that's 
                not just functional, but beautiful, maintainable, and performance-optimized.
              </p>
            </div>

            

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-3xl font-black ${stat.color} mb-2`}>
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
