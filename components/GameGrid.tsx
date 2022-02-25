import React from 'react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

/* This is the grid that displays the puzzles / games */

type Props = {
    data: Array<any>
};

function GameGrid({ data }: Props) {

    const noDataGrid = new Array(9).fill(null);

    return (
        // <div className="min-h-fit grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly">
        // <div className="min-h-screen grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly">  
            {data.length ?
                data.map((item, i)=>{
                    return <GameCard key={item.id} id={item.id} game={item.game} description={item.description} rank={i+1} hashtags={item.hashtags} />
                })
                : noDataGrid.map((item, i)=>{
                    return <GameCardSkeleton key={i} />
                })
            }
        </div>
    );
}

export default GameGrid;
