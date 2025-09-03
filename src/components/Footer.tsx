import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-golden-500 to-golden-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Azzera Events</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating extraordinary experiences with precision, elegance, and unmatched attention to detail.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-golden-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['home', 'about', 'services', 'gallery', 'contact'].map((key) => (
                <Link
                  key={key}
                  to={key === 'home' ? '/' : `/${key}`}
                  className="block text-gray-400 hover:text-golden-500 transition-colors text-sm"
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Corporate Events</p>
              <p>Wedding Planning</p>
              <p>Social Gatherings</p>
              <p>Luxury Galas</p>
              <p>Event Consultation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 mt-1 text-golden-500 flex-shrink-0" />
                <p>{t('contact.info.address')}</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-golden-500 flex-shrink-0" />
                <p>{t('contact.info.phone')}</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-golden-500 flex-shrink-0" />
                <p>{t('contact.info.email')}</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Clock className="w-4 h-4 text-golden-500 flex-shrink-0" />
                <p>{t('contact.info.hours')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Azzera Events. All rights reserved.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse text-sm text-gray-400">
              <Link to="#" className="hover:text-golden-500 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-golden-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}