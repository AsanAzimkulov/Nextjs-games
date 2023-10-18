import type { Metadata } from 'next';

import './styles/_global.scss';

export const metadata: Metadata = {
  title: 'Games',
  description: 'Play games with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='mainContainer'>
            {children}
        </main>
      </body>
    </html>
  )
}
