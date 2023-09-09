import StyledComponentsRegistry from 'lib/registry'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

// https://play.tailwindcss.com/t8hoEfMek9