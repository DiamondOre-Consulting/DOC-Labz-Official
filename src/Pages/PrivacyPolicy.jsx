import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-700">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="mb-4 leading-relaxed">
              Doc Labz ("we", "our", or "us") is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="mb-4 leading-relaxed">
              We may collect personal and usage information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Demographic and location data</li>
              <li>Professional or institutional affiliation</li>
              <li>Usage patterns and IP address</li>
              <li>Technical information about your device and browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">
              The information we collect helps us to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Deliver and improve our services</li>
              <li>Respond to inquiries and provide support</li>
              <li>Communicate important updates and offers</li>
              <li>Analyze user behavior for better experiences</li>
              <li>Comply with regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="mb-4 leading-relaxed">
              We implement strong security measures to protect your data from unauthorized access, alteration, or disclosure. However, no system can guarantee 100% security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="mb-4 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. You may disable cookies in your browser settings, though some features may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Disclosure</h2>
            <p className="mb-4 leading-relaxed">
              We do not sell or trade your personal data. We may share limited data with trusted partners and service providers who assist us in operating our website and services, under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="mb-4 leading-relaxed">
              You may exercise the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Request access to your data</li>
              <li>Ask for corrections or deletion</li>
              <li>Restrict or object to data processing</li>
              <li>Withdraw your consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:tech@doclabz.com" className="text-blue-600 hover:underline">
              tech@doclabz.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
