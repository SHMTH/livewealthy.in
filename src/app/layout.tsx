import { Footer, Navbar } from '@/containers';
import { Inter, Roboto_Mono } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  title: 'SHMTH Capital',
  description: 'Your alternative investment partner',
  openGraph: {
    title: 'SHMTH Capital',
    description: 'Your alternative investment partner',
    url: '',
    siteName: 'SHMTH Capital',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/68834718/253035383-ad216eff-3305-44e7-94a3-ea96b87f4dbe.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://user-images.githubusercontent.com/68834718/253035383-ad216eff-3305-44e7-94a3-ea96b87f4dbe.png',
        width: 1800,
        height: 1600,
        alt: 'SHMTH',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-text bg-bg scroll-smooth font-sans ${inter.variable} ${roboto_mono.variable}`}
    >
      <body>
        <div id="root"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
