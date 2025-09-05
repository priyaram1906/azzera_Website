import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { services, iconMap } from '../data/services';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 pointer-events-none"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-500/20 backdrop-blur-md rounded-full mb-6 border border-gold-500/30">
              {React.createElement(iconMap['Heart'], {
                className: 'w-10 h-10 text-gold-500',
              })}
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {t('services.title') || 'Premium Services'}
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle') ||
                'Elevate your events with our exquisite solutions, crafted to create unforgettable moments with sophistication and elegance.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url(\'https://www.transparenttextures.com/patterns/diagmonds.png\')] opacity-10" />
          <Sparkles className="absolute top-20 left-1/4 text-gold-500/20 w-8 h-8" />
          <Sparkles className="absolute bottom-40 right-1/3 text-gold-500/30 w-6 h-6" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isEven = index % 2 === 0;
            const tiltDegree = isEven ? 2 : -2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}
              >
                {/* Image container with tilt and hover */}
                <div className="lg:w-1/2 relative group">
                  <motion.div
                    className="absolute -inset-4 border-2 border-gold-500/30 rounded-2xl"
                    initial={{ rotate: tiltDegree * 1.5 }}
                    whileHover={{ rotate: tiltDegree * 2, transition: { duration: 0.3 } }}
                  />
                  <motion.div
                    className="relative h-96 overflow-hidden rounded-2xl"
                    initial={{ rotate: tiltDegree }}
                    whileHover={{ rotate: isEven ? 3 : -3, scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={e => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center space-x-2 bg-gold-500/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                        {IconComponent && <IconComponent className="w-6 h-6 text-black" />}
                        <span className="text-black font-semibold">{service.title}</span>
                      </div>
                    </div>
                  </motion.div>
                  <div className={`absolute ${isEven ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} w-24 h-24 bg-gold-500/20 rounded-full -z-10`}></div>
                  <div className={`absolute ${isEven ? '-top-4 -right-4' : '-top-4 -left-4'} w-16 h-16 bg-gold-500/10 rounded-full -z-10`}></div>
                  <Sparkles className={`absolute ${isEven ? 'top-2 right-2' : 'top-2 left-2'} text-gold-500/40 w-5 h-5`} />
                  <Sparkles className={`absolute ${isEven ? 'bottom-2 left-2' : 'bottom-2 right-2'} text-gold-500/30 w-4 h-4`} />
                </div>

                {/* Content container */}
                <div className="lg:w-1/2 p-6">
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">{service.description}</p>
                  <div className="space-y-4 mb-8">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-base">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-gold-500 text-base font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold rounded-xl transition-all duration-300 group/button text-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/button:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gold-500">Elevate</span> Your Event?
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Partner with us to craft extraordinary events with elegance and precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors text-lg"
              >
                Get In Touch
              </Link>
              <Link
                to="/gallery"
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-colors text-lg"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
