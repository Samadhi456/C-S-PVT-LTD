import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Globe, Cpu, Heart, Car, Home, Briefcase, Smartphone, Leaf } from 'lucide-react';

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy & Utilities",
      description: "Powering the future with sustainable energy solutions and smart grid technologies.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      stats: "2.5B+ consumers served"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Revolutionizing patient care through digital health innovations and AI diagnostics.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      stats: "95% patient satisfaction"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology",
      description: "Building tomorrow's digital infrastructure with cutting-edge software solutions.",
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-50",
      stats: "1M+ apps deployed"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Automotive",
      description: "Driving innovation in electric vehicles and autonomous transportation systems.",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      stats: "50M+ vehicles connected"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate",
      description: "Transforming property markets with smart buildings and virtual reality tours.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      stats: "$2.5T market value"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Finance",
      description: "Reshaping financial services with blockchain technology and digital banking.",
      color: "from-indigo-400 to-blue-600",
      bgColor: "bg-indigo-50",
      stats: "500M+ transactions daily"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients across 50+ countries worldwide"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital First",
      description: "Mobile-optimized solutions for the modern world"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable",
      description: "Committed to environmental responsibility"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Industries
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Empowering every sector with innovative solutions that drive growth, efficiency, and transformation in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                  <div className="text-blue-600">{feature.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer ${industry.bgColor} hover:scale-105`}
              onMouseEnter={() => setActiveIndustry(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${industry.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    {industry.stats}
                  </span>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-32 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions power businesses across the globe, delivering measurable results and driving innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Global Clients" },
              { number: "50M+", label: "Users Served" },
              { number: "99.9%", label: "Uptime SLA" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join thousands of companies that trust us to deliver cutting-edge solutions tailored to their unique industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;