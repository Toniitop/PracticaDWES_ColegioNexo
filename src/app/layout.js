import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexo',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${inter.className} bg-gray-200`} style={{ minHeight: '100vh' }}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
