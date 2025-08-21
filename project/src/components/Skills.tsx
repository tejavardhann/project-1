import React from 'react';
import { Cloud, Cog, GitBranch, Container, Database, BarChart3, Shield } from 'lucide-react';
import { skillCategories } from '../data/portfolio';

const categoryIcons = {
  'Cloud Platforms': Cloud,
  'Infrastructure & Automation': Cog,
  'CI/CD & DevOps': GitBranch,
  'Containers & Orchestration': Container,
  'Databases & Storage': Database,
  'Monitoring & Observability': BarChart3,
  'Security & Compliance': Shield
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive DevOps and cloud engineering skillset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons];
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                    <IconComponent className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};