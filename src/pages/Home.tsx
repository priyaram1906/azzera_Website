import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Calendar, Award, ArrowRight, Sparkles, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../data/events';
import { useState, useEffect } from 'react';

// Centralized image repository to prevent repetition
const ALL_IMAGES = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
];

// Function to get unique random images
const getUniqueImages = (count: number, usedImages: string[]): string[] => {
  const availableImages = ALL_IMAGES.filter(img => !usedImages.includes(img));
  
  // If we don't have enough unique images, reset the used images list
  if (availableImages.length < count) {
    return ALL_IMAGES.slice(0, count);
  }
  
  // Select random unique images
  const selectedImages: string[] = [];
  while (selectedImages.length < count && availableImages.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    selectedImages.push(availableImages.splice(randomIndex, 1)[0]);
  }
  
  return selectedImages;
};

// Define props interface for HeroCarousel
interface HeroCarouselProps {
  images: string[];
  onReplaceImage: (oldImage: string) => void;
}

// Updated HeroCarousel component with proper typing
function HeroCarousel({ images, onReplaceImage }: HeroCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Event ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Event Management</h1>
          <p className="text-xl md:text-2xl mb-8">Creating unforgettable experiences</p>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors text-lg"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-gold-500 scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Refresh button */}
      <button 
        onClick={() => onReplaceImage(images[currentImageIndex])} 
        className="absolute bottom-8 right-8 z-30 bg-gold-500 p-3 rounded-full hover:bg-gold-600 transition-colors"
        title="Change image"
      >
        <RefreshCw className="w-5 h-5" />
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-1 h-16 bg-gold-500 mx-2"></div>
          <div className="w-1 h-16 bg-gold-500 mx-2 animate-pulse delay-100"></div>
          <div className="w-1 h-16 bg-gold-500 mx-2 animate-pulse delay-200"></div>
        </motion.div>
      </div>
    </div>
  );
}

export function Home() {
  const { t } = useTranslation();
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [usedImages, setUsedImages] = useState<string[]>([]);

  // Initialize images on component mount
  useEffect(() => {
    const initialCarouselImages = getUniqueImages(4, []);
    setCarouselImages(initialCarouselImages);
    setUsedImages(initialCarouselImages);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Calendar, value: '1000+', label: 'Events Managed' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: CheckCircle, value: '100%', label: 'Success Rate' }
  ];

  // Function to replace an image in the carousel
  const replaceImage = (oldImage: string) => {
    const newImage = getUniqueImages(1, usedImages)[0];
    setCarouselImages(prev => prev.map(img => img === oldImage ? newImage : img));
    setUsedImages(prev => [...prev, newImage]);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Carousel - Now contains everything in one component */}
      <HeroCarousel images={carouselImages} onReplaceImage={replaceImage} />

      {/* About Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-gold-500 mr-4"></div>
                <span className="text-gold-500 uppercase tracking-wider font-semibold">{t('home.aboutSubtitle')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                {t('home.aboutTitle')}
                <span className="text-gold-500">.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {t('home.aboutText')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold-500 hover:bg-gold-500/10 text-gold-500 font-semibold rounded-lg transition-all duration-300 group"
              >
                {t('common.learnMore')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold-500/30 rounded-2xl rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Premium event management setup"
                className="rounded-2xl relative z-10 w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 -left-6 z-20 bg-gold-500 text-black px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold">Since 2010</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-900 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/10 rounded-full mb-4 border border-gold-500/20">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-gold-500 mb-2">{stat.value}</h3>
                  <p className="text-gray-300 uppercase text-sm tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-500/5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold-500/30 rounded-2xl -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional event planning"
                className="rounded-2xl relative z-10 w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-gold-500 mr-4"></div>
                <span className="text-gold-500 uppercase tracking-wider font-semibold">Our Excellence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                {t('home.whyChooseTitle')}
                <span className="text-gold-500">.</span>
              </h2>
              <div className="space-y-6 ">
                {(t('home.whyChooseItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-7 h-7 bg-gold-500/10 rounded-full flex items-center justify-center mt-0">
                      <CheckCircle className="w-5 h-5 text-gold-500" />
                    </div>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
          <Sparkles className="absolute top-20 left-1/4 text-gold-500/30 w-8 h-8" />
          <Sparkles className="absolute bottom-40 right-1/3 text-gold-500/40 w-6 h-6" />
          <Sparkles className="absolute top-1/2 left-1/3 text-gold-500/20 w-10 h-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-0.5 bg-gold-500 mr-4"></div>
              <span className="text-gold-500 uppercase tracking-wider font-semibold">Our Portfolio</span>
              <div className="w-16 h-0.5 bg-gold-500 ml-4"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Recent <span className="text-gold-500">Events</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              A glimpse into our latest successful events and celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 6).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gold-500/10 hover:border-gold-500/30 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 rounded-lg text-sm font-semibold">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gold-500/10">
                    <span>{event.location}</span>
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold rounded-lg transition-all duration-300 group"
            >
              {t('common.viewGallery')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gold-500">Elevate</span> Your Next Event?
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