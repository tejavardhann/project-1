import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Building and scaling cloud infrastructure at leading technology companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};