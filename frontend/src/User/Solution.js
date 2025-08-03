import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Factory, 
  Rocket, 
  University,
  ChevronRight,
  ArrowUpRight,
  Zap,
  Shield,
  Layers,
  Globe,
  Database,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Eye,
  Heart,
  Star,
  Target,
  Lightbulb,
  Brain,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  Smartphone,
  Settings,
  Code,
  Palette,
  MousePointer,
  ArrowRight
} from 'lucide-react';

const SolutionsPage = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeTab, setActiveTab] = useState('enterprise');
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [currentFeature, setCurrentFeature] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSolution(prev => (prev + 1) % solutions.length);
      setCurrentFeature(prev => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const solutions = [
    {
      id: 'enterprise',
      icon: Building2,
      title: 'Enterprise Solutions',
      subtitle: 'Fortune 500 Ready',
      description: 'Comprehensive enterprise-grade solutions designed to scale with global organizations and complex business requirements.',
      longDescription: 'Transform your enterprise operations with our comprehensive suite of scalable solutions. From legacy system modernization to cloud-native architectures, we deliver enterprise-grade technology that drives efficiency, innovation, and competitive advantage.',
      features: [
        'Scalable Architecture',
        'Legacy Modernization',
        'Enterprise Integration',
        'Multi-tenant Solutions',
        'Advanced Security',
        'Performance Optimization'
      ],
      technologies: ['Microservices', 'Kubernetes', 'Enterprise APIs', 'Cloud Native'],
      stats: { clients: '200+', uptime: '99.99%', savings: '40%' },
      color: 'from-blue-600 via-indigo-600 to-purple-700',
      bgGradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
      accentColor: 'blue',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing & Industry',
      subtitle: 'Industry 4.0 Solutions',
      description: 'Smart manufacturing solutions that integrate IoT, AI, and automation to optimize production and supply chain efficiency.',
      longDescription: 'Revolutionize your manufacturing operations with Industry 4.0 technologies. Our solutions integrate IoT sensors, predictive analytics, and automation systems to create smart factories that maximize efficiency, reduce downtime, and ensure quality.',
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Quality Management',
        'Real-time Monitoring',
        'Process Automation'
      ],
      technologies: ['IoT Platforms', 'Edge Computing', 'AI/ML', 'SCADA Systems'],
      stats: { efficiency: '+35%', downtime: '-60%', quality: '99.8%' },
      color: 'from-orange-600 via-red-600 to-pink-700',
      bgGradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
      accentColor: 'orange',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'startups',
      icon: Rocket,
      title: 'Startup Solutions',
      subtitle: 'MVP to Scale',
      description: 'Agile, cost-effective solutions that help startups build, launch, and scale their innovative ideas rapidly.',
      longDescription: 'Accelerate your startup journey with our agile development approach. From MVP development to scaling solutions, we provide cost-effective, flexible technologies that grow with your business and adapt to changing market demands.',
      features: [
        'Rapid Prototyping',
        'MVP Development',
        'Scalable Infrastructure',
        'Cost Optimization',
        'Agile Methodology',
        'Growth Analytics'
      ],
      technologies: ['Cloud Native', 'Serverless', 'NoSQL', 'Modern Frameworks'],
      stats: { timeToMarket: '50%', costs: '-40%', scalability: '10x' },
      color: 'from-green-600 via-emerald-600 to-teal-700',
      bgGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      accentColor: 'green',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'government',
      icon: University,
      title: 'Government & Public Sector',
      subtitle: 'Digital Governance',
      description: 'Secure, compliant solutions for government agencies and public sector organizations to serve citizens better.',
      longDescription: 'Transform public services with secure, transparent, and citizen-centric digital solutions. Our government-grade platforms ensure compliance, accessibility, and efficient service delivery while maintaining the highest security standards.',
      features: [
        'Compliance Management',
        'Citizen Portals',
        'Data Security',
        'Workflow Automation',
        'Accessibility Standards',
        'Audit Trails'
      ],
      technologies: ['Blockchain', 'Secure Cloud', 'Identity Management', 'Analytics'],
      stats: { compliance: '100%', efficiency: '+45%', satisfaction: '92%' },
      color: 'from-purple-600 via-violet-600 to-indigo-700',
      bgGradient: 'from-purple-500/20 via-violet-500/20 to-indigo-500/20',
      accentColor: 'purple',
      image: '/api/placeholder/600/400'
    }
  ];

  const keyFeatures = [
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance' },
    { icon: Shield, title: 'Bank-Level Security', description: 'Enterprise security' },
    { icon: Layers, title: 'Scalable Architecture', description: 'Grows with you' },
    { icon: Globe, title: 'Global Reach', description: 'Worldwide deployment' },
    { icon: Database, title: 'Big Data Ready', description: 'Handle any volume' },
    { icon: Users, title: 'User-Centric', description: 'Intuitive interfaces' }
  ];

  const metrics = [
    { value: '500+', label: 'Solutions Delivered', icon: Award, color: 'text-blue-500' },
    { value: '98%', label: 'Client Satisfaction', icon: Heart, color: 'text-pink-500' },
    { value: '99.9%', label: 'System Uptime', icon: TrendingUp, color: 'text-green-500' },
    { value: '24/7', label: 'Support Available', icon: Shield, color: 'text-purple-500' }
  ];

  const currentSolution = solutions[activeSolution];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background: `linear-gradient(45deg, ${
              currentSolution.color.includes('blue') ? '#3B82F6, #8B5CF6' :
              currentSolution.color.includes('orange') ? '#EA580C, #DC2626' :
              currentSolution.color.includes('green') ? '#059669, #0D9488' :
              '#7C3AED, #4F46E5'
            })`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-500/20 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 border-2 border-green-500/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-500/40 rounded-full animate-ping"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div 
            id="hero-content"
            data-animate
            className={`text-center mb-16 transition-all duration-1500 ease-out ${
              isVisible['hero-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-blue-300">Tailored Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Solutions That
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Scale & Succeed
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Custom-built solutions designed for your industry, your challenges, and your growth trajectory.
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> Technology that transforms.</span>
            </p>
          </div>

          {/* Interactive Solution Selector */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solution Navigation */}
            <div 
              id="solution-nav"
              data-animate
              className={`space-y-4 transition-all duration-1000 ${
                isVisible['solution-nav'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeSolution === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => {
                    setActiveSolution(index);
                    setActiveTab(solution.id);
                  }}
                >
                  <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 overflow-hidden ${
                    activeSolution === index 
                      ? 'border-white/30 bg-white/10' 
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    {/* Active Background */}
                    {activeSolution === index && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${solution.bgGradient} rounded-2xl`}></div>
                    )}
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color} shadow-lg`}>
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold">{solution.title}</h3>
                          {activeSolution === index && (
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">{solution.subtitle}</p>
                      </div>
                      
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                        activeSolution === index ? 'rotate-90 text-blue-400' : 'text-gray-500'
                      }`} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Playback Controls */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm">{isPlaying ? 'Pause' : 'Play'} Tour</span>
                </button>
                <button
                  onClick={() => setActiveSolution(0)}
                  className="p-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Solution Details */}
            <div 
              id="solution-details"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['solution-details'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 overflow-hidden">
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentSolution.bgGradient} opacity-50`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-black mb-2">{currentSolution.title}</h2>
                      <p className="text-blue-400 font-semibold">{currentSolution.subtitle}</p>
                    </div>
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentSolution.color} shadow-xl`}>
                      <currentSolution.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {currentSolution.longDescription}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentSolution.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentSolution.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(currentSolution.stats).map(([key, value], index) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-black text-white mb-1">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Explore Solution</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Showcase */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-slate-900/50 via-black/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['features-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="text-white">Why Choose </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technology and industry best practices for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                  currentFeature === index ? 'ring-2 ring-blue-500/30 bg-blue-500/10' : ''
                } ${
                  isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
                {currentFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                id={`metric-${index}`}
                data-animate
                className={`group text-center transition-all duration-700 ${
                  isVisible[`metric-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                  <metric.icon className={`w-8 h-8 mx-auto mb-4 ${metric.color}`} />
                  <div className="text-3xl font-black mb-2">{metric.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{metric.label}</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-8 backdrop-blur-sm">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-300">Ready to Transform?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-white">Let's Build Your </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Perfect Solution</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Every business is unique. Let's create a solution that's perfectly tailored to your needs, goals, and industry requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Discuss Your Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group px-10 py-4 border-2 border-gray-600 rounded-full font-bold text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2 justify-center">
                  <Eye className="w-5 h-5" />
                  View Case Studies
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;