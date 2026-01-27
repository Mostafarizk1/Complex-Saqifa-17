import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'سقيفة 17 | شقق فاخرة في حي الملقا',
  description: 'اكتشف الفخامة في مجمع سقيفة 17 - شقق سكنية راقية في حي الملقا، الرياض. تصميم عصري، عزل صوتي، نظام دخول ذكي.',
  keywords: 'شقق فاخرة، حي الملقا، الرياض، سقيفة 17، شقق مفروشة، عقارات',
}

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('saqifa-theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${cairo.className} antialiased bg-stone-50 dark:bg-slate-900 transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
