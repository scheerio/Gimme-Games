import React from 'react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

type Props = {};

function GameGrid({}: Props) {

    //Delete this
    const tempArray = new Array(5).fill(null);

    const noDataGrid = new Array(9).fill(null);

    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly">
            {
                tempArray.map((item, i)=>{
                    return <GameCard key={i} rank={i+1}/>
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
