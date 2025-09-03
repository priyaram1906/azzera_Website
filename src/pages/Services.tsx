import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Heart, Users, Crown, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  'Building2': Building2,
  'Heart': Heart,
  'Users': Users,
  'Crown': Crown
};

export function Services() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="w-16 h-16 bg-golden-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-golden-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-golden-500 to-golden-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your vision and bring it to life with our expertise
            </p>
            <button className="px-8 py-4 bg-white text-golden-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              {t('common.getQuote')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}