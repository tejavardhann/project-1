import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin as LinkedIn, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('reddytejavardhan@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ready to discuss DevOps opportunities or collaborate on cloud projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <button
                      onClick={copyEmail}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
                    >
                      reddytejavardhan@gmail.com
                      {emailCopied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a 
                      href="tel:+19016452738"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      +1 (901) 645-2738
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Remote, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/tejareddyyy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <LinkedIn className="mr-2" size={18} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/tejavardhann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github className="mr-2" size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                ) : (
                  <Send className="mr-2" size={20} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-center">
                    Thanks for your message! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};