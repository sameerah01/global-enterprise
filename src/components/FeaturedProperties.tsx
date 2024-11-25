import React from 'react';
import PropertyCard from './PropertyCard';
import { Building2, MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹2.5 Cr',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 4,
    area: '3500 sq ft',
  },
  {
    id: 2,
    title: 'Modern Apartment in JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹1.2 Cr',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beds: 3,
    baths: 3,
    area: '1800 sq ft',
  },
  {
    id: 3,
    title: 'Premium Villa in Electronic City',
    location: 'Electronic City, Bangalore',
    price: '₹3.1 Cr',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beds: 5,
    baths: 5,
    area: '4200 sq ft',
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600">
            Discover our hand-picked premium properties
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard property={property} />
            // <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            //   <div className="relative h-48">
            //     <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
            //     <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
            //       {property.price}
            //     </div>
            //   </div>
            //   <div className="p-6">
            //     <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
            //     <div className="flex items-center text-gray-600 mb-4">
            //       <MapPin className="h-5 w-5 mr-2" />
            //       <span>{property.location}</span>
            //     </div>
            //     <div className="flex justify-between text-gray-600">
            //       <div className="flex items-center">
            //         <Bed className="h-5 w-5 mr-1" />
            //         <span>{property.beds} Beds</span>
            //       </div>
            //       <div className="flex items-center">
            //         <Bath className="h-5 w-5 mr-1" />
            //         <span>{property.baths} Baths</span>
            //       </div>
            //       <div className="flex items-center">
            //         <Square className="h-5 w-5 mr-1" />
            //         <span>{property.area}</span>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
