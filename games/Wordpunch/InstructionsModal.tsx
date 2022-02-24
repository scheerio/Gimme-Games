import React from 'react'
import { EXAMPLE_HINT_DATA } from '../../static/wordpunch/wordpunch_constants'

/* This is an instructions modal for wordpunch */

type Props = {
    handleExitModal: () => void
}

function InstructionsModal({ handleExitModal }: Props) {

    const exampleHintListEmpty = (
      <div className="border-4 p-2 bg-black w-fit">
          <p className="font-semibold mb-1 text-white">Hints:</p>
          <ol className="flex flex-row justify-center items-center text-lg">
          {
            EXAMPLE_HINT_DATA.map((item)=>{
              return <div key={item.join('')} className="m-1 p-1 bg-white rounded w-fit">
                         <li className="text-black">{item[0]}<span className="text-green-500 font-semibold text-sm">_</span>{item[2]}</li>
                     </div>
            })
          }
          </ol>
      </div>
    );

    const exampleHintListCompleted = (
        <div className="border-4 p-2 bg-black w-fit">
            <ol className="flex flex-row text-lg">
            {
            EXAMPLE_HINT_DATA.map((item)=>{
              return <div key={item.join('')} className="m-1 p-1 bg-white rounded w-fit">
                         <li className="text-black">{item[0]}<span className="text-green-500 font-semibold">{item[1]}</span>{item[2]}</li>
                     </div>
            })
            }
            </ol>
        </div>
    );

  return (
    <>
    <div
      className="m-8 rounded justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-screen my-6 mx-auto max-w-xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="text-black flex items-start justify-between pl-4 pr-4 pb-4 border-b border-solid border-blueGray-200 rounded-t">
            <span className="font-bold sm:text-2xl text-xl mt-5 pr-2 pl-4">Wordpunch: How to Play</span>
          <button className="scale-110 pt-5 pr-5" onClick={handleExitModal}>✖</button>
          </div>
          {/*body*/}
          <div className="text-black relative p-6 flex-auto text-center">
            <p className="">You get <strong>5 tries</strong> to guess today's word!</p>
            <p className="">Each hint contains part of the answer.</p>
            <p className="mb-5">A new game starts every 24 hours!</p>
            <p className="text-xl border-t border-solid border-blueGray-200 pt-4 font-semibold">Example</p>
            <div className="flex flex-col items-center mt-2">
                {exampleHintListEmpty}
                <div className="mt-5 flex flex-row">
                    <span className="mb-5 text-2xl text-red-500 pl-3 pr-3">goarr ❌</span>
                    <span className="mb-5 text-2xl text-red-500 pl-3 pr-3">foard ❌</span>
                    <span className="mb-5 text-2xl text-green-500 pl-3 pr-3">board ✅</span>
                </div>
                <div>{exampleHintListCompleted}</div>
            </div>
            <button className="text-xl mt-4 p-5 transform duration-300 content-center bg-transparent hover:bg-green-500 bg-green-100 font-semibold hover:text-black border-2 border-green-500 hover:border-transparent rounded" onClick={handleExitModal}>Got it!</button>
          </div>
          {/*footer*/}
          {/* <div className="text-black justify-center flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
            Created by Ben
          </div> */}
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default InstructionsModal