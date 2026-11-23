import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import PrintDocument from '@/components/PrintDocument'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})


export const metadata: Metadata = {
  title: 'Nurrisky Rima Maharani | Portofolio Manajemen & Operasional Usaha',
  description: 'Manajer Toko Kue | S1 Manajemen dan S1 Ilmu Hukum | Operasional Usaha, Pelayanan Pelanggan, Koordinasi Tim — Indragiri Hilir, Riau',
  keywords: ['Nurrisky Rima Maharani', 'Manajer Toko Kue', 'Manajemen', 'Operasional Usaha', 'Pelayanan Pelanggan', 'CPFM', 'Universitas Islam Indragiri', 'Indragiri Hilir'],
  openGraph: {
    title: 'Nurrisky Rima Maharani | Portofolio Manajemen & Operasional Usaha',
    description: 'Manajer Toko Kue | S1 Manajemen dan S1 Ilmu Hukum',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
                try {
                  // Intro tampil di setiap muat ulang (F5/Ctrl+R) dan kunjungan baru; dilewati hanya bila datang dari halaman lain di situs ini
                  var nav = performance.getEntriesByType('navigation')[0];
                  var type = nav ? nav.type : 'navigate';
                  var internal = !!document.referrer && new URL(document.referrer).origin === location.origin;
                  if (type !== 'reload' && internal) {
                    document.documentElement.classList.add('intro-done', 'hero-go');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <PrintDocument />
        </LanguageProvider>
      </body>
    </html>
  )
}
