import React from 'react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

type Props = {
    data: Array<any>,
    // handleGameSelection: (id: number) => void
};

function GameGrid({ data/*, handleGameSelection*/ }: Props) {

    const noDataGrid = new Array(9).fill(null);

    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly">
            {data.length ?
                data.map((item, i)=>{
                    return <GameCard key={item.id} id={item.id} game={item.game} description={item.description} rank={i+1} hashtags={item.hashtags} /*handleGameSelection={handleGameSelection}*/ />
                    // return <GameCard key={item.id} game={item.game} description={item.description} rank={i+1} hashtags={item.hashtags} />
                })
                : noDataGrid.map((item, i)=>{
                    return <GameCardSkeleton key={i} />
                })
            }
        </div>
    );
}

export default GameGrid;
