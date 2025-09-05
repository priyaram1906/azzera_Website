import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Heart, Award, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '1000+', label: 'Events Managed' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-500/20 backdrop-blur-md rounded-full mb-6 border border-gold-500/30">
              <Heart className="w-10 h-10 text-gold-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {t('about.title') || 'Our Story'}
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Crafting extraordinary experiences with passion, precision, and unmatched attention to detail since our founding.
            </p>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/10 rounded-full mb-4 border border-gold-500/20">
                      <Icon className="w-8 h-8 text-gold-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-gold-500 mb-2">{stat.value}</h3>
                    <p className="text-gray-300 uppercase text-sm tracking-wider">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-0.5 bg-gold-500 mr-4"></div>
              <span className="text-gold-500 uppercase tracking-wider font-semibold">Our Purpose</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {t('about.mission') || 'Our Mission'}
              <span className="text-gold-500">.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.missionText') ||
                'To deliver unforgettable events with innovation, creativity, and dedication, ensuring every detail is flawlessly executed.'}
            </p>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold-500 hover:bg-gold-500/10 text-gold-500 font-semibold rounded-lg transition-all duration-300 group"
            >
              Our Services
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
              src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mission"
              className="rounded-2xl relative z-10 w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 z-20 bg-gold-500 text-black px-6 py-3 rounded-lg shadow-lg">
              <span className="font-bold">Since 2010</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
          <Sparkles className="absolute top-20 right-1/4 text-gold-500/30 w-8 h-8" />
          <Sparkles className="absolute bottom-40 left-1/3 text-gold-500/40 w-6 h-6" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 border-2 border-gold-500/30 rounded-2xl -rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Vision"
              className="rounded-2xl relative z-10 w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-0.5 bg-gold-500 mr-4"></div>
              <span className="text-gold-500 uppercase tracking-wider font-semibold">Future Focus</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {t('about.vision') || 'Our Vision'}
              <span className="text-gold-500">.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.visionText') ||
                'To be the most trusted partner in event management, recognized for transforming ideas into breathtaking realities.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-0.5 bg-gold-500 mr-4"></div>
              <span className="text-gold-500 uppercase tracking-wider font-semibold">Our Foundation</span>
              <div className="w-16 h-0.5 bg-gold-500 ml-4"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Core <span className="text-gold-500">Values</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              We uphold values that guide every project we take on, ensuring integrity, creativity, and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(t('about.valuesItems', { returnObjects: true }) as string[] || [
              'Integrity in every step',
              'Creativity that inspires',
              'Commitment to excellence',
              'Client-first approach',
              'Teamwork and collaboration',
              'Sustainable practices'
            ]).map((value: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-5 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 flex items-start space-x-4 group hover:bg-gray-800/50"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gold-500/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                </div>
                <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{value}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors text-lg group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}