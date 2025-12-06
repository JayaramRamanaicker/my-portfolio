import {Montserrat, Ovo } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"], weight: ["400",  "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ovo',
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Portfolio - Jayaram",
  description: "Freelance Video Editor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body
        className={`${montserrat.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
