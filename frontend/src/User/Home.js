import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Search, Filter, Heart, Eye, Calendar, Users, Award, Shield, Play, TrendingUp, Zap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ModernVehicleHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('featured');

  const heroSlides = [
    {
      id: 1,
      title: "Redefine Your Journey",
      subtitle: "Experience the future of luxury automotive excellence",
      image: "https://images.unsplash.com/photo-1549399683-caf9c4b5d909?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Explore Collection",
      badge: "New Arrivals"
    },
    {
      id: 2,
      title: "Electric Revolution",
      subtitle: "Sustainable luxury that doesn't compromise on performance",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Go Electric",
      badge: "Zero Emissions"
    },
    {
      id: 3,
      title: "Performance Unleashed",
      subtitle: "Where engineering meets artistry in perfect harmony",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Test Drive",
      badge: "High Performance"
    }
  ];

  const vehicleTabs = [
    { id: 'featured', label: 'Featured', icon: Star },
    { id: 'luxury', label: 'Luxury', icon: Sparkles },
    { id: 'electric', label: 'Electric', icon: Zap },
    { id: 'performance', label: 'Performance', icon: TrendingUp }
  ];

  const featuredVehicles = [
    {
      id: 1,
      name: "BMW M8 Competition",
      price: "$145,000",
      originalPrice: "$165,000",
      year: "2024",
      mileage: "2,500",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "Limited Edition",
      features: ["Carbon Fiber", "M Sport", "Premium Audio"],
      savings: "$20,000"
    },
    {
      id: 2,
      name: "Tesla Model S Plaid",
      price: "$129,900",
      year: "2024",
      mileage: "1,200",
      fuel: "Electric",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      badge: "New Arrival",
      features: ["Autopilot", "Ludicrous Mode", "Premium Interior"],
      range: "405 miles"
    },
    {
      id: 3,
      name: "Porsche 911 Turbo S",
      price: "$207,000",
      year: "2024",
      mileage: "3,800",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "Certified",
      features: ["Sport Chrono", "PASM", "Sport Exhaust"],
      acceleration: "0-60 in 2.6s"
    },
    {
      id: 4,
      name: "Mercedes AMG GT 63 S",
      price: "$175,000",
      year: "2024",
      mileage: "4,200",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      badge: "Premium Plus",
      features: ["AMG Track Pace", "Burmester Sound", "AMG Performance"],
      power: "630 HP"
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms find your perfect vehicle match based on lifestyle and preferences",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "360° Protection",
      description: "Comprehensive warranty, insurance, and roadside assistance for complete peace of mind",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Ownership",
      description: "Multiple ownership options including lease, finance, subscription, and trade-in programs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "White Glove Service",
      description: "Concierge-level service with home delivery, pickup, and personalized consultation",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "15K+", label: "Vehicles Delivered", icon: TrendingUp },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "99.2%", label: "Satisfaction Rate", icon: Star }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Hero Section with Enhanced Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-white text-sm font-medium">
                  {heroSlides[currentSlide].badge}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="block">{heroSlides[currentSlide].title.split(' ')[0]}</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <span>{heroSlides[currentSlide].cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>Watch Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-2xl hover:bg-white/20 transition-all z-30 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-2xl hover:bg-white/20 transition-all z-30 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? 'w-12 h-3' : 'w-3 h-3'
              }`}
            >
              <div className={`absolute inset-0 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Search Section */}
      <div className="relative -mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-40">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Match</h3>
            <p className="text-gray-600">AI-powered search to discover vehicles tailored to your lifestyle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-3">
              <label className="block text-sm font-semibold text-gray-700 mb-3">What are you looking for?</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Brand, model, or describe your dream car..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Price Range</label>
              <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                <option>Any Price</option>
                <option>$0 - $50K</option>
                <option>$50K - $100K</option>
                <option>$100K - $200K</option>
                <option>$200K+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Vehicle Type</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="all">All Types</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports Car</option>
                <option value="electric">Electric</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200 font-semibold">
                Search Vehicles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Modern Design */}
      <div className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join a community of satisfied customers who chose excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Vehicles with Tabs */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Curated Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every vehicle in our collection is meticulously selected, inspected, and certified to meet our uncompromising standards of luxury and performance.
            </p>
          </div>

          {/* Vehicle Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {vehicleTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden group border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                      {vehicle.badge}
                    </span>
                  </div>
                  
                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="bg-white/90 backdrop-blur-sm p-3 rounded-xl hover:bg-white transition-colors shadow-lg">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-3 rounded-xl hover:bg-white transition-colors shadow-lg">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Savings Badge */}
                  {vehicle.savings && (
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                      Save {vehicle.savings}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${star <= Math.floor(vehicle.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2 font-medium">{vehicle.rating}</span>
                  </div>

                  {/* Vehicle Details */}
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{vehicle.mileage}</span>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      <span>{vehicle.fuel}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium">
                          +{vehicle.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Special Info */}
                  {vehicle.range && (
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        <Zap className="w-4 h-4 mr-1" />
                        <span>{vehicle.range} range</span>
                      </div>
                    </div>
                  )}

                  {vehicle.acceleration && (
                    <div className="mb-4">
                      <div className="flex items-center text-red-600 text-sm font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{vehicle.acceleration}</span>
                      </div>
                    </div>
                  )}

                  {vehicle.power && (
                    <div className="mb-4">
                      <div className="flex items-center text-orange-600 text-sm font-medium">
                        <Zap className="w-4 h-4 mr-1" />
                        <span>{vehicle.power}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {vehicle.price}
                      </span>
                      {vehicle.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {vehicle.originalPrice}
                        </div>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
              <span>Explore Full Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Modern Services Section */}
      <div className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The AutoLux Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience a revolutionary approach to luxury vehicle ownership with our comprehensive suite of premium services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/50 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors flex items-center space-x-2 group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">Ready to Begin Your Journey?</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your Dream Car
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Awaits You
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of satisfied customers who found their perfect vehicle with AutoLux. 
            Experience luxury, performance, and service that exceeds expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-blue-900 px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
              <span>Browse Inventory</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-3">
              <Calendar className="w-5 h-5" />
              <span>Schedule Test Drive</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium">Certified Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-white font-medium">Protected Purchase</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-medium">Award Winning</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-white font-medium">50K+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernVehicleHomepage;