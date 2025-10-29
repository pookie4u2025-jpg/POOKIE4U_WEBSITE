import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, MessageCircle, FileQuestion, Shield, Gift, Calendar } from 'lucide-react';

function HelpCenter() {
  const helpTopics = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn how to set up your account and add your first reminders",
      articles: [
        "Creating your Pookie4U account",
        "Setting up important dates",
        "Understanding the dashboard",
        "Customizing your profile"
      ]
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Using the Gift Finder",
      description: "Master the AI-powered gift finder to find perfect presents",
      articles: [
        "How the AI gift finder works",
        "Filtering gifts by budget",
        "Saving favorite gift ideas",
        "Purchase tracking"
      ]
    },
    {
      icon: <FileQuestion className="w-8 h-8" />,
      title: "Tasks & Points",
      description: "Everything about completing tasks and earning rewards",
      articles: [
        "How to earn points",
        "Types of daily tasks",
        "Tracking your progress",
        "Leveling up your account"
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Pre-Written Messages",
      description: "Using and customizing message templates",
      articles: [
        "Accessing message templates",
        "Customizing messages",
        "Creating your own templates",
        "Sending scheduled messages"
      ]
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Rewards & Redemption",
      description: "Learn how to redeem your hard-earned points",
      articles: [
        "Reward redemption process",
        "Cash vs. gift coupon options",
        "Redemption timeline",
        "Tracking reward status"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description: "Protecting your account and personal information",
      articles: [
        "Account security best practices",
        "Data privacy settings",
        "Two-factor authentication",
        "Reporting security issues"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_app-scaffolder/artifacts/w71mdvdn_p4u%20long%20logo.png" 
                alt="Pookie4U" 
                className="h-10 w-auto"
              />
            </Link>
            <Link to="/" className="flex items-center gap-2 hover:text-pink-400 transition">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-gray-400 text-xl">Browse our comprehensive guides and tutorials</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:border-pink-500 transition"
                data-testid="help-search-input"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-300">
                Search
              </button>
            </div>
          </div>

          {/* Help Topics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpTopics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition"
                data-testid={`help-topic-${index}`}
              >
                <div className="text-pink-400 mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-gray-400 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-pink-400 transition flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-16 bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg mb-6">Our support team is available 24/7 to assist you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/faq" 
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                data-testid="view-faq-button"
              >
                View FAQ
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition"
                data-testid="contact-support-button"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;