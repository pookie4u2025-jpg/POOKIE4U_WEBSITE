import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 text-xl">We're here to help! Send us a message and we'll respond as soon as possible.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:POOKIE4U2025@GMAIL.COM" className="text-pink-400 hover:text-pink-300 transition">
                      POOKIE4U2025@GMAIL.COM
                    </a>
                    <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                  <h3 className="font-semibold mb-4">Other Ways to Get Help</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/faq" className="text-pink-400 hover:text-pink-300 transition flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                        Browse FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/help" className="text-pink-400 hover:text-pink-300 transition flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                        Visit Help Center
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/pookie4u_app/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                        Follow us on Instagram
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-6">
                  <h3 className="font-bold mb-2">Support Hours</h3>
                  <p className="text-sm">Monday - Friday: 9 AM - 6 PM EST</p>
                  <p className="text-sm">Saturday - Sunday: 10 AM - 4 PM EST</p>
                  <p className="text-xs mt-2 opacity-80">Email support available 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center" data-testid="success-message">
                  <div className="text-green-400 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500 transition"
                      placeholder="John Doe"
                      data-testid="name-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500 transition"
                      placeholder="john@example.com"
                      data-testid="email-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500 transition"
                      placeholder="How can we help?"
                      data-testid="subject-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500 transition resize-none"
                      placeholder="Tell us more about your question or concern..."
                      data-testid="message-input"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                    data-testid="submit-button"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;