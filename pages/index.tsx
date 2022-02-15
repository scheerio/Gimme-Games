import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import GameGrid from '../components/GameGrid'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { provideDummyData } from '../utils/utils';
import GameModal from '../components/GameModal';
import Layout from '../components/Layout';

const Home: NextPage = () => {

  const [selectedGameId, setSelectedGameId] = useState(-1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(()=>{
    const getData = () => {
      const tempData = provideDummyData() as any;
      setCurrentData(tempData);
    }
    const dummyTimeout = setTimeout(getData, 1500)
    // return clearTimeout(dummyTimeout)
  }, [])

  const handleGameSelection = (id: number) => {
    console.log(id)
    setSelectedGameId(id);
  }

  const handleExitGame = () => {
    setSelectedGameId(-1);
  }

  const handleSelectRandomGame = () => {
    for (let i = 0; i < 20; i++){
    console.log(Math.floor(Math.random()*currentData.length));
    }
    handleGameSelection(Math.floor(Math.random()*currentData.length));
  }

  return (
    <Layout /*handleSelectRandomGame={handleSelectRandomGame}*/>
      {selectedGameId >= 0 ? (
        <GameModal selectedGameId={selectedGameId} handleExitGame={handleExitGame}/>
      ) : null}
      <div className="text-white p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <GameGrid data={currentData} handleGameSelection={handleGameSelection}/>
      </div>
    </Layout>
  )
}

export default Home
