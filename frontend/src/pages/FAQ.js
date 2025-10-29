import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Pookie4U?",
      answer: "Pookie4U is a relationship improvement and gifting assistant app designed for men. It helps you remember important dates, plan surprises, track relationship growth, and complete fun tasks to become a better partner."
    },
    {
      question: "How does the points system work?",
      answer: "You earn points by completing daily and weekly relationship tasks in the app. Once you reach 1000 points, you can redeem them for real rewards including cash or gift coupons. Points are tracked in your profile and you can see your progress at any time."
    },
    {
      question: "What kind of tasks will I complete?",
      answer: "Tasks range from simple reminders to send a sweet message, planning a date night, surprising your partner with breakfast, to more creative challenges. Each task is designed to strengthen your relationship and help you be more thoughtful."
    },
    {
      question: "How does the AI gift finder work?",
      answer: "Our AI-powered gift finder asks about the occasion, your budget, and your partner's preferences. It then suggests personalized gift ideas that match your criteria. You can filter by category, price range, and occasion to find the perfect gift."
    },
    {
      question: "Are the pre-written messages customizable?",
      answer: "Yes! We provide templates for romantic, funny, and apology messages that you can use as-is or customize to add your personal touch. The messages are categorized by mood and situation."
    },
    {
      question: "How do I redeem my rewards?",
      answer: "Once you reach 1000 points, go to the Rewards section in your profile. Choose between cash transfer to your account or gift coupons from popular retailers. Follow the redemption steps, and your reward will be processed within 3-5 business days."
    },
    {
      question: "Can I set up reminders for multiple occasions?",
      answer: "Absolutely! You can add unlimited reminders for anniversaries, birthdays, special dates, and even custom events. The app will notify you in advance so you never forget what matters."
    },
    {
      question: "Is my relationship information private?",
      answer: "Yes, your privacy is our top priority. All your relationship data, task history, and personal information are encrypted and never shared with third parties without your consent. See our Privacy Policy for more details."
    },
    {
      question: "What happens if I miss a task?",
      answer: "Missing a task won't penalize you, but you won't earn points for that specific task. Some tasks may be available again later, while others are time-sensitive. Focus on consistency to maximize your points!"
    },
    {
      question: "Is there a subscription fee?",
      answer: "Pookie4U offers both free and premium tiers. The free version includes basic reminders and tasks. Premium unlocks the AI gift finder, unlimited pre-written messages, priority support, and bonus point opportunities. Check the app for current pricing."
    },
    {
      question: "Can I use Pookie4U for any type of relationship?",
      answer: "While Pookie4U is designed primarily for romantic relationships, you can adapt it for any relationship where you want to be more thoughtful and consistent—whether it's your partner, spouse, or long-distance relationship."
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account anytime from Settings → Account → Delete Account. Please note that once deleted, all your data, points, and progress will be permanently removed and cannot be recovered."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 mb-12">Find answers to common questions about Pookie4U</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-800 transition"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-800/50 text-gray-300" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6">Can't find the answer you're looking for? Our support team is here to help.</p>
            <Link 
              to="/contact" 
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
              data-testid="contact-support-button"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;