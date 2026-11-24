import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter, Instrument_Serif } from 'next/font/google';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Bangladesh Wood International Expo', template: '%s | Bangladesh Wood Expo' },
  description: 'Bangladesh’s international B2B exhibition for woodworking machinery, furniture production technology, timber, laminates, interiors, tools and hardware.',
  applicationName: 'Bangladesh Wood International Expo',
  authors: [{ name: 'Futurex Trade Fair and Events' }, { name: 'ASK Trade & Exhibitions' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#4f1d17', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
