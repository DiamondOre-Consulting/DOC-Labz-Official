import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-color1">
          Terms &amp; Conditions
        </h1>

        <p className="mb-6">
          Welcome to DocLabz (
          <a href="https://www.doclabz.com" className="text-blue-600 underline">
            https://www.doclabz.com
          </a>
          ), a digital platform for managing, automating, and securing
          documents. By accessing or using our website or services, you agree to
          be bound by the following Terms &amp; Conditions:
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using this website, you confirm that you are at least
          18 years of age and agree to these Terms. If you do not agree with any
          part of these terms, please do not use the website.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Services</h2>
        <p className="mb-6">
          DocLabz offers tools for digital document creation, storage,
          automation, and workflow management. These may be updated or modified
          at our discretion without prior notice.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <p className="mb-2">You agree to:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Use the website and services only for lawful purposes.</li>
          <li>Maintain confidentiality of your account information.</li>
          <li>
            Not engage in unauthorized access, data scraping, or misuse of
            platform features.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p className="mb-6">
          All content on this site, including but not limited to logos,
          software, text, design, and graphics, is the property of DocLabz or
          its licensors and is protected by copyright and trademark laws.
          Unauthorized use is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          5. Payments &amp; Subscriptions
        </h2>
        <p className="mb-6">
          For premium services, users must subscribe or make payments. All
          prices and payment terms will be clearly mentioned on the platform. No
          refunds are issued unless explicitly stated.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
        <p className="mb-6">
          We reserve the right to suspend or terminate access to any user found
          violating these terms or misusing the platform in any manner.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p className="mb-6">
          DocLabz shall not be held liable for any direct or indirect damages
          resulting from the use or inability to use the services offered.
        </p>

        <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
        <p className="mb-6">
          The site may include links to third-party websites. We are not
          responsible for the content, privacy practices, or accuracy of
          information on such websites.
        </p>

        <h2 className="text-xl font-semibold mb-2">9. Amendments</h2>
        <p className="mb-6">
          We may update these terms from time to time. Continued use of the
          website constitutes acceptance of any changes made.
        </p>

        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p className="mb-6">
          These Terms shall be governed by and interpreted in accordance with
          the laws of India, with jurisdiction in Noida, Uttar Pradesh.
        </p>

        <p className="mb-6">
          For questions regarding these Terms, contact us at{" "}
          <a href="mailto:tech@doclabz.com" className="text-blue-600 underline">
            tech@doclabz.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
