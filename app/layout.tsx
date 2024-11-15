import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Nom de Domaine et Hébergement Web Maroc | Service Abordable et Fiable',
  description: 'Offrez à votre entreprise une présence en ligne puissante avec nos services de nom de domaine et hébergement web au Maroc. Fiable, sécurisé et abordable. Contactez-nous aujourd\'hui !',
  keywords: ['nom de domaine Maroc', 'hébergement web Maroc', 'domaine .ma', 'hébergement web Maroc pas cher', 'hébergement sites web Maroc'],
  authors: [{ name: 'WGET SARL' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wget.ma',
    title: 'Nom de Domaine et Hébergement Web Maroc | Service Abordable et Fiable',
    description: 'Offrez à votre entreprise une présence en ligne puissante avec nos services de nom de domaine et hébergement web au Maroc. Fiable, sécurisé et abordable.',
    siteName: 'WGET - Hébergement Web Maroc',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nom de Domaine et Hébergement Web Maroc | Service Abordable et Fiable',
    description: 'Offrez à votre entreprise une présence en ligne puissante avec nos services de nom de domaine et hébergement web au Maroc.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}