import React from 'react';
import { Download, ExternalLink, Linkedin as LinkedIn, Github } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume & Links
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download my resume or connect with me on professional platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Download */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Download Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get a comprehensive overview of my experience, skills, and achievements in DevOps and cloud engineering.
            </p>
            <a
              href="/Tejavardhan_Reddy_Chilkur_Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download PDF
            </a>
          </div>

          {/* Professional Links */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Professional Links
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/tejareddyyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <LinkedIn className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">LinkedIn Profile</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professional network & endorsements</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={16} />
              </a>

              <a
                href="https://github.com/tejavardhann"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-gray-900 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                  <Github className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">GitHub Repositories</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">DevOps projects & contributions</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={16} />
              </a>
            </div>

            {/* Certifications */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Microsoft Azure Data Engineer Associate</span>
                  <a
                    href="https://learn.microsoft.com/en-us/users/tejavardhanreddychilkur-5644/credentials/c1774b720fb32f77?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  AWS Certified Solutions Architect
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
          <div className="max-w-md mx-auto">
            <p className="font-medium text-gray-900 dark:text-white">Master of Science in Computer Science</p>
            <p className="text-blue-600 dark:text-blue-400 font-medium">University of Memphis</p>
            <p className="text-gray-500 dark:text-gray-400">Jan 2023 – Dec 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};