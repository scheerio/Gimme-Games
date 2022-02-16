import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    id: number,
    game: string,
    description: string,
    rank: number,
    hashtags: Array<any>,
    // handleGameSelection: (id: number) => void
};

function GameCard({ id, game, description, rank, hashtags/*, handleGameSelection*/ }: Props) {

    // const tempImageBackgrounds = [
    //     'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    //     'bg-gradient-to-r from-pink-100 via-purple-300 to-indigo-700',
    //     'bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100',
    //     'bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100',
    //     'bg-gradient-to-r from-yellow-200 via-green-200 to-green-500',
    //     'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200',
    //     'bg-gradient-to-r from-green-200 via-green-400 to-purple-700',
    //     'bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300',
    //     'bg-gradient-to-r from-blue-300 via-green-200 to-yellow-600'
    // ]

    // const dummyText = [
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    //     'Just a silly game for dogs. Nothing crazy. Try to get as many treats as you can.'
    // ]
    return (
        <div>
        <div className="min-w-full rounded-2xl overflow-hidden shadow-xl bg-black">
            {/* <Image className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" width="350px" height="300px"/> */}
            <div className="py-5 text-black flex justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
            <div className="flex flex-col justify-between">
                <div className="px-6 py-4">
                    <div className="flex justify-center items-center">
                        <span className="font-bold text-2xl mb-2 mr-3">{game}</span>
                        {
                            (rank === 1) ?
                            <span className="font-bold text-sm text-yellow-500">#{rank} 🏆</span> 
                            : (rank === 2) ? <span className="font-bold text-sm text-gray-400">#{rank}</span>
                            : (rank === 3) ? <span className="font-bold text-sm text-yellow-700">#{rank}</span> 
                            : <span className="font-bold text-sm text-white">#{rank}</span> 
                        } 
                    </div>
                    <div className="">
                        <p className="text-white text-base text-center">
                        {description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="px-6 py-2 flex flex-row justify-center items-center">
                        <Link href={"/"+game.toLowerCase()}>
                            <button className="transition ease-in-out delay-100 hover:scale-110 transform duration-300 content-center bg-transparent hover:bg-white bg-indigo-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" /*onClick={(e) => handleGameSelection(id)}*/>
                                Play {game}
                            </button>
                        </Link>
                    </div>
                    <div className="px-6 pt-5 pb-4 flex flex-row justify-center items-center flex-wrap">
                        {hashtags.map((hashtag)=>{
                            return <span key={hashtag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag.label}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
        {/* {showModal ? (
        <div id="defaultModal" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                hello
            </div>
        </div>
        ) : null} */}
        </div>
    );
}

export default GameCard;
