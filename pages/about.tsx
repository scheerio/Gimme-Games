import React from 'react'
import Layout from '../components/Layout'

type Props = {}

function About({}: Props) {
  return (
      <Layout>
        <div className="h-fit pt-1 pr-1 pl-1 pb-20">
            <h1 className="p-5 text-3xl">If you love a good puzzle, this was made for you!</h1>
            <p className="pt-5 pl-5 text-xl">GimmePuzzles is a humble home for new, challenging puzzles.</p>
            <p className="pl-5 pt-5 text-xl">Have a puzzle idea and want to turn it into reality? Or just have some feedback? Feel free to <a className="font-semibold text-blue-200 underline" href="mailto:gimmepuzzles@gmail.com?subject=Reaching Out!">reach out</a>.</p>
        </div>
      </Layout>
  )
}

export default About;