import React from 'react';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import WhatsAppFloatButton from '@/component/FloatWhatsapp';
import FixedCallButton from '@/component/FixedCall';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Astrologer Babaji',
  description: 'Astrologer Babaji offers trusted guidance and solutions to individuals facing various challenges in their personal relationships and professional endeavors. From breakup problems to resolving conflicts between partners, Babaji specializes in leveraging astrology to mend relationships and bring harmony back into the lives of his clients. Whether its navigating through GF|BF problems or rekindling lost love, his expertise helps individuals overcome obstacles and restore love and understanding in their relationships. Additionally, Babaji extends his services to address business challenges, providing insightful remedies to overcome hurdles hindering job or business growth. Trust Astrologer Babaji to offer genuine solutions and pave the way for a brighter future in both personal and professional spheres.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </head>
      <body className={inter.className}>
      <FixedCallButton/>
        <WhatsAppFloatButton/>
        {children}
        </body>
    </html>
  );
}
