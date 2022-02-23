import React from 'react';

type Props = {};

function GameCardSkeleton({}: Props) {

    return (
        <div className="animate-pulse bg-gray-300/5 rounded-2xl flex flex-grow">
            <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        {
                            [...Array(6)].map((element, i)=>{
                                return <div key={i} className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCardSkeleton;
