import React from 'react'
import Layout from '../components/Layout'

type Props = {}

function About({}: Props) {
  return (
      <Layout>
        <div className="h-screen p-1">
            <h1 className="p-5 text-3xl">We love games so much, we made this platform.</h1>
            <p className="p-5 text-xl">Let's play, together!</p>
        </div>
      </Layout>
  )
}

export default About;