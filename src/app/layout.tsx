import './globals.css'
import { Outfit } from 'next/font/google'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Growfy Digital',
  description: 'Growfy is boosting people everyday.',
  author: 'Nathan Palatin - nathanpalatin.dev',
  keywords: 'growfy, growfy digital, growfy balneario camboriu, cursos sc, santa catarina marketing digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
