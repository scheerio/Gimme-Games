import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen p-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout