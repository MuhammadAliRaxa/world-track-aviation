import type { Metadata } from 'next';
import { AppBar } from '@/shared/components/AppBar';
import { Footer } from '@/shared/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | World Track Aviation',
  description:
    'Read the terms and conditions for booking flights, hotels, visas, Umrah packages, and other travel services through World Track Aviation.',
  keywords: [
    'Terms and Conditions',
    'World Track Aviation terms',
    'travel booking rules Pakistan',
  ],
  alternates: {
    canonical: 'https://worldtracktravel.com/terms-and-conditions/',
  },
  openGraph: {
    title: 'Terms & Conditions | World Track Aviation',
    description:
      'Read the terms and conditions for booking flights, hotels, visas, Umrah packages, and other travel services through World Track Aviation.',
    url: 'https://worldtracktravel.com/terms-and-conditions/',
    siteName: 'World Track Aviation',
    type: 'website',
  },
};

export default function TermsAndConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '40px' }}>
            Last updated: January 2025
          </p>

          {[
            {
              title: '1. Acceptance of Terms',
              body: 'By accessing our website or engaging World Track Aviation for any travel service, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.',
            },
            {
              title: '2. Bookings & Reservations',
              body: 'All bookings are subject to availability and confirmation by World Track Aviation. A booking is only confirmed upon receipt of the required deposit or full payment and issuance of a written confirmation. Prices quoted are valid at the time of quotation and are subject to change prior to confirmation.',
            },
            {
              title: '3. Payments',
              body: 'Payments may be made by cash, bank transfer, or other methods agreed upon at the time of booking. World Track Aviation reserves the right to cancel any booking for which full payment has not been received by the stipulated deadline.',
            },
            {
              title: '4. Cancellations & Refunds',
              body: 'Cancellation policies vary by service type (Umrah packages, hotel bookings, group tickets, tours). Cancellations must be made in writing. Refunds, where applicable, will be processed after deduction of any applicable cancellation charges imposed by airlines, hotels, or other service providers. Non-refundable bookings will be clearly indicated at the time of purchase.',
            },
            {
              title: '5. Visa & Travel Documentation',
              body: 'Clients are responsible for ensuring they hold valid passports, visas, and any other documentation required for travel. World Track Aviation provides assistance with visa applications but cannot guarantee visa approval. No refund will be given for unused services resulting from a refused visa.',
            },
            {
              title: '6. Umrah Packages',
              body: 'Umrah package itineraries, hotel accommodation, and transport arrangements are subject to change based on availability and circumstances beyond our control, including but not limited to Saudi Government regulations and airline schedule changes. We will endeavour to provide equivalent alternatives where changes occur.',
            },
            {
              title: '7. Liability',
              body: 'World Track Aviation acts as an agent for airlines, hotels, and other service providers. We accept no liability for any loss, damage, injury, or delay arising from the acts or omissions of third-party service providers, force majeure events, or circumstances beyond our reasonable control.',
            },
            {
              title: '8. Complaints',
              body: 'Any complaints must be reported to our team at the earliest opportunity. Written complaints must be submitted within 30 days of return from travel. We will endeavour to resolve all complaints fairly and promptly.',
            },
            {
              title: '9. Governing Law',
              body: 'These Terms and Conditions are governed by the laws of Pakistan. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.',
            },
            {
              title: '10. Contact',
              body: 'For any questions regarding these Terms and Conditions, please contact us at: World Track Aviation, Office #4, Islamabad Center, Fazal-ul-Haq Road, Blue Area, Islamabad. Email: worldtrackaviation@gmail.com | Phone: 051-2120721',
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
