import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Last Updated: [2025-03-04]</p>
        <p className="mb-4">
          Joopa Digital ("Company," "we," "our," or "us") respects your privacy
          and is committed to protecting it through this Privacy Policy. This
          policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website or use our services. By using
          our services, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Personal identifiers (e.g., name, email, phone number)</li>
          <li>Payment and billing details (for transactional purposes)</li>
          <li>Usage data (e.g., IP address, browser type, pages visited)</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve website functionality and user experience</li>
          <li>Process payments and transactions</li>
          <li>Send promotional and service-related communications</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">3. Data Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell or rent your personal data. However, we may share
          information:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>With third-party service providers for business operations</li>
          <li>To comply with legal requirements</li>
          <li>In case of business transfers (e.g., mergers, acquisitions)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data.
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Access, update, or delete your personal data</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Continued use of our
          services after changes signifies your acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}
