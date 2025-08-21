import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { chatbotQA } from '../data/portfolio';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([
    { type: 'bot', content: "Hi! I'm Tejavardhan's portfolio assistant. Ask me about his education, experience, skills, or how to contact him!" }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    for (const qa of chatbotQA) {
      if (lowerQuestion.includes(qa.question.toLowerCase().replace(/[?'"]/g, ''))) {
        return qa.answer;
      }
    }
    
    // Fallback response
    return "I'm Tejavardhan's portfolio bot — I can answer questions about his education, experience, skills, and contact info. Try asking 'What's your experience?' or 'How can I contact you?'";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    const botResponse = findAnswer(userMessage);

    setMessages(prev => [
      ...prev,
      { type: 'user', content: userMessage },
      { type: 'bot', content: botResponse }
    ]);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 dark:bg-blue-500 text-white p-4 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle size={20} className="mr-2" />
            <span className="font-medium">Ask About Me 💬</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 dark:hover:bg-blue-600 p-1 rounded"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};