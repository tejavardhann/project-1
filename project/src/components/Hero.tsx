import React, { useState, useEffect } from 'react';
import { Download, Mail, ExternalLink } from 'lucide-react';
import { techBadges } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "hello, I'm Tejavardhan Chilkur";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            DevOps Engineer
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          shipping reliable, automated cloud platforms
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          3+ years | AWS & Azure | Terraform | Kubernetes | CI/CD | Observability
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/Tejavardhan_Reddy_Chilkur_Resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200"
          >
            <Mail className="mr-2" size={20} />
            Contact Me
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};