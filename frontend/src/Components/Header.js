import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', active: true },
    { 
      name: 'Services', 
      href: '#',
      dropdown: ['Consulting', 'Implementation', 'Support', 'Training']
    },
    { 
      name: 'Solutions', 
      href: '#',
      dropdown: ['Enterprise', 'SME', 'Startups', 'Government']
    },
    { name: 'Industries', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 px-4 text-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>+94 11 234 5678</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>info@cs-pvt.lk</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-slate-300">
              <MapPin className="w-4 h-4" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-slate-300">
            <Clock className="w-4 h-4" />
            <span>Mon - Fri: 8:30AM - 5:30PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-slate-200/60 py-2' 
          : 'bg-white/95 backdrop-blur-lg shadow-lg py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <span className="text-white font-bold text-xl tracking-wider">C&S</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                  C&S (PVT) LTD
                </div>
                <div className="text-xs text-slate-500 -mt-1 font-medium tracking-wide">
                  Professional Solutions
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                        item.active
                          ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50'
                      }`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                      <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                        item.active ? 'w-8' : 'w-0 group-hover:w-8'
                      }`}></div>
                    </a>
                    
                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-200/60 py-2 backdrop-blur-lg">
                        {item.dropdown.map((dropItem) => (
                          <a
                            key={dropItem}
                            href="#"
                            className="block px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 mx-2 rounded-lg"
                          >
                            {dropItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="hidden md:flex items-center px-5 py-2.5 text-slate-700 bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-full hover:border-slate-400 hover:shadow-lg hover:from-white hover:to-slate-100 transition-all duration-300 font-medium text-sm">
                Get Quote
              </button>
              <button className="flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 font-semibold text-sm">
                Start Project
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 transition-all duration-200 border border-slate-200"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-4 py-6 bg-white/98 backdrop-blur-xl border-t border-slate-200/60">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                      item.active
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
              <button className="w-full px-4 py-3 text-slate-700 bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                Get Free Quote
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200 font-semibold">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;