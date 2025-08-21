import React from 'react';
import { skills } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable infrastructure and improving developer experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              DevOps Engineer with 3+ years of experience improving uptime, reliability, and delivery velocity across AWS and Azure cloud platforms. I'm passionate about building scalable infrastructure, implementing secure-by-default pipelines, and delivering measurable impact through automation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My expertise spans from containerized microservices on Kubernetes to comprehensive monitoring solutions with Datadog and ELK Stack. I believe in infrastructure as code, continuous improvement, and sharing knowledge with the DevOps community.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                Remote Work Expert
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                Cloud Architecture
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200">
                Automation Focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};