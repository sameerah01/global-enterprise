import React from 'react';
import { Building2, Key, Home, MapPin, Construction, Paintbrush2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Property Resale',
    description: 'Find your perfect resale property with our expert guidance',
    icon: Building2,
    path: '/property-resale',
  },
  {
    title: 'Primary Sales',
    description: 'Exclusive new properties from top developers',
    icon: Key,
    path: '/new-properties',
  },
  {
    title: 'Rental Properties',
    description: 'Wide range of rental properties to suit your needs',
    icon: Home,
    path: '/rental-properties',
  },
  {
    title: 'Gated Community Plots',
    description: 'Premium plots in secure gated communities',
    icon: MapPin,
    path: '/gated-plots',
  },
  {
    title: 'Construction Services',
    description: 'Expert construction services for your dream home',
    icon: Construction,
    path: '/construction',
  },
  {
    title: 'Interior Design',
    description: 'Transform your space with our interior design services',
    icon: Paintbrush2,
    path: '/interior-design',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive real estate solutions for all your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <service.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;