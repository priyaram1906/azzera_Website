import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';
import { events } from '../data/events';

export function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [availableCategories, setAvailableCategories] = useState(['all']);

  useEffect(() => {
    const categories = new Set(['all']);
    
    events.forEach((event) => {
      if (event.category) {
        const cleanCategory = event.category.toString().trim();
        categories.add(cleanCategory);
      }
    });
    
    const categoriesArray = Array.from(categories);
    setAvailableCategories(categoriesArray);
  }, []);

  const filteredEvents = (() => {
    if (activeCategory === 'all') {
      return events;
    }
    
    const filtered = events.filter((event) => {
      const eventCategory = event.category ? event.category.toString().trim() : '';
      return eventCategory.toLowerCase() === activeCategory.toLowerCase();
    });
    
    return filtered;
  })();

  const getCategoryDisplayName = (category: string) => {
    switch(category.toLowerCase()) {
      case 'all': return 'All Events';
      case 'corporate': return 'Corporate Events';
      case 'wedding': return 'Weddings';  
      case 'social': return 'Social Events';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-500/20 backdrop-blur-md rounded-full mb-6 border border-gold-500/30">
              <Camera className="w-10 h-10 text-gold-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {t('gallery.title') || 'Our Gallery'}
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t('gallery.subtitle') || 'A showcase of our exceptional events and memorable moments we\'ve created for our clients.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
          <Sparkles className="absolute top-20 left-1/4 text-gold-500/20 w-8 h-8" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {availableCategories.map((category) => {
              const isActive = activeCategory.toLowerCase() === category.toLowerCase();
              return (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-gold-500 border-gold-500 text-black shadow-lg shadow-gold-500/30'
                      : 'bg-transparent border-gold-500/30 text-gold-500 hover:border-gold-500 hover:bg-gold-500/10'
                  }`}
                >
                  {getCategoryDisplayName(category)}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <Sparkles className="absolute bottom-40 right-1/3 text-gold-500/30 w-6 h-6" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={`${event.id}-${index}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-400 pt-4 border-t border-gold-500/20">
                    <span>{event.location}</span>
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/20 rounded-full mb-4 border border-gold-500/30">
                <Camera className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gold-500">Create</span> Your Event?
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Let us transform your vision into an unforgettable experience with our premium event management services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors text-lg"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-colors text-lg"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}