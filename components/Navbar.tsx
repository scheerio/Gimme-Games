import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { GAME_NAMES_FOR_PATH } from '../static/app/app_constants';

/* This is nav for the site and includes mobile nav */

type NavbarProps = {
};

function Navbar({}: NavbarProps) {

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

    const router = useRouter()

    const handleMobileMenuClick = () => {
        setMobileMenuOpened(prev=>!prev);
    };

    const handleMobileMenuReroute = (e: React.MouseEvent<HTMLElement>, path: string) => {
        e.preventDefault();
        if (router.asPath != path){
            router.push(path);
        }
        handleMobileMenuClick();
    };

    const handleSelectRandomGame = () => {
        if (mobileMenuOpened){
            setMobileMenuOpened(prev=>!prev);
        }
        const newGamePath: string = GAME_NAMES_FOR_PATH[Math.floor(Math.random() * GAME_NAMES_FOR_PATH.length)];
        router.push(newGamePath);
    }

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 rounded-t-lg bg-black/50 overflow-x-hidden">
            <div className="flex items-center flex-shrink-0 text-white mr-0">
                <Link href="/">
                    <a className="flex flex-row">
                        <Image className="w-full" src="/../public/icon.png" alt="website logo" width="60" height="60"/>
                        <span className="mt-3 font-semibold text-3xl tracking-tight sm:mr-5">GimmePuzzles</span>
                    </a>
                </Link>
            </div>
            <div className="block sm:hidden transition ease-in-out delay-100 hover:scale-110 transform duration-300">
                <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white hover:bg-white hover:text-black" onClick={handleMobileMenuClick}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            {/* Determines mobile menu rendering or just normal nav */}

            {mobileMenuOpened ? (
                <>
                <div
                    className="transition ease-in-out delay-100 transform duration-300 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-screen my-6 mx-20 max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="text-black flex items-start justify-end rounded-t">
                        <button className="scale-110 pr-5 pt-4" onClick={handleMobileMenuClick}>✖</button>
                        </div>
                        {/*body*/}
                        <div className="text-black relative pb-6 flex-auto flex items-center justify-center text-center">
                            <nav>
                                {/* <Link href="/"><a onClick={handleMobileMenuClick} className="block p-3 text-xl hover:text-blue-300 transition ease-in-out delay-100 hover:scale-110">Puzzles</a></Link> */}
                                <a onClick={(e)=>handleMobileMenuReroute(e, '/')} className="block p-3 text-xl hover:text-blue-300 transition ease-in-out delay-100 hover:scale-110">Puzzles</a>
                                {/* <Link href="/stats"><a className="block p-3 text-3xl hover:text-orange-300 transition ease-in-out delay-100 hover:scale-110">Stats</a></Link> */}
                                {/* <Link href="/about"><a onClick={handleMobileMenuClick} className="block p-3 text-xl hover:text-green-300 transition ease-in-out delay-100 hover:scale-110">About</a></Link> */}
                                <a onClick={(e)=>handleMobileMenuReroute(e, '/about')} className="block p-3 text-xl hover:text-green-300 transition ease-in-out delay-100 hover:scale-110">About</a>
                                <a className="mt-2 transition ease-in-out delay-100 hover:scale-110 transform duration-300 inline-block text-xl px-4 py-3 leading-none border rounded text-black border-white hover:text-black bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100" onClick={handleSelectRandomGame}>Play Random Game</a>
                            </nav>
                        </div>
                        {/*footer*/}
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/* </div> */}
            {/* edit flex grow to move nav to right */}
            <div className="hidden lg:visible w-full block sm:flex sm:w-auto sm:ml-5 flex-grow">
                <div className="text-lg sm:flex-grow mt-3">
                    <Link href="/"><a className="block sm:inline-block text-white mr-10 hover:text-blue-300 transition ease-in-out delay-100 hover:scale-110">Puzzles</a></Link>
                    {/* <Link href="/stats"><a className="block sm:inline-block text-white mr-10 hover:text-orange-300 transition ease-in-out delay-100 hover:scale-110">Stats</a></Link> */}
                    <Link href="/about"><a className="block sm:inline-block text-white mr-10 hover:text-green-300 transition ease-in-out delay-100 hover:scale-110">About</a></Link>
                </div>
                <div>
                    <a className="transition ease-in-out delay-100 hover:scale-110 transform duration-300 inline-block text-lg px-4 py-3 leading-none border rounded text-white border-white hover:text-black hover:bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100" onClick={handleSelectRandomGame}>Play Random Game</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

