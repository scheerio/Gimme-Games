import React, { useState } from 'react'
import GameModal from '../components/GameModal';
import Layout from '../components/Layout';

type Props = {}

function Game({}: Props) {

  const [modalOpen, setModalOpen] = useState(true);
  const [triesLeft, setTriesLeft] = useState(3);

  const handleExitModal = () => {
    setModalOpen(!modalOpen);
  }

  const handleSubtractTries = () => {
    setTriesLeft(prev=>prev-1);
  }

  return (
    <>
      {modalOpen ? <GameModal handleExitModal={handleExitModal}/> : null}
      <Layout>
        <div className="h-fit text-white p-10 bg-black overflow-x-hidden flex flex-col justify-center items-center">
          <h1 className="text-3xl">Wordpunch</h1>
          <p className="p-1 text-green-500 text-xl">Good luck guessing this word</p>
          {/* <p className="p-5 text-green-500 flex justify-center items-center">Today's hint:</p> */}
          <ol className="mt-1 mb-3 flex flex-col justify-center items-center text-2xl">
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F<span className="text-green-500 font-semibold">_</span>ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F<span className="text-green-500 font-semibold">_</span>ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F<span className="text-green-500 font-semibold">_</span>ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F<span className="text-green-500 font-semibold">_</span>ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F<span className="text-green-500 font-semibold">_</span>ight</li>
            </div>
          </ol>
          <div>
            <div className="mt-3 flex flex-col justify-center items-center">
              <div className="flex flex-row">
                <input autoFocus className="w-40 text-center outline-0 p-3 bg-gray-600 rounded text-4xl"></input>
                <button className="text-xl ml-3 p-5 text-black border-2 border-green-500 transform duration-300 content-center bg-transparent hover:bg-green-500 bg-green-200 font-semibold hover:text-black hover:border-transparent rounded" onClick={handleSubtractTries}>Enter</button>
              </div>
              <div className="mt-4 flex flex-row text-xl">
                <p className="text-green-500">Tries left:</p>
                <p className="text-white ml-2">{triesLeft}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Game;