import type { Metadata } from 'next';
import { AppBar } from '@/shared/components/AppBar';
import { Footer } from '@/shared/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | World Track Aviation',
  description:
    'Learn how World Track Aviation collects, uses, and protects your personal information when you book flights, hotels, visas, or Umrah packages with us.',
  keywords: [
    'Privacy Policy',
    'World Track Aviation privacy',
    'travel data protection Pakistan',
  ],
  alternates: {
    canonical: 'https://worldtracktravel.com/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy | World Track Aviation',
    description:
      'Learn how World Track Aviation collects, uses, and protects your personal information when you book flights, hotels, visas, or Umrah packages with us.',
    url: 'https://worldtracktravel.com/privacy-policy/',
    siteName: 'World Track Aviation',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AppBar onOpenContact={undefined} onSelectCategory={undefined} />
      <main style={{ minHeight: '100vh', background: '#f9fafb' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '80px 24px 64px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '8px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '40px' }}>
            Last updated: January 2025
          </p>

          {[
            {
              title: '1. Information We Collect',
              body: 'We collect information you provide directly to us when making enquiries, bookings, or contacting our team. This includes your name, email address, phone number, passport details (where required for visa or Umrah applications), and travel preferences.',
            },
            {
              title: '2. How We Use Your Information',
              body: 'We use your information to process travel bookings and visa applications, communicate regarding your enquiries and reservations, send relevant travel updates and package offers (with your consent), and comply with legal obligations under Pakistani law and international travel regulations.',
            },
            {
              title: '3. Information Sharing',
              body: 'We do not sell or rent your personal information to third parties. We may share your information with airlines, hotels, and visa processing authorities solely to fulfil your travel booking. All third parties are required to handle your information in accordance with applicable data protection standards.',
            },
            {
              title: '4. Data Security',
              body: 'We implement industry-standard technical and organisational measures to protect your personal information from unauthorised access, disclosure, or loss. However, no transmission over the internet is completely secure and we cannot guarantee absolute security.',
            },
            {
              title: '5. Cookies',
              body: 'Our website uses cookies to improve your browsing experience and analyse site traffic. You may disable cookies in your browser settings; however, some parts of our website may not function correctly without them.',
            },
            {
              title: '6. Your Rights',
              body: 'You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at worldtrackaviation@gmail.com or call 051-2120721.',
            },
            {
              title: '7. Retention',
              body: 'We retain your personal information for as long as necessary to provide our services and comply with legal requirements. Booking records are typically retained for seven years in accordance with Pakistani commercial regulations.',
            },
            {
              title: '8. Changes to This Policy',
              body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of our services after changes are posted constitutes acceptance of the updated policy.',
            },
            {
              title: '9. Contact Us',
              body: 'If you have any questions about this Privacy Policy, please contact us at: World Track Aviation, Office #4, Islamabad Center, Fazal-ul-Haq Road, Blue Area, Islamabad. Email: worldtrackaviation@gmail.com | Phone: 051-2120721',
            },
          ].map(({ title, body }) => (
            <section
              key={title}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '28px 32px',
                marginBottom: '16px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
              }}
            >
              <h2
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {title}
              </h2>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>{body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
