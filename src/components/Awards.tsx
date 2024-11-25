import React from 'react';
import { Award, Star } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: 'Best Real Estate Agency 2023',
    organization: 'Bangalore Real Estate Awards',
    icon: Award,
  },
  {
    id: 2,
    title: 'Excellence in Customer Service',
    organization: 'Property Excellence Awards',
    icon: Star,
  },
  {
    id: 3,
    title: 'Top Developer Partner 2023',
    organization: 'Prestige Group',
    icon: Award,
  },
];

const Awards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-lg text-gray-600">Excellence recognized in the industry</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300"
            >
              <award.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;