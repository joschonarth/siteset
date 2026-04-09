import { Inter } from 'next/font/google'
import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.variable} dark relative flex min-h-screen flex-col`}
    >
      <Header />

      <main className="mb-12 flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  )
}
