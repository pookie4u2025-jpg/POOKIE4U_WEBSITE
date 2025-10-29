import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 29, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using Pookie4U, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. User Account</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Account Creation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must be at least 18 years old to create an account</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must not share your account with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Points and Rewards System</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Earning Points</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Points are earned by completing tasks and activities in the app</li>
                <li>Point values may change at our discretion</li>
                <li>Points have no cash value until redeemed</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Redeeming Rewards</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Rewards can be redeemed once you reach 1000 points</li>
                <li>Reward options include cash or gift coupons</li>
                <li>We reserve the right to verify point legitimacy before redemption</li>
                <li>Fraudulent activity will result in account termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the app for any illegal purposes</li>
                <li>Attempt to manipulate the points system</li>
                <li>Create multiple accounts to earn extra points</li>
                <li>Share inappropriate content or messages</li>
                <li>Harass or harm other users</li>
                <li>Reverse engineer or attempt to hack the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. AI Gift Finder</h2>
              <p>Our AI gift finder provides suggestions based on your inputs. While we strive for accuracy, we do not guarantee that suggested gifts will be perfect for your partner. Final purchase decisions are your responsibility.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links and Services</h2>
              <p>Pookie4U may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p>All content, features, and functionality of Pookie4U are owned by us and are protected by copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
              <p>Pookie4U is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the app.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p>We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use the app will immediately cease.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or in-app notification.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p>For questions about these Terms & Conditions, contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:POOKIE4U2025@GMAIL.COM" className="text-pink-400 hover:text-pink-300">POOKIE4U2025@GMAIL.COM</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;