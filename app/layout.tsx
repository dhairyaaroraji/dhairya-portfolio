import type { Metadata } from 'next';
import '@fontsource-variable/onest';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dhairya Arora — AI Developer & Student Innovator',
  description:
    'Portfolio of Dhairya Arora — AI Developer, Full-Stack Builder, and Student Innovator at JIIT Noida. Building practical technology products and exploring AI.',
  keywords: [
    'Dhairya Arora',
    'AI Developer',
    'Student Innovator',
    'JIIT Noida',
    'Portfolio',
    'Full-Stack Developer',
    'Hackathon',
    'Next.js',
  ],
  authors: [{ name: 'Dhairya Arora', url: 'https://github.com/dhairyaaroraji' }],
  creator: 'Dhairya Arora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Dhairya Arora — AI Developer & Student Innovator',
    description:
      'Building practical technology products, exploring AI, and innovating through hackathons.',
    siteName: 'Dhairya Arora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhairya Arora — AI Developer & Student Innovator',
    description:
      'Portfolio of Dhairya Arora — AI Developer & Student Innovator at JIIT Noida.',
    creator: '@dhairyaroraji',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://dhairyaarora.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('da-mode');
                  if (mode === 'light') {
                    document.documentElement.setAttribute('data-mode', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
