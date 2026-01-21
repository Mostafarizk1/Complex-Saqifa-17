import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-cairo antialiased bg-stone-50 dark:bg-slate-900 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
