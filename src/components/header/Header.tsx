import Image from 'next/image'
import React from 'react'
import Logo from "./Logo.svg";
import SearchBar from './SearchBar';
import IconIndicator from "./Icon Indicator.svg"
import Calendar from "./calendar.svg"
import GridLayoutIcon from "./layout-grid.svg"
import Avatar from "./Avatar.svg"

function Header() {
    return (
        <>
            <div className='flex flex-row items-center justify-between w-full md:mx-auto px-4 py-3 w-full bg-white' >

                {/* logo */}
                <div>
                    <Image
                        src={Logo}
                        alt='logo'
                    />
                </div>

                {/* search bar */}
                <div className='hidden md:block' >
                    <SearchBar />
                </div>

                {/* profile icon */}
                <div className='flex flex-row gap-4' >
                    <Image className='hidden md:block' src={IconIndicator} alt='' />
                    <Image className='hidden md:block' src={Calendar} alt='' />
                    <Image className='hidden md:block' src={GridLayoutIcon} alt='' />
                    <Image src={Avatar} alt='' />
                </div>

            </div>
            <div className='md:hidden w-full pb-5' >
                <SearchBar />
            </div>
        </>

    )
}

export default Header