import React, { useEffect, useState } from 'react'
import bgCover from '../public/img/bgCover.jpg'
import mobilebgCover from '../public/img/deserve-more-bg-mobile.webp'




const Lounge = () => {

    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
            setScreenSize(window.innerWidth)
        }

        // Remove event listener on component unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        };
    }, []);


    const determineBackgroundImage = () => {
        if (screenSize && screenSize <= 768) {
            return mobilebgCover.src;
        } else {
            return bgCover.src;
        }
    };

    return (
        <div style={{
            backgroundImage: `url(${determineBackgroundImage()})`,

        }} className='bg-cover lounge-cover w-full bg-right md:bg-center pb-12 md:pb-auto'>
            <div className='max-w-[250px] md:max-w-[400px] lg:max-w-[650px] font-bold text-6xl lg:text-8xl tracking-tight text-neutral-300'>feel special more often.</div>
            <div className='mt-6 font-bold text-3xl text-neutral-300'>exclusive rewards for paying your bills</div>
            <div className='mt-[120%] md:mt-6 font-bold text-lg max-w-[580px] lg:max-w-[640px] text-neutral-300'>
                every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.
            </div>
            <div className='mt-8 md:mt-16 '>
                <button className='py-4 px-8 text-black rounded-full bg-neutral-100 font-bold text-xl md:text-2xl'>
                    Explore Rewards
                </button>
            </div>
        </div>
    )
}

export default Lounge
