import React from 'react'
import Layout from '../components/Layout';

type Props = {}

function Game({}: Props) {
  return (
      <Layout>
          {/* <div h-screen bg-black text-green-500>
            <h1>hello</h1>
          </div> */}
        <div className="h-fit text-white p-10 bg-black overflow-x-hidden flex flex-col justify-center items-center">
          <h1 className="text-3xl">Wordpunch</h1>
          <p className="p-5 text-green-500">Good luck guessing the word</p>
          {/* <p className="p-5 text-green-500 flex justify-center items-center">Today's hint:</p> */}
          <ol className="p-3 flex flex-col justify-center items-center">
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F_ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F_ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F_ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F_ight</li>
            </div>
            <div className="m-1 p-1 bg-white rounded w-fit">
              <li className="text-black">F_ight</li>
            </div>
          </ol>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row">
                <input className="w-40 text-center p-3 bg-gray-600 rounded text-xl"></input>
                <button className="ml-3 p-5 transform duration-300 content-center bg-transparent hover:bg-white bg-green-500 font-semibold hover:text-black border border-green-100 hover:border-transparent rounded">Enter</button>
              </div>
              <p className="p-3 text-green-500">Tries left: 3</p>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default Game;