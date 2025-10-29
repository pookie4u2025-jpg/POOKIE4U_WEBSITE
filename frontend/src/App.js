import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Mail, Instagram, Heart, Gift, MessageCircle, Trophy, Calendar, ArrowRight } from 'lucide-react';

// Import pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import Contact from './pages/Contact';

function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for signing up! We\'ll notify you when the app launches.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_app-scaffolder/artifacts/w71mdvdn_p4u%20long%20logo.png" 
                alt="Pookie4U" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-pink-400 transition">Features</a>
              <a href="#how-it-works" className="hover:text-pink-400 transition">How It Works</a>
              <a href="#rewards" className="hover:text-pink-400 transition">Rewards</a>
              <a href="#testimonials" className="hover:text-pink-400 transition">Stories</a>
              <a href="#download" className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full transition">Download</a>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://customer-assets.emergentagent.com/job_app-scaffolder/artifacts/13hnann7_HOME%20PAGE3.png')",
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Never forget what matters.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Be the boyfriend she brags about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#download" 
              className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center gap-2"
              data-testid="hero-download-button"
            >
              Download Now <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#how-it-works" 
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition"
              data-testid="hero-learn-more-button"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-gray-900" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center" data-testid="step-1">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray-400 text-lg">
                Create your account and tell us about your relationship—anniversaries, her birthday, and preferences.
              </p>
            </div>
            <div className="text-center" data-testid="step-2">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Reminders & Tasks</h3>
              <p className="text-gray-400 text-lg">
                Receive smart reminders for important dates and complete fun daily or weekly relationship tasks.
              </p>
            </div>
            <div className="text-center" data-testid="step-3">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-gray-400 text-lg">
                Track your progress, level up, and earn points. Redeem 1000 points for real cash or gift coupons!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition" data-testid="feature-reminders">
              <Calendar className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Smart Reminders</h3>
              <p className="text-gray-400">
                Never miss an anniversary, birthday, or special occasion. Get timely notifications so you're always prepared.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition" data-testid="feature-gift-finder">
              <Gift className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI-Powered Gift Finder</h3>
              <p className="text-gray-400">
                Find the perfect gift with our AI assistant. Filter by occasion, budget, or product type—no more guessing!
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition" data-testid="feature-tasks">
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Daily & Weekly Tasks</h3>
              <p className="text-gray-400">
                Complete fun relationship tasks, track your progress with points, and level up as you become a better partner.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition" data-testid="feature-messages">
              <MessageCircle className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Pre-Written Messages</h3>
              <p className="text-gray-400">
                Romantic, funny, or apology messages for every mood. Never struggle with what to say again.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition" data-testid="feature-rewards">
              <Trophy className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Points & Rewards System</h3>
              <p className="text-gray-400">
                Earn points for every completed task. Reach 1000 points to redeem real prizes—cash or gift coupons!
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition" data-testid="feature-coach">
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Personal Relationship Coach</h3>
              <p className="text-gray-400">
                Get personalized tips and guidance to help you grow as a partner and strengthen your relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-20 bg-gradient-to-b from-gray-900 to-black" data-testid="rewards-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Earn Real Rewards</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete tasks, level up, and earn points that you can redeem for actual prizes. Being a great boyfriend pays off!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-8 text-center" data-testid="reward-bronze">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Bronze Level</h3>
              <p className="text-4xl font-bold mb-4">0-300 pts</p>
              <p>Unlock exclusive tips and starter rewards</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-8 text-center transform scale-105" data-testid="reward-silver">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Silver Level</h3>
              <p className="text-4xl font-bold mb-4">301-700 pts</p>
              <p>Get premium message templates and bonus tasks</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-8 text-center" data-testid="reward-gold">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Gold Level</h3>
              <p className="text-4xl font-bold mb-4">1000+ pts</p>
              <p className="font-bold">Redeem for cash or gift coupons!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden" data-testid="testimonial-1">
              <div className="h-64 bg-gradient-to-br from-pink-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Marcus & Jessica</h3>
                <p className="text-gray-400 mb-4">
                  "I used to forget our anniversary every year. Pookie4U saved my relationship! Now Jessica says I'm the most thoughtful boyfriend ever."
                </p>
                <button className="text-pink-500 hover:text-pink-400 transition flex items-center gap-2" data-testid="read-more-1">
                  Continue reading <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl overflow-hidden" data-testid="testimonial-2">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">David & Emma</h3>
                <p className="text-gray-400 mb-4">
                  "The gift finder is a game-changer. I found the perfect birthday gift for Emma in minutes. The AI really understands what women want!"
                </p>
                <button className="text-pink-500 hover:text-pink-400 transition flex items-center gap-2" data-testid="read-more-2">
                  Continue reading <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl overflow-hidden" data-testid="testimonial-3">
              <div className="h-64 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ryan & Sophia</h3>
                <p className="text-gray-400 mb-4">
                  "The daily tasks are actually fun! I've earned 850 points so far and our relationship has never been better. Can't wait to hit 1000!"
                </p>
                <button className="text-pink-500 hover:text-pink-400 transition flex items-center gap-2" data-testid="read-more-3">
                  Continue reading <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-b from-black to-pink-900" data-testid="download-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get the app!</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of men who are leveling up their relationships. Download Pookie4U now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#" 
              className="bg-black hover:bg-gray-900 px-6 py-4 rounded-xl flex items-center gap-3 transition"
              data-testid="download-app-store"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
                <div className="text-xs text-gray-400">Coming Soon</div>
              </div>
            </a>
            <a 
              href="#" 
              className="bg-black hover:bg-gray-900 px-6 py-4 rounded-xl flex items-center gap-3 transition"
              data-testid="download-google-play"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-bold">Google Play</div>
                <div className="text-xs text-gray-400">Coming Soon</div>
              </div>
            </a>
          </div>
          <div className="border-t border-gray-700 pt-12">
            <p className="text-lg mb-4">Want early access? Join our waitlist!</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4" data-testid="waitlist-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 focus:outline-none focus:border-pink-500 transition"
                data-testid="email-input"
              />
              <button 
                type="submit" 
                className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-semibold transition"
                data-testid="submit-button"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_app-scaffolder/artifacts/w71mdvdn_p4u%20long%20logo.png" 
                alt="Pookie4U" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Be the boyfriend she brags about.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-pink-400 transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-pink-400 transition">Terms & Conditions</Link></li>
                <li><Link to="/cookies" className="hover:text-pink-400 transition">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/faq" className="hover:text-pink-400 transition">FAQ</Link></li>
                <li><Link to="/help" className="hover:text-pink-400 transition">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-pink-400 transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a href="https://www.instagram.com/pookie4u_app/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition" data-testid="instagram-link">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:POOKIE4U2025@GMAIL.COM" className="hover:text-pink-400 transition">
                  POOKIE4U2025@GMAIL.COM
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Pookie4U. All rights reserved. Made with ❤️ for better relationships.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;