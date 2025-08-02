import React, { useState } from 'react';
import { Car, DollarSign, Shield, Search, Users, CheckCircle, Star, Phone, Mail, MapPin, ArrowRight, Clock, Award, TrendingUp } from 'lucide-react';

const VehicleServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vehicle Buying",
      description: "Expert assistance in finding and purchasing your perfect vehicle",
      features: ["Pre-purchase inspection", "Market price analysis", "Financing options", "Documentation support"],
      color: "bg-blue-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Vehicle Selling",
      description: "Maximize your vehicle's value with our professional selling services",
      features: ["Free valuation", "Professional photography", "Marketing support", "Negotiation assistance"],
      color: "bg-green-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vehicle Inspection",
      description: "Comprehensive vehicle inspection and certification services",
      features: ["200-point inspection", "Detailed report", "Certification", "Warranty options"],
      color: "bg-purple-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Vehicle Search",
      description: "Personalized vehicle search service tailored to your needs",
      features: ["Custom search criteria", "Expert recommendations", "Market alerts", "Exclusive deals"],
      color: "bg-orange-500"
    }
  ];

  const additionalServices = [
    { title: "Trade-In Service", desc: "Hassle-free trade-in evaluations" },
    { title: "Extended Warranty", desc: "Comprehensive coverage plans" },
    { title: "Market Analysis", desc: "Real-time market insights" },
    { title: "Certification", desc: "Quality assurance programs" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Happy Customer",
      rating: 5,
      text: "Exceptional service! They helped me find the perfect car within my budget and handled all the paperwork."
    },
    {
      name: "Mike Chen",
      role: "Vehicle Seller",
      rating: 5,
      text: "Sold my car for more than I expected. Their marketing and negotiation skills are outstanding."
    },
    {
      name: "Emily Davis",
      role: "First-time Buyer",
      rating: 5,
      text: "The inspection service gave me complete confidence in my purchase. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Vehicle <span className="text-blue-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in buying, selling, and maintaining vehicles with expert guidance every step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive vehicle solutions designed to make your automotive journey seamless and successful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className={`${service.color} text-white p-4 rounded-lg inline-block mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and effective process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We understand your needs and preferences" },
              { step: "02", title: "Analysis", desc: "Expert evaluation and market research" },
              { step: "03", title: "Execution", desc: "Professional service delivery and support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 && <Phone className="w-6 h-6" />}
                  {index === 1 && <Search className="w-6 h-6" />}
                  {index === 2 && <CheckCircle className="w-6 h-6" />}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for all your vehicle needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {index === 0 && <Users className="w-8 h-8" />}
                  {index === 1 && <Shield className="w-8 h-8" />}
                  {index === 2 && <TrendingUp className="w-8 h-8" />}
                  {index === 3 && <Award className="w-8 h-8" />}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Vehicles Sold" },
              { number: "95%", label: "Customer Satisfaction" },
              { number: "500+", label: "Expert Inspections" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicle needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">info@vehicleservices.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Auto Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleServicesPage;