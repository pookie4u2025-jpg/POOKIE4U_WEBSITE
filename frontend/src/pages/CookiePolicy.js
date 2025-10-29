import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CookiePolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 29, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your device when you use our app or website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
              <p className="mb-4">These cookies are necessary for the app to function properly. They enable basic features like:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>User authentication and security</li>
                <li>Session management</li>
                <li>Load balancing</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Performance Cookies</h3>
              <p className="mb-4">These cookies help us understand how users interact with our app:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Page visit statistics</li>
                <li>Feature usage tracking</li>
                <li>Error reporting</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
              <p className="mb-4">These cookies enable enhanced functionality:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Remembering your preferences</li>
                <li>Saving your progress and points</li>
                <li>Personalizing your experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Advertising Cookies</h3>
              <p className="mb-4">These cookies are used to show you relevant advertisements:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Targeted advertising</li>
                <li>Campaign performance measurement</li>
                <li>Limiting ad frequency</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
              <p className="mb-2">We may use third-party services that set cookies on your device:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Analytics:</strong> Google Analytics to understand user behavior</li>
                <li><strong>Advertising:</strong> Facebook Pixel, Google Ads for marketing</li>
                <li><strong>Payment Processing:</strong> For secure transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. How Long Do Cookies Last?</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Session Cookies</h3>
              <p className="mb-4">These are temporary cookies that expire when you close the app or browser.</p>
              
              <h3 className="text-xl font-semibold text-white mb-2">Persistent Cookies</h3>
              <p>These remain on your device for a set period (usually 30-365 days) or until you delete them manually.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Cookies</h2>
              <p className="mb-2">You can control cookies in several ways:</p>
              
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">In the App</h3>
              <p className="mb-4">Go to Settings → Privacy → Cookie Preferences to manage your cookie settings.</p>
              
              <h3 className="text-xl font-semibold text-white mb-2">In Your Browser</h3>
              <p className="mb-2">Most browsers allow you to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies (may affect functionality)</li>
                <li>Clear cookies when closing the browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Do Not Track Signals</h2>
              <p>We currently do not respond to Do Not Track (DNT) signals. However, you can still manage cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. The "Last Updated" date at the top indicates when changes were last made.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us at:</p>
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

export default CookiePolicy;