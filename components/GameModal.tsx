import React from 'react'

type Props = {
    selectedGameId: number,
    handleExitGame: () => void
}

function GameModal({ selectedGameId, handleExitGame }: Props) {
  return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-screen my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="text-black flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <span className="font-bold text-2xl mb-2 mr-3">Wordpunch</span>
          <button className="scale-110" onClick={handleExitGame}>✖</button>
          </div>
          {/*body*/}
          <div className="text-black relative p-6 flex-auto">
            {selectedGameId}
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
  )
}

export default GameModal