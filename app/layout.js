import { Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ firaCode.className + " bg-[#111A20] overflow-x-hidden max-w-[100vw]" }>
        <Header />
      {children}
      </body>
    </html>
  )
}
