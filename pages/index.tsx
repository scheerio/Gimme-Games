import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import GameGrid from '../components/GameGrid'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { provideDummyData } from '../utils/utils';

const Home: NextPage = () => {

  const [showSelectedGame, setShowSelectedGame] = useState(0);
  const [currentData, setCurrentData] = useState([]);

  useEffect(()=>{
    const getData = () => {
      const tempData = provideDummyData() as any;
      setCurrentData(tempData);
    }
    const dummyTimeout = setTimeout(getData, 1000)
    // return clearTimeout(dummyTimeout)
  }, [])

  const handleGameSelection = (id: number) => {
    console.log(id)
    setShowSelectedGame(id);
  }

  const handleExitGame = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setShowSelectedGame(0);
  }

  return (
    <div className="min-h-screen p-4">
      <Navbar />
      {showSelectedGame > 0 ? (
        <>
          <div
            className="transition ease-in-out delay-100 transform duration-300 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-screen my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="text-black flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <span className="font-bold text-2xl mb-2 mr-3">Wordpunch</span>
                <button className="scale-110" onClick={(e)=>handleExitGame(e)}>✖</button>
                </div>
                {/*body*/}
                <div className="text-black relative p-6 flex-auto">
                  {showSelectedGame}
                </div>
                {/*footer*/}
                <div className="text-black flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  Created by Ben and Fidel
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="text-white p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <GameGrid data={currentData} handleGameSelection={handleGameSelection}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
