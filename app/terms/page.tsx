import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - BGRemoval.in',
  description: 'Terms of service and usage guidelines for BGRemoval.in',
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using BGRemoval.in ("Service"), you agree to comply with and be bound by these Terms of Service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Google Ads Compliance</h2>
          <p>Our service complies with Google Ads policies, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>No misleading content or claims</li>
            <li>Clear disclosure of paid advertising</li>
            <li>Respect for intellectual property rights</li>
            <li>No prohibited content or restricted content violations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Privacy and Data Usage</h2>
          <p>We respect your privacy and handle data in accordance with our Privacy Policy and applicable laws:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Data collection is transparent and consensual</li>
            <li>We use industry-standard security measures</li>
            <li>No sharing of personal data with third parties without consent</li>
            <li>Users retain rights to their uploaded content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Service Usage</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Free tier limitations apply</li>
            <li>Fair usage policy enforced</li>
            <li>No automated scraping or bulk processing without permission</li>
            <li>Service availability not guaranteed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Content Guidelines</h2>
          <p>Users must not upload or process:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Copyrighted material without permission</li>
            <li>Adult or explicit content</li>
            <li>Harmful or malicious content</li>
            <li>Content that violates third-party rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Liability and Disclaimers</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Service provided "as is" without warranties</li>
            <li>No liability for data loss or service interruptions</li>
            <li>Users responsible for maintaining image backups</li>
            <li>Right to modify or terminate service reserved</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>For questions about these terms, contact us at support@bgremoval.in</p>
        </section>
      </div>
    </main>
  );
}