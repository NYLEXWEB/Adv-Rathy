import './globals.css';

export const metadata = {
  title: 'Adv. P. R. Rathy - Advocate & Notary | Wayanad, Kerala',
  description: 'Adv. P. R. Rathy is an Advocate & Notary with 22 years of dedicated legal practice in Civil & Criminal matters across Wayanad District and Kerala.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F6F0] text-[#111615] antialiased selection:bg-[#6B7E74] selection:text-white">
        {children}
      </body>
    </html>
  );
}
