import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'New Vehicles', href: '#' },
    { name: 'Used Vehicles', href: '#' },
    { name: 'Certified Pre-Owned', href: '#' },
    { name: 'Trade-In Value', href: '#' },
    { name: 'Financing Options', href: '#' },
    { name: 'Service & Parts', href: '#' }
  ];

  const services = [
    { name: '200-Point Inspection', href: '#' },
    { name: 'Extended Warranty', href: '#' },
    { name: 'Vehicle History Report', href: '#' },
    { name: 'Home Delivery', href: '#' },
    { name: 'Roadside Assistance', href: '#' },
    { name: 'Maintenance Plans', href: '#' }
  ];

  const brands = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Lexus', 
    'Jaguar', 'Land Rover', 'Volvo', 'Infiniti', 'Cadillac', 'Genesis'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-slate-700/50 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-slate-300 text-lg">
                Get exclusive deals, new arrivals, and automotive insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all"
                />
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200 font-medium flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AutoLux
                  </div>
                  <div className="text-sm text-slate-400">Premium Motors</div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Your trusted partner in luxury and performance vehicles. We've been connecting drivers with their dream cars for over 25 years, offering unmatched quality and service.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">+1 (555) 123-4567</div>
                    <div className="text-slate-400 text-sm">24/7 Customer Support</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">info@autolux.com</div>
                    <div className="text-slate-400 text-sm">General Inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">123 Luxury Drive</div>
                    <div className="text-slate-400 text-sm">Beverly Hills, CA 90210</div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-400">2,847 Reviews</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Popular Brands</h3>
              <div className="grid grid-cols-2 gap-2">
                {brands.map((brand, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm py-1"
                  >
                    {brand}
                  </a>
                ))}
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Youtube, href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-200 group"
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 AutoLux Premium Motors. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;