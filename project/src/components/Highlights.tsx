import React, { useState, useEffect } from 'react';
import { Clock, TrendingDown, DollarSign, CheckCircle } from 'lucide-react';
import { achievements } from '../data/portfolio';

const iconMap = {
  Clock,
  TrendingDown,
  DollarSign,
  CheckCircle
};

export const Highlights: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('highlights');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Impact & Results
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Measurable improvements delivered through DevOps excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 mx-auto">
                  <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {achievement.metric}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};