import React from 'react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

type Props = {};

function GameGrid({}: Props) {

    //Delete this
    const tempArray = new Array(5).fill(null);

    const dummyArray = [
        {
            id: 1,
            game: "Wordpunch",
            description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
            hashtags: [
                {
                    id: 1,
                    label: "wordpunch"
                },
                {
                    id: 2,
                    label: "stumped"
                },
                {
                    id: 3,
                    label: "goodguess"
                }
            ]
        },
        {
            id: 2,
            game: "Bingbong",
            description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
            hashtags: [
                {
                    id: 1,
                    label: "bingbong"
                },
                {
                    id: 2,
                    label: "stumped"
                },
                {
                    id: 3,
                    label: "goodguess"
                }
            ]
        },
        {
            id: 3,
            game: "Cheesebread",
            description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
            hashtags: [
                {
                    id: 1,
                    label: "cheesebread"
                },
                {
                    id: 2,
                    label: "stumped"
                },
                {
                    id: 3,
                    label: "goodguess"
                }
            ]
        },
        {
            id: 4,
            game: "Wordpunch",
            description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
            hashtags: [
                {
                    id: 1,
                    label: "wordpunch"
                },
                {
                    id: 2,
                    label: "stumped"
                },
                {
                    id: 3,
                    label: "goodguess"
                }
            ]
        },
        {
            id: 5,
            game: "Wordpunch",
            description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
            hashtags: [
                {
                    id: 1,
                    label: "wordpunch"
                },
                {
                    id: 2,
                    label: "stumped"
                },
                {
                    id: 3,
                    label: "goodguess"
                }
            ]
        }
    ];

    const noDataGrid = new Array(9).fill(null);

    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly">
            {
                dummyArray.map((item, i)=>{
                    return <GameCard key={item.id} game={item.game} description={item.description} rank={i+1} hashtags={item.hashtags} />
                })
            }
            {/* {
                noDataGrid.map((item, i)=>{
                    return <GameCardSkeleton key={i} />
                })
            } */}
        </div>
    );
}

export default GameGrid;
