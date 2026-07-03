import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'MERN Stack Developer | Mobin Miah – React, Node & MongoDB',
  description:
    'Junior MERN Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB. I build modern, scalable web applications with Firebase Authentication, Stripe payments, and responsive UI.',
  keywords:
    'Mobin Miah, MERN Stack Developer, Full Stack Web Developer, React.js Developer, Node.js Developer, MongoDB Developer',
  authors: [{ name: 'Mobin Miah' }],
  metadataBase: new URL('https://mobinmiah.com'),
  openGraph: {
    title: 'MERN Stack Developer | Mobin Miah – React, Node & MongoDB',
    description:
      'Junior MERN Stack Developer building modern, scalable web applications with React.js, Node.js, Express.js, MongoDB, Firebase Auth, JWT, and Stripe payments.',
    url: 'https://mobinmiah.com/',
    type: 'website',
    images: [{ url: 'https://mobinmiah.com/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MERN Stack Developer | Mobin Miah – React, Node & MongoDB',
    description:
      'Junior MERN Stack Developer building modern, scalable web applications with React.js, Node.js, Express.js, and MongoDB.',
    images: ['https://mobinmiah.com/og-image.png'],
    creator: '@MobinMiah12',
  },
  icons: { icon: '/favicon.png' },
  alternates: { canonical: 'https://mobinmiah.com/' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00C2FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mobin Miah',
              url: 'https://mobinmiah.com',
              image: 'https://mobinmiah.com/og-image.png',
              sameAs: [
                'https://github.com/mobinmiah',
                'https://www.linkedin.com/in/mobin-miah',
                'https://x.com/MobinMiah12',
              ],
              jobTitle: 'MERN Stack Developer',
              worksFor: { '@type': 'Organization', name: 'Freelance' },
              description:
                'Junior MERN Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB',
              email: 'mdmobinmiah1998@gmail.com',
              telephone: '+8801878014535',
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
