import Image from 'next/image'
import React, { useState } from 'react'
import credLogo from '../public/img/cred-logo.png'
import { Turn as Hamburger } from 'hamburger-react'



const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <div className='w-full px-16 lg:px-44 flex justify-between py-16 items-center'>
            <Image src={credLogo} alt='cred-logo' className='h-16 w-12' />
            <div className='hidden md:visible md:flex justify-end space-x-16 items-center'>
                <div className='font-semibold text-lg text-neutral-300 cursor-pointer'><a src='/'>credit score check</a></div>
                <div className='font-semibold text-lg text-neutral-300 cursor-pointer'><a>CRED pay</a></div>
            </div>
            <div className='visible flex justify-center items-center z-50 md:hidden '>
                <button onClick={() => setIsNavOpen(!isNavOpen)}>
                    <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} size={40} direction='right' duration={0.3} color='rgb(212 212 212)' easing="ease-in" rounded />
                </button>
            </div>

            <div id="sideBar" className={`fixed top-0 right-0 bg-black pt-20  h-full  overflow-x-hidden duration-500 z-40 ${isNavOpen ? 'w-full' : 'w-0'} `}>
                <div className='flex flex-col px-4 py-20 space-y-4'>
                    <div className='p-8 bg-gray-900 rounded-xl text-neutral-300 text-xl font-semibold'>CRED pay</div>
                    <div className='p-8 bg-gray-900 rounded-xl text-neutral-300 text-xl font-semibold'>credit score check</div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
