import { Section } from '@/components/resuable_components/Section'
import React from 'react'

const PrivacyPage = () => {
    return (
        <div className='py-20'>
            <div className="text-secondary min-h-screen pt-12 px-6 md:px-20">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary mb-6">
                        Privacy Policy - Knot Club Delhi
                    </h1>
                    <p className="text-sm text-muted mb-8">Last updated: August 1, 2025</p>

                    <p className="mb-6">
                        Welcome to Knot Club Delhi. Your privacy is important to us. This Privacy Policy explains how we collect, use,
                        and protect your personal information when you visit our website:{" "}
                        <a href="https://knotclubdelhi.com" className="text-primary underline" target="_blank" rel="noreferrer">
                            www.knotclubdelhi.com
                        </a>.
                    </p>

                    <p className="mb-6">
                        By using our site, you agree to the terms outlined in this policy.
                    </p>

                    <Section title="1. Information We Collect">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Personal Data:</strong> Name, email address, phone number, age, gender (when you register, book
                                events, or contact us)
                            </li>
                            <li>
                                <strong>Usage Data:</strong> Pages visited, time spent, browser type, and device information
                            </li>
                            <li>
                                <strong>Location Data:</strong> General geographic location (city/state) via your IP address
                            </li>
                            <li>
                                <strong>Cookies and Tracking Data:</strong> Used to improve your browsing experience (see below)
                            </li>
                        </ul>
                    </Section>

                    <Section title="2. Use of Cookies">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enhance website performance and user experience</li>
                            <li>Understand how users interact with the website</li>
                            <li>Deliver personalized content and offers</li>
                            <li>Track SEO performance and traffic sources (Google Analytics)</li>
                        </ul>
                        <p className="mt-2">You can manage or disable cookies through your browser settings.</p>
                    </Section>

                    <Section title="3. How We Use Your Data">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and improve our services (event updates, club memberships)</li>
                            <li>Respond to your inquiries</li>
                            <li>Send promotional emails or SMS (with your consent)</li>
                            <li>Improve SEO and online visibility through usage data</li>
                            <li>Prevent fraud and maintain security</li>
                        </ul>
                    </Section>

                    <Section title="4. Data Protection and Security">
                        <p>
                            Your data is protected using industry-standard encryption protocols and secure servers. We do not sell, rent,
                            or trade your personal information to third parties.
                        </p>
                        <p className="mt-2">
                            We may share your data with trusted partners for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-1">
                            <li>Email/SMS communications </li>
                            <li>Website analytics (e.g., Google Analytics)</li>
                            <li>Payment processing </li>
                        </ul>
                    </Section>

                    <Section title="5. Local SEO Focus – Serving Delhi NCR">
                        <p>
                            Knot Club primarily serves customers in Delhi, Noida, Gurugram, and nearby NCR regions. Our content and
                            services are optimized for users in these locations, including local event updates and regional promotions.
                        </p>
                    </Section>

                    <Section title="6. Your Rights">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access the personal data we hold about you</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                        <p className="mt-2">
                            Email us at{" "}
                            <a href="mailto:info@knotdelhi.com" className="text-primary underline">
                                info@knotdelhi.com
                            </a>{" "}
                            for any such requests.
                        </p>
                    </Section>

                    <Section title="7. Children’s Privacy">
                        <p>
                            Our services are intended for users aged 18 and above. We do not knowingly collect personal information from
                            children.
                        </p>
                    </Section>

                    <Section title="8. Third-Party Links">
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                            Please review their policies before interacting.
                        </p>
                    </Section>

                    <Section title="9. Updates to This Policy" className="mb-0">
                        <p>
                            We may update this policy periodically. Changes will be posted on this page with a new “Last updated” date.
                        </p>
                    </Section>

                    {/* <Section title="📞 10. Contact Us">
          <p>
            For questions or concerns about this Privacy Policy, contact:
          </p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>Knot Club Delhi</li>
            <li>Email: info@knotdelhi.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Address: XYZ Street, South Delhi, India</li>
          </ul>
        </Section> */}
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage