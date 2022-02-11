import React from 'react';
import Image from 'next/image'

type Props = {};

function Navbar({}: Props) {
    return (
    // <nav>
    //     <div classNameName="flex justify-between item-center">
    //         <h1 classNameName="">Gimme Games</h1>
    //         <p>One</p>
    //         <p>Two</p>
    //         <p>Three</p>
    //     </div>
    // </nav>
    <nav className="flex items-center justify-between flex-wrap p-6 rounded-t-lg bg-black/50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
            <Image className="w-full" src="/../public/icon.png" alt="website logo" width="70" height="70"/>
            <span className="font-semibold text-3xl tracking-tight mr-5">Gimme Games</span>
        </div>
        <div className="block sm:hidden transition ease-in-out delay-100 hover:scale-110 transform duration-300">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white hover:bg-white hover:text-black">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        {/* edit flex grow to move nav to right */}
        <div className="hidden lg:visible w-full block sm:flex sm:w-auto sm:ml-5 flex-grow">
            <div className="text-lg sm:flex-grow mt-3">
                <a href="#responsive-header" className="block sm:inline-block text-white mr-10 hover:text-blue-300 transition ease-in-out delay-100 hover:scale-110">
                    Games
                </a>
                <a href="#responsive-header" className="block sm:inline-block text-white mr-10 hover:text-orange-300 transition ease-in-out delay-100 hover:scale-110">
                    Stats
                </a>
                <a href="#responsive-header" className="block sm:inline-block text-white mr-10 hover:text-green-300 transition ease-in-out delay-100 hover:scale-110">
                    About
                </a>
            </div>
            <div>
                <a href="#" className="transition ease-in-out delay-100 hover:scale-110 transform duration-300 inline-block text-lg px-4 py-3 leading-none border rounded text-white border-white hover:text-black hover:bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">Play Random Game</a>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;

