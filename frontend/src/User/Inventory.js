import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Heart, Eye, ChevronDown, X, Star, Calendar, Gauge, Fuel, Cog, MapPin, Phone, Mail } from 'lucide-react';

const VehicleInventory = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());

  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 300000],
    year: [2015, 2024],
    mileage: [0, 100000],
    fuel: 'all',
    transmission: 'all',
    brand: 'all'
  });

  const vehicles = [
    {
      id: 1,
      name: "BMW M3 Competition",
      brand: "BMW",
      price: 75000,
      year: 2023,
      mileage: 12000,
      fuel: "Gasoline",
      transmission: "Automatic",
      category: "sedan",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      badge: "Premium",
      features: ["Leather Seats", "Navigation", "Sunroof", "Premium Audio"],
      location: "New York, NY",
      dealer: "AutoLux Manhattan"
    },
    {
      id: 2,
      name: "Tesla Model S Plaid",
      brand: "Tesla",
      price: 129000,
      year: 2024,
      mileage: 5000,
      fuel: "Electric",
      transmission: "Automatic",
      category: "sedan",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.8,
      badge: "New",
      features: ["Autopilot", "Premium Interior", "Supercharging", "Over-the-Air Updates"],
      location: "Los Angeles, CA",
      dealer: "AutoLux Beverly Hills"
    },
    {
      id: 3,
      name: "Porsche 911 Turbo",
      brand: "Porsche",
      price: 180000,
      year: 2023,
      mileage: 8000,
      fuel: "Gasoline",
      transmission: "Automatic",
      category: "sports",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      badge: "Featured",
      features: ["Sport Chrono", "PASM", "Carbon Fiber", "Premium Package"],
      location: "Miami, FL",
      dealer: "AutoLux South Beach"
    },
    {
      id: 4,
      name: "Mercedes AMG GT",
      brand: "Mercedes",
      price: 145000,
      year: 2023,
      mileage: 15000,
      fuel: "Gasoline",
      transmission: "Automatic",
      category: "sports",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.7,
      badge: "Premium",
      features: ["AMG Performance", "Dynamic Select", "Premium Audio", "Carbon Fiber"],
      location: "Chicago, IL",
      dealer: "AutoLux Downtown"
    },
    {
      id: 5,
      name: "Audi RS6 Avant",
      brand: "Audi",
      price: 115000,
      year: 2023,
      mileage: 18000,
      fuel: "Gasoline",
      transmission: "Automatic",
      category: "wagon",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.6,
      badge: "Popular",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen", "Adaptive Cruise"],
      location: "Seattle, WA",
      dealer: "AutoLux Northwest"
    },
    {
      id: 6,
      name: "Range Rover Sport",
      brand: "Land Rover",
      price: 95000,
      year: 2022,
      mileage: 25000,
      fuel: "Gasoline",
      transmission: "Automatic",
      category: "suv",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.5,
      badge: "Certified",
      features: ["Terrain Response", "Air Suspension", "Meridian Audio", "Panoramic Roof"],
      location: "Denver, CO",
      dealer: "AutoLux Mountain"
    },
    {
      id: 7,
      name: "Lamborghini Huracán",
      brand: "Lamborghini",
      price: 265000,
      year: 2023,
      mileage: 3000,
      fuel: "Gasoline",
      transmission: "Automatic",
      category: "sports",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.9,
      badge: "Exotic",
      features: ["V10 Engine", "Carbon Fiber", "Launch Control", "Track Package"],
      location: "Las Vegas, NV",
      dealer: "AutoLux Luxury"
    },
    {
      id: 8,
      name: "Ford Mustang GT",
      brand: "Ford",
      price: 45000,
      year: 2023,
      mileage: 8500,
      fuel: "Gasoline",
      transmission: "Manual",
      category: "sports",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      rating: 4.4,
      badge: "Performance",
      features: ["5.0L V8", "Brembo Brakes", "Recaro Seats", "Performance Package"],
      location: "Detroit, MI",
      dealer: "AutoLux Motor City"
    }
  ];

  const brands = ['BMW', 'Tesla', 'Porsche', 'Mercedes', 'Audi', 'Land Rover', 'Lamborghini', 'Ford'];
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'sports', label: 'Sports Car' },
    { value: 'wagon', label: 'Wagon' }
  ];

  const toggleFavorite = (vehicleId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(vehicleId)) {
      newFavorites.delete(vehicleId);
    } else {
      newFavorites.add(vehicleId);
    }
    setFavorites(newFavorites);
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    if (searchQuery && !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.category !== 'all' && vehicle.category !== filters.category) return false;
    if (filters.brand !== 'all' && vehicle.brand !== filters.brand) return false;
    if (filters.fuel !== 'all' && vehicle.fuel.toLowerCase() !== filters.fuel.toLowerCase()) return false;
    if (filters.transmission !== 'all' && vehicle.transmission.toLowerCase() !== filters.transmission.toLowerCase()) return false;
    if (vehicle.price < filters.priceRange[0] || vehicle.price > filters.priceRange[1]) return false;
    if (vehicle.year < filters.year[0] || vehicle.year > filters.year[1]) return false;
    if (vehicle.mileage < filters.mileage[0] || vehicle.mileage > filters.mileage[1]) return false;
    return true;
  });

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'year-new': return b.year - a.year;
      case 'year-old': return a.year - b.year;
      case 'mileage-low': return a.mileage - b.mileage;
      case 'mileage-high': return b.mileage - a.mileage;
      default: return b.year - a.year;
    }
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedVehicles.length / itemsPerPage);
  const paginatedVehicles = sortedVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const VehicleCard = ({ vehicle, isListView = false }) => (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${isListView ? 'flex' : ''}`}>
      <div className={`relative ${isListView ? 'w-80 flex-shrink-0' : ''}`}>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className={`object-cover group-hover:scale-110 transition-transform duration-300 ${isListView ? 'w-full h-full' : 'w-full h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
            vehicle.badge === 'New' ? 'bg-green-500' :
            vehicle.badge === 'Premium' ? 'bg-gradient-to-r from-blue-600 to-purple-600' :
            vehicle.badge === 'Featured' ? 'bg-orange-500' :
            vehicle.badge === 'Exotic' ? 'bg-red-500' :
            'bg-gray-500'
          }`}>
            {vehicle.badge}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => toggleFavorite(vehicle.id)}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`w-4 h-4 ${favorites.has(vehicle.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
          </button>
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <div className={`${isListView ? 'flex justify-between items-start' : ''}`}>
          <div className={isListView ? 'flex-1' : ''}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
            <div className="flex items-center mb-3">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{vehicle.rating}</span>
              <span className="text-sm text-gray-500 ml-2">({Math.floor(Math.random() * 50) + 10} reviews)</span>
            </div>
            
            <div className={`grid gap-2 text-sm text-gray-600 mb-4 ${isListView ? 'grid-cols-4' : 'grid-cols-2'}`}>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {vehicle.year}
              </div>
              <div className="flex items-center">
                <Gauge className="w-4 h-4 mr-1" />
                {vehicle.mileage.toLocaleString()} mi
              </div>
              <div className="flex items-center">
                <Fuel className="w-4 h-4 mr-1" />
                {vehicle.fuel}
              </div>
              <div className="flex items-center">
                <Cog className="w-4 h-4 mr-1" />
                {vehicle.transmission}
              </div>
            </div>

            {isListView && (
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {vehicle.location} • {vehicle.dealer}
                </div>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.slice(0, 4).map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className={`${isListView ? 'text-right ml-6' : 'flex items-center justify-between'}`}>
            <span className="text-2xl font-bold text-blue-600">{formatPrice(vehicle.price)}</span>
            {isListView && (
              <div className="mt-4 space-y-2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  View Details
                </button>
                <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">
                  Contact Dealer
                </button>
              </div>
            )}
            {!isListView && (
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                View Details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

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
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Inventory</a>
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

      {/* Header */}
      <div className="pt-24 pb-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Vehicle Inventory</h1>
          <p className="text-xl text-blue-100">Discover your perfect vehicle from our premium collection</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by brand, model, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                  <select
                    value={filters.brand}
                    onChange={(e) => setFilters({...filters, brand: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Brands</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                  <select
                    value={filters.fuel}
                    onChange={(e) => setFilters({...filters, fuel: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    <option value="gasoline">Gasoline</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                  <select
                    value={filters.transmission}
                    onChange={(e) => setFilters({...filters, transmission: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t">
            <div className="text-gray-600 mb-4 sm:mb-0">
              Showing {paginatedVehicles.length} of {filteredVehicles.length} vehicles
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="year-new">Year: Newest</option>
                <option value="year-old">Year: Oldest</option>
                <option value="mileage-low">Mileage: Low to High</option>
                <option value="mileage-high">Mileage: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {paginatedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} isListView={viewMode === 'list'} />
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our team can help you find the perfect vehicle or notify you when new inventory arrives that matches your criteria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Request Vehicle Search
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Set Up Alerts
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

export default VehicleInventory;