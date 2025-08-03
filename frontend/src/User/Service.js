import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Cloud, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Globe,
  Database,
  Sparkles,
  Eye,
  Heart,
  Play,
  ChevronRight,
  MousePointer,
  Layers,
  Cpu,
  Lock
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    // Auto-cycle through process steps
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      subtitle: "Tailored Solutions",
      description: "Revolutionary software solutions that transform your business operations with cutting-edge technology and innovative approaches.",
      features: ["Full-Stack Development", "API Integration", "Microservices", "Legacy Modernization"],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      accent: "blue",
      stats: "500+ Projects",
      gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Intelligence Amplified",
      description: "Harness the power of artificial intelligence to automate processes, predict outcomes, and unlock insights from your data.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "ML Model Development"],
      color: "from-purple-500 via-violet-500 to-indigo-500",
      bgColor: "from-purple-500/10 via-violet-500/10 to-indigo-500/10",
      accent: "purple",
      stats: "98% Accuracy",
      gradient: "bg-gradient-to-br from-purple-600/20 to-indigo-600/20"
    },
    {
      icon: Palette,
      title: "UX/UI Design Excellence",
      subtitle: "Experience Crafted",
      description: "Create stunning, intuitive interfaces that captivate users and drive engagement through thoughtful design and seamless interactions.",
      features: ["User Research", "Design Systems", "Prototyping", "Usability Testing"],
      color: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "from-pink-500/10 via-rose-500/10 to-red-500/10",
      accent: "pink",
      stats: "150+ Designs",
      gradient: "bg-gradient-to-br from-pink-600/20 to-rose-600/20"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      subtitle: "Scalable Solutions",
      description: "Build robust, scalable cloud architectures that grow with your business and ensure maximum uptime and performance.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Analytics"],
      color: "from-emerald-500 via-green-500 to-teal-500",
      bgColor: "from-emerald-500/10 via-green-500/10 to-teal-500/10",
      accent: "emerald",
      stats: "99.9% Uptime",
      gradient: "bg-gradient-to-br from-emerald-600/20 to-green-600/20"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      subtitle: "Protection First",
      description: "Comprehensive security frameworks that protect your digital assets with advanced threat detection and prevention systems.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      color: "from-orange-500 via-amber-500 to-yellow-500",
      bgColor: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
      accent: "orange",
      stats: "Zero Breaches",
      gradient: "bg-gradient-to-br from-orange-600/20 to-amber-600/20"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      subtitle: "Insights Unleashed",
      description: "Transform raw data into actionable business intelligence with advanced analytics, visualization, and reporting solutions.",
      features: ["Data Warehousing", "Real-time Analytics", "Custom Dashboards", "Predictive Modeling"],
      color: "from-slate-600 via-gray-600 to-zinc-600",
      bgColor: "from-slate-600/10 via-gray-600/10 to-zinc-600/10",
      accent: "slate",
      stats: "Petabytes Processed",
      gradient: "bg-gradient-to-br from-slate-600/20 to-gray-600/20"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Award, value: "50+", label: "Awards Won", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-green-500", bg: "bg-green-500/10" },
    { icon: Clock, value: "24/7", label: "Support", color: "text-orange-500", bg: "bg-orange-500/10" }
  ];

  const process = [
    {
      icon: Target,
      title: "Discovery & Strategy",
      description: "Deep dive into your business objectives, challenges, and opportunities to craft the perfect solution roadmap.",
      features: ["Requirement Analysis", "Market Research", "Technical Assessment"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Design & Planning",
      description: "Create comprehensive blueprints with cutting-edge design thinking and strategic architecture planning.",
      features: ["System Architecture", "UI/UX Design", "Project Planning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Development & Testing",
      description: "Build your solution using agile methodologies with continuous integration and rigorous quality assurance.",
      features: ["Agile Development", "Quality Assurance", "Performance Testing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Launch & Optimization",
      description: "Deploy your solution with ongoing support, monitoring, and continuous optimization for peak performance.",
      features: ["Deployment", "Monitoring", "Optimization"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            id="hero-content"
            data-animate
            className={`transition-all duration-1500 ease-out ${
              isVisible['hero-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Premium Services</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology solutions that revolutionize how you operate, 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> powered by innovation</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Explore Services
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-600 rounded-full font-bold text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Watch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                  isVisible[`stat-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 ${stat.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat.color} bg-white/10`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="services-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible['services-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of cutting-edge services designed to propel your business into the future
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 cursor-pointer overflow-hidden ${
                  isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-2xl group-hover:shadow-3xl transition-shadow duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 font-medium mb-1">{service.subtitle}</div>
                      <div className="text-sm text-blue-400 font-bold">{service.stats}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-blue-400 font-bold group-hover:text-blue-300 transition-colors group/btn">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-slate-900/50 via-black/50 to-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="process-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['process-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A refined methodology that ensures exceptional results through strategic planning and flawless execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                id={`process-${index}`}
                data-animate
                className={`group relative transition-all duration-700 ${
                  currentStep === index ? 'scale-105' : 'scale-100'
                } ${
                  isVisible[`process-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 ${
                  currentStep === index 
                    ? 'border-blue-400/50 bg-blue-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${step.color} shadow-xl transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="cta-content"
            data-animate
            className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 transition-all duration-1000 ${
              isVisible['cta-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-blue-300">Ready to Begin?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-white">Let's Create </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Something Amazing</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Transform your vision into reality with our expert team. 
                <span className="text-blue-400"> Your success story starts here.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group px-10 py-4 border-2 border-gray-600 rounded-full font-bold text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2 justify-center">
                  <MousePointer className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;