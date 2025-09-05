import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services, iconMap } from '../data/services';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16 text-white">
        <Link
          to="/services"
          className="inline-flex items-center text-gold-500 font-semibold hover:underline transition duration-200"
        >
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Services
        </Link>

        <div className="flex flex-col md:flex-row items-start gap-12 mt-8">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-glow bg-black h-96 w-full max-w-lg">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
                style={{ backgroundColor: '#000' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400?text=No+Image';
                }}
              />
              {IconComponent && (
                <div className="absolute top-4 left-4 bg-gold-500/90 backdrop-blur p-2 rounded flex items-center shadow">
                  <IconComponent className="w-6 h-6 text-black" />
                  <span className="text-black font-semibold ml-2">{service.title}</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold">{service.title}</h1>
            <div className="h-2 w-24 bg-gold-500 rounded my-4"></div>
            <p className="text-gray-300 leading-relaxed mb-8">{service.description}</p>
            <h2 className="text-2xl font-semibold text-gold-500 mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-400">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-gold-500 w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
