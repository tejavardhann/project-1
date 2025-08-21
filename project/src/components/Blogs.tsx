import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

export const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sharing insights on DevOps, cloud architecture, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Clock size={16} className="mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Read More
                <ExternalLink className="ml-1" size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://medium.com/@reddytejvardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200"
          >
            View All on Medium
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};