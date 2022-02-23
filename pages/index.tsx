import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import GameGrid from '../components/GameGrid'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { provideDummyData } from '../utils/utils';
import GameModal from '../components/InstructionsModal';
import Layout from '../components/Layout';

const Home: NextPage = () => {

  const [currentData, setCurrentData] = useState([]);

  useEffect(()=>{
    const getData = () => {
      const tempData = provideDummyData() as any;
      setCurrentData(tempData);
    }
    const dummyTimeout = setTimeout(getData, 1000)
    // return clearTimeout(dummyTimeout)
  }, [])

  return (
    <Layout>
      <div className="text-white p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <GameGrid data={currentData} />
      </div>
    </Layout>
  )
}

export default Home
