import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import GameGrid from '../components/GameGrid'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { provideDummyData } from '../utils/utils';
import GameModal from '../games/Wordpunch/InstructionsModal';
import Layout from '../components/Layout';

/* This is the home page for the website, which is also where the puzzles are */

const Home: NextPage = () => {

  const [currentData, setCurrentData] = useState([]);

  /* This is pretty useless, it just imitates the loading state for user experience purposes - cause there's no backend yet :)*/
  useEffect(()=>{
    const getData = () => {
      const tempData = provideDummyData() as any;
      setCurrentData(tempData);
    }
    const dummyTimeout = setTimeout(getData, 1000)
    // return clearTimeout(dummyTimeout)
  }, [])

  return (
    <>
      <Head>
        <title>Puzzles | GimmePuzzles</title>
        <meta name="keywords" content="puzzles"/>
      </Head>
      <Layout>
        <div className="text-white p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <GameGrid data={currentData} />
        </div>
      </Layout>
    </>
  )
}

export default Home
