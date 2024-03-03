import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import credLogo from '../public/img/cred-logo.png'





const SliderNavbar = () => {

    const [scrolling, setScrolling] = useState(false)
    const [yDistance, setYDistance] = useState(0)

    useEffect(() => {

        const handleScroll = () => {
            const navbar = document.getElementById('navbar')
            if (window.scrollY > yDistance || yDistance < 170) {
                navbar.style.top = '-200px'
            } else if (window.scrollY < yDistance) {
                navbar.style.top = '0px'
            }
            setYDistance(window.scrollY)
        }


        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [yDistance])



    return (
        <div id='navbar' className='w-full bg-black opacity-75 z-40 px-16 lg:px-44 flex navbar-animation justify-between py-8 items-center'>
            <Image src={credLogo} alt='cred-logo' className='h-16 w-12' />
            <div className='flex justify-end space-x-16 items-center'>
                <div className='font-semibold text-lg text-neutral-300 cursor-pointer'><a src='/'>credit score check</a></div>
                <div className='font-semibold text-lg text-neutral-300 cursor-pointer'><a>CRED pay</a></div>
            </div>
        </div>
    )
}

export default SliderNavbar
