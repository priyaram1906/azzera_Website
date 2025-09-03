import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Standardized with other pages */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-500/20 backdrop-blur-md rounded-full mb-6 border border-gold-500/30">
              <Mail className="w-10 h-10 text-gold-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {t('contact.title') || 'Contact Us'}
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle') || 'Get in touch with us to start planning your extraordinary event'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
          <Sparkles className="absolute top-20 left-1/4 text-gold-500/20 w-8 h-8" />
          <Sparkles className="absolute bottom-40 right-1/3 text-gold-500/30 w-6 h-6" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gold-500/20">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.name') || 'Full Name'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.email') || 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.phone') || 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.eventType') || 'Event Type'}
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-gray-800">Select Event Type</option>
                        <option value="corporate" className="bg-gray-800">Corporate Event</option>
                        <option value="wedding" className="bg-gray-800">Wedding</option>
                        <option value="social" className="bg-gray-800">Social Event</option>
                        <option value="gala" className="bg-gray-800">Luxury Gala</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.eventDate') || 'Event Date'}
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.guests') || 'Number of Guests'}
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      >
                        <option value="" className="bg-gray-800">Select Number of Guests</option>
                        <option value="10-50" className="bg-gray-800">10-50</option>
                        <option value="50-100" className="bg-gray-800">50-100</option>
                        <option value="100-300" className="bg-gray-800">100-300</option>
                        <option value="300+" className="bg-gray-800">300+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.message') || 'Message'}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-400"
                      placeholder="Tell us about your event vision..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2 text-lg group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>{t('contact.form.submit') || 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info - Removed Quick Links section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gold-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-500/30">
                      <MapPin className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Address</h4>
                      <p className="text-gray-400 text-sm mt-1">123 Luxury Avenue<br />Premium District, City 10001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-500/30">
                      <Phone className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-gray-400 text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-500/30">
                      <Mail className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-gray-400 text-sm mt-1">info@premiumevents.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-500/30">
                      <Clock className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Hours</h4>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Let us transform your vision into an unforgettable experience with our premium event management services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+15551234567" className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors text-lg">
                Call Now
              </a>
              <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-colors text-lg">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}