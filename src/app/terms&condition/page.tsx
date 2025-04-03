import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-700 mb-6">
          **Last Updated:** [2025-03-04]
        </p>

        <p className="mb-4">
          Welcome to Joopa Digital. By accessing or using our website and
          services, you agree to be bound by these Terms and Conditions. If you
          do not agree, please refrain from using our services.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Use of Services</h2>
        <p className="mb-4">
          You agree to use Joopa Digital’s services only for lawful purposes
          and in accordance with these terms. Any unauthorized or illegal use
          may result in termination of service.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. Account Registration</h2>
        <p className="mb-4">
          To access certain services, you may be required to create an account.
          You must provide accurate and complete information and keep your login
          credentials secure.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. Payments and Refunds</h2>
        <ul className="list-disc list-inside mb-4">
          <li>All payments for our services must be made in accordance with our pricing and billing policies.</li>
          <li>Refunds, if applicable, will be processed as per our refund policy.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">4. Intellectual Property Rights</h2>
        <p className="mb-4">
          All content, trademarks, logos, and materials on our platform are
          owned by or licensed to Joopa Digital. Unauthorized use of our
          intellectual property is prohibited.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Joopa Digital is not liable for any direct, indirect, or
          consequential damages resulting from your use of our services.
        </p>

        <h2 className="text-2xl font-bold mb-2">6. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access to our
          services at any time for violating these terms.
        </p>

        <h2 className="text-2xl font-bold mb-2">7. Governing Law</h2>
        <p className="mb-4">
          These Terms & Conditions are governed by the laws of [Your
          Country/State]. Any disputes will be resolved in the appropriate legal
          jurisdiction.
        </p>

        <h2 className="text-2xl font-bold mb-2">8. Contact Us</h2>
        <p className="mb-4">
          For any questions regarding our Privacy Policy or Terms & Conditions,
          please contact us at [Your Email/Address].
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;