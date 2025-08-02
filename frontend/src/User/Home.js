import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Phone, Mail, MapPin, Search, Filter, Heart, Eye, Calendar, Users, Award, Shield } from 'lucide-react';

const VehicleHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const heroSlides = [
    {
      id: 1,
      title: "Find Your Perfect Ride",
      subtitle: "Discover premium vehicles at unbeatable prices",
      image: "https://images.unsplash.com/photo-1549399683-caf9c4b5d909?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Browse Collection"
    },
    {
      id: 2,
      title: "Luxury Redefined",
      subtitle: "Experience excellence in every drive",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Explore Luxury"
    },
    {
      id: 3,
      title: "Electric Future",
      subtitle: "Sustainable mobility for tomorrow",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Go Electric"
    }
  ];

  const featuredVehicles = [
    {
      id: 1,
      name: "BMW M3 Competition",
      price: "$75,000",
      year: "2023",
      mileage: "12,000",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "Premium"
    },
    {
      id: 2,
      name: "Tesla Model S Plaid",
      price: "$129,000",
      year: "2024",
      mileage: "5,000",
      fuel: "Electric",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      badge: "New"
    },
    {
      id: 3,
      name: "Porsche 911 Turbo",
      price: "$180,000",
      year: "2023",
      mileage: "8,000",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "Featured"
    },
    {
      id: 4,
      name: "Mercedes AMG GT",
      price: "$145,000",
      year: "2023",
      mileage: "15,000",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      badge: "Premium"
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Vehicle Inspection",
      description: "Comprehensive 200-point inspection on every vehicle"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Extended Warranty",
      description: "Up to 5 years warranty coverage on all purchases"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Easy Financing",
      description: "Flexible payment plans with competitive rates"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trade-In Program",
      description: "Get the best value for your current vehicle"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "15K+", label: "Vehicles Sold" },
    { number: "25+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AutoLux
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Inventory</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Financing</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'transform translate-x-0' : 
              index < currentSlide ? 'transform -translate-x-full' : 'transform translate-x-full'
            }`}
          >
            <div className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Vehicles</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Brand, model, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports Car</option>
                <option value="electric">Electric</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Vehicles */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of premium vehicles, each one carefully inspected and certified for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {vehicle.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{vehicle.rating}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div>Year: {vehicle.year}</div>
                    <div>Mileage: {vehicle.mileage}</div>
                    <div className="col-span-2">Fuel: {vehicle.fuel}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{vehicle.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View All Vehicles
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose AutoLux?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to ensure your vehicle buying experience is seamless and worry-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who found their perfect vehicle with AutoLux. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Browse Inventory
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                AutoLux
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect vehicle. We've been serving customers with quality cars and exceptional service for over 25 years.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <span>info@autolux.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Inventory</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Financing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Trade-In</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Vehicle Inspection</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Warranty</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 AutoLux. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleHomepage;