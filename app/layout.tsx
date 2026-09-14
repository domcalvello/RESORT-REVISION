import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const manrope = localFont({
  src: './fonts/manrope-latin.woff2',
  variable: '--font-manrope',
  display: 'swap',
  style: 'normal',
  weight: '200 800',
});

const bodoni = localFont({
  src: './fonts/bodoni-moda-latin.woff2',
  variable: '--font-bodoni',
  display: 'swap',
  style: 'normal',
  weight: '400 900',
});

const throhand = localFont({
  src: './fonts/throhand-ink-expert-roman.otf',
  variable: '--font-throhand',
  display: 'swap',
  style: 'normal',
  weight: '400',
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://circus-circus-2030.domcalvello.chatgpt.site').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: 'Circus Circus 2030 — Seriously, Circus Circus.',
  description: 'A speculative reimagining of a Las Vegas icon for another century.',
  applicationName: 'Circus Circus 2030',
  icons: { icon: `${siteUrl}/icon.png` },
  openGraph: {
    title: 'Circus Circus 2030 — Seriously, Circus Circus.',
    description: 'A Las Vegas icon, reimagined for another century.',
    type: 'website',
    url: `${siteUrl}/`,
    siteName: 'Circus Circus 2030',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'Seriously, Circus Circus campaign' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circus Circus 2030 — Seriously, Circus Circus.',
    description: 'A Las Vegas icon, reimagined for another century.',
    images: [`${siteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080706',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${bodoni.variable} ${throhand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
