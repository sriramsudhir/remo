import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - BGRemoval.in',
  description: 'Privacy policy and data handling practices for BGRemoval.in',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <div className="space-y-4">
            <p>At BGRemoval.in, we collect:</p>
            <ul className="list-disc pl-6">
              <li>Images you upload for processing</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
              <li>IP addresses and location data</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To provide and improve our background removal service</li>
            <li>To personalize your experience</li>
            <li>To analyze usage patterns and optimize performance</li>
            <li>To communicate with you about service updates</li>
            <li>To prevent fraud and abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
          <ul className="list-disc pl-6">
            <li>All data is encrypted in transit and at rest</li>
            <li>We use industry-standard security measures</li>
            <li>Regular security audits and updates</li>
            <li>Limited employee access to personal data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Advertising and Analytics</h2>
          <p>We use Google AdSense to display advertisements:</p>
          <ul className="list-disc pl-6">
            <li>Third-party vendors, including Google, use cookies to serve ads based on prior visits</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site</li>
            <li>You may opt out of personalized advertising by visiting Google's Ads Settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Control cookie preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>For privacy-related inquiries, contact us at:</p>
          <p>Email: privacy@bgremoval.in</p>
        </section>
      </div>
    </main>
  );
}