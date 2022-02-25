import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

/* This is a wrapper component so you don't have to repeat Navbar and Footer everywhere*/

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