import { Section } from "@/components/resuable_components/Section";

export default function TermsPage() {
  return (
    <div className='py-20'>
      <div className="max-w-5xl mx-auto px-4 pt-14 text-secondary">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Terms & Conditions – Knot Club Delhi</h1>
      <p className="text-sm text-muted mb-8">Last updated: August 1, 2025</p>

      <p className="mb-6">
        Welcome to Knot Club Delhi. These Terms & Conditions govern your access and use of our
        website: <a href="https://knotclubdelhi.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.knotclubdelhi.com</a> and all services
        offered by Knot Club, located in Delhi, India.
      </p>

      <p className="mb-6">
        By using our website, you accept these terms in full. If you do not agree with any part of
        these terms, please do not use the website or services.
      </p>

      {/* Sections */}
      <Section title="1. Website Use" >
        <ul className="list-disc ml-5 space-y-2">
          <li>Using the website to harm or defame any individual or group</li>
          <li>Interfering with the website’s operation or attempting unauthorized access</li>
          <li>Uploading or transmitting viruses, spam, or malicious code</li>
        </ul>
      </Section>

      <Section title="2. Eligibility">
        <p>Our services are intended for individuals aged 18 and above. By using our services, you confirm that you meet this age requirement.</p>
      </Section>

      <Section title="3. Account Registration" >
        <ul className="list-disc ml-5 space-y-2">
          <li>Provide accurate, up-to-date information</li>
          <li>Keep your login credentials secure</li>
          <li>Be responsible for all activities under your account</li>
        </ul>
        <p className="mt-2">Knot Club Delhi is not liable for unauthorized use of your account.</p>
      </Section>

      <Section title="4. Bookings & Events">
        <ul className="list-disc ml-5 space-y-2">
          <li>All bookings are subject to availability</li>
          <li>Payments must be completed as per the event's terms</li>
          <li>No refunds are guaranteed unless specified during booking</li>
          <li>We reserve the right to cancel events for unforeseen reasons</li>
        </ul>
      </Section>

      <Section title="5. Payments & Pricing">
        <p>Prices for services or events are subject to change without notice. We accept payments through trusted third-party gateways like Razorpay or Stripe.</p>
      </Section>

      <Section title="6. Intellectual Property">
        <ul className="list-disc ml-5 space-y-2">
          <li>All content on this website (text, images, videos, logos, designs) is the property of Knot Club Delhi and protected by copyright laws.</li>
          <li>You may not copy, reproduce, or distribute content without permission</li>
          <li>Do not use our brand name or logo without authorization</li>
        </ul>
      </Section>

      <Section title="7. User-Generated Content">
        <ul className="list-disc ml-5 space-y-2">
          <li>You grant Knot Club Delhi the right to use, display, and share it</li>
          <li>Your content must not be offensive, false, or violate any laws</li>
          <li>We reserve the right to remove content without notice</li>
        </ul>
      </Section>

      <Section title="8. Third-Party Links">
        <p>Our site may contain links to external websites. We are not responsible for the content, privacy, or security of those websites.</p>
      </Section>

      <Section title="9. Limitation of Liability">
        <ul className="list-disc ml-5 space-y-2">
          <li>Losses resulting from event cancellations or website unavailability</li>
          <li>Any indirect, incidental, or consequential damages</li>
          <li>Errors in third-party payment gateways or external links</li>
        </ul>
      </Section>

      <Section title="10. Termination">
        <ul className="list-disc ml-5 space-y-2">
          <li>You violate these terms</li>
          <li>We suspect fraudulent or illegal activity</li>
        </ul>
        <p className="mt-2">We may suspend or terminate your access to the site or services without prior notice.</p>
      </Section>

      <Section title="11. Governing Law">
        <p>These Terms shall be governed by and interpreted in accordance with the laws of India, specifically under the jurisdiction of Delhi courts.</p>
      </Section>
    </div>
    </div>
  );
}
