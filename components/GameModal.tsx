import React from 'react'

type Props = {
    // selectedGameId: number,
    handleExitModal: () => void
}

function GameModal({ /*selectedGameId,*/ handleExitModal }: Props) {

    const exampleHintList = (
        <ol className="flex flex-col justify-center items-center text-2xl">
        <div className="m-1 p-1 bg-white rounded w-fit">
          <li className="text-black"><span className="text-green-500 font-semibold">_</span>reed</li>
        </div>
        <div className="m-1 p-1 bg-white rounded w-fit">
          <li className="text-black">lo<span className="text-green-500 font-semibold">_</span>se</li>
        </div>
        <div className="m-1 p-1 bg-white rounded w-fit">
          <li className="text-black">ste<span className="text-green-500 font-semibold">_</span>l</li>
        </div>
        <div className="m-1 p-1 bg-white rounded w-fit">
          <li className="text-black"><span className="text-green-500 font-semibold">_</span>amble</li>
        </div>
        <div className="m-1 p-1 bg-white rounded w-fit">
          <li className="text-black"><span className="text-green-500 font-semibold">_</span>ehydrate</li>
        </div>
        </ol>
    );
  return (
    <>
    <div
      className="m-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-screen my-6 mx-auto max-w-xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="text-black flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <span className="font-bold text-2xl mb-2 mr-3">Wordpunch: How to Play</span>
          <button className="scale-110" onClick={handleExitModal}>✖</button>
          </div>
          {/*body*/}
          <div className="text-black relative p-6 flex-auto text-center">
            <p className="">Guess today's word by using the hints.</p>
            <p className="mb-5">Each hint contains a piece of the answer.</p>
            <p className="border-t border-solid border-blueGray-200 pt-4 font-semibold">Example:</p>
            <div className="flex flex-row justify-evenly p-3">
                <div>{exampleHintList}</div>
                <div className="">
                    <p>Chance #1) goarr (wrong)</p>
                    <p>Chance #2) foard (wrong)</p>
                    <p>Chance #3) board (correct, you did it!)</p>
                </div>
            </div>
            <button className="text-xl mt-3 p-5 transform duration-300 content-center bg-transparent hover:bg-green-500 bg-green-200 font-semibold hover:text-black border-2 border-green-500 hover:border-transparent rounded" onClick={handleExitModal}>Got it!</button>
          </div>
          {/*footer*/}
          {/* <div className="text-black flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
            Created by Ben and Fidel
          </div> */}
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default GameModal