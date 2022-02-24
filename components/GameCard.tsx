import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    id: number,
    game: string,
    description: string,
    rank: number,
    hashtags: Array<any>
};

function GameCard({ id, game, description, rank, hashtags }: Props) {

    const handleSetUpEmailForUser = () => {
        window.open('mailto:gimmepuzzles@gmail.com?subject=Reaching Out!')
    }

    return (
        <div>
            <div className="min-w-full rounded-2xl overflow-hidden shadow-xl bg-black">
                {/* --COMMENTED OUT CODE FOR POTENTIAL IMAGES ON CARDS, POTENTIALLY USED IN FUTURE-- */}
                {/* <Image className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" width="350px" height="300px"/> */}
                <div className="py-5 text-black flex justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
                <div className="flex flex-col justify-between">
                    <div className="px-6 py-4">
                        <div className="flex justify-center items-center">
                        <span className="font-bold text-2xl mb-2 mr-0">{game}</span>
                        {/* --COMMENTED OUT CODE FOR DISPLAYING GAME RANKINGS, TO BE USED IN FUTURE-- */}
                            {/* <span className="font-bold text-2xl mb-2 mr-3">{game}</span> */}
                            {/* {
                                (rank === 1) ?
                                <span className="font-bold text-sm text-yellow-500">#{rank} 🏆</span> 
                                : (rank === 2) ? <span className="font-bold text-sm text-gray-400">#{rank}</span>
                                : (rank === 3) ? <span className="font-bold text-sm text-yellow-700">#{rank}</span> 
                                : <span className="font-bold text-sm text-white">#{rank}</span> 
                            }  */}
                        </div>
                        <div className="">
                            <p className="text-white text-base text-center">
                            {description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="px-6 py-2 flex flex-row justify-center items-center">
                            {
                                (game === "More Coming Soon")
                                ? <button onClick={handleSetUpEmailForUser} className="transition ease-in-out delay-100 hover:scale-110 transform duration-300 content-center bg-transparent hover:bg-white bg-black font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">
                                    Reach Out
                                    {/* <a href="mailto:benjackscheer@gmail.com?subject=Reaching Out!">Reach Out</a> */}
                                </button>
                                : <Link href={"/"+game.toLowerCase()}>
                                    <button className="transition ease-in-out delay-100 hover:scale-110 transform duration-300 content-center bg-transparent hover:bg-white bg-indigo-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">
                                        Play {game}
                                    </button>
                                </Link>
                            }
                        </div>
                        <div className="px-6 pt-5 pb-4 flex flex-row justify-center items-center flex-wrap">
                            {hashtags.map((hashtag)=>{
                                return <span key={hashtag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag.label}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
