import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adv-p-r-rathy.in';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Notary Public & Advocate in Sultan Bathery, Wayanad | Adv. P. R. Rathy',
  description: 'Authorized Notary Public and Advocate services in Sultan Bathery, Wayanad by Adv. P. R. Rathy (22+ years experience). Document notarization, affidavits, power of attorney, and legal solutions.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Notary Public & Advocate in Sultan Bathery, Wayanad | Adv. P. R. Rathy',
    description: 'Authorized Notary Public and Advocate services in Sultan Bathery, Wayanad by Adv. P. R. Rathy (22+ years experience). Document notarization, affidavits, and legal services.',
    url: siteUrl,
    siteName: 'Adv. P. R. Rathy',
    images: [
      {
        url: '/notary-public-advocate-hero-wayanad.webp',
        width: 1200,
        height: 630,
        alt: 'Adv. P. R. Rathy - Advocate & Notary Public in Wayanad, Kerala',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notary Public & Advocate in Sultan Bathery, Wayanad | Adv. P. R. Rathy',
    description: 'Authorized Notary Public and Advocate services in Sultan Bathery, Wayanad. 22+ years of legal and notary practice.',
    images: ['/notary-public-advocate-hero-wayanad.webp'],
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Notary"],
    "@id": `${siteUrl}/#legal-service`,
    "name": "Adv. P. R. Rathy | Notary Public & Advocate Sultan Bathery",
    "image": `${siteUrl}/advocate-notary-pr-rathy-wayanad.webp`,
    "logo": `${siteUrl}/advocate-notary-logo.png`,
    "telephone": "+919745569225",
    "email": "advpraarathy123@gmail.com",
    "url": siteUrl,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "O.K. Khalid Building, Near Court Complex, Sultan Bathery",
      "addressLocality": "Sultan Bathery, Wayanad",
      "addressRegion": "Kerala",
      "postalCode": "673592",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.6645",
      "longitude": "76.2570"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Sultan Bathery"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wayanad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kerala"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "knowsAbout": [
      "Notary Public Services",
      "Document Notarization",
      "Affidavit Attestation",
      "Power of Attorney",
      "Family Court Law",
      "Civil Litigation",
      "Criminal Law"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-[#F8F6F0] text-[#111615] antialiased selection:bg-[#6B7E74] selection:text-white">
        {children}
      </body>
    </html>
  );
}
