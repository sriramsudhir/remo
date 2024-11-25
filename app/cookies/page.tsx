import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - BGRemoval.in',
  description: 'Cookie usage and management policy for BGRemoval.in',
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by:</p>
          <ul className="list-disc pl-6">
            <li>Remembering your preferences</li>
            <li>Understanding how you use our site</li>
            <li>Improving site performance</li>
            <li>Enabling certain functionalities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Essential Cookies</h3>
            <p>Required for the website to function properly. Cannot be disabled.</p>
            
            <h3 className="text-xl font-medium">Performance Cookies</h3>
            <p>Help us understand how visitors interact with our website.</p>
            
            <h3 className="text-xl font-medium">Functionality Cookies</h3>
            <p>Remember your preferences and settings.</p>
            
            <h3 className="text-xl font-medium">Advertising Cookies</h3>
            <p>Used to deliver relevant advertisements and track ad campaign performance.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Google AdSense</h2>
          <p>We use Google AdSense advertising cookies to:</p>
          <ul className="list-disc pl-6">
            <li>Serve personalized advertisements</li>
            <li>Limit ad repetition</li>
            <li>Measure ad performance</li>
            <li>Understand user preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p>You can control cookies through your browser settings:</p>
          <ul className="list-disc pl-6">
            <li>Block all cookies</li>
            <li>Delete existing cookies</li>
            <li>Allow only essential cookies</li>
            <li>Set preferences for specific websites</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
          <p>We may update this Cookie Policy periodically. Check back regularly for changes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>For questions about our Cookie Policy, contact:</p>
          <p>Email: privacy@bgremoval.in</p>
        </section>
      </div>
    </main>
  );
}