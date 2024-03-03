import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import mb_1 from '../public/img/mb-1.webp'
import mb_2 from '../public/img/mb-2.webp'
import mb_3 from '../public/img/mb-3.webp'
import Image from 'next/image'





const SpinWheel = () => {

    const ImgArray = [mb_1, mb_2, mb_3]

    const divRef1 = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);


    const [isFirstTopIsInView, setIsFirstTopIsInView] = useState(false)
    const [isSecondTopIsInView, setIsSecondTopIsInView] = useState(false)
    const [isThirdTopIsInView, setIsThirdTopIsInView] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const [mobileWidth, setMobileWidth] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (divRef1.current) {
                const rect = divRef1.current.getBoundingClientRect();
                const topIsInView = rect.top >= 0 && rect.top <= window.innerHeight;

                if (topIsInView) {
                    setIsFirstTopIsInView(true)
                    setCurrentImage(0)
                } else {
                    setIsFirstTopIsInView(false)
                }
            }

            if (divRef2.current) {
                const rect = divRef2.current.getBoundingClientRect();
                const topIsInView = rect.top >= 0 && rect.top <= window.innerHeight;

                if (topIsInView) {
                    setIsSecondTopIsInView(true)
                    setCurrentImage(1)
                } else {
                    setIsSecondTopIsInView(false)
                }
            }

            if (divRef3.current) {
                const rect = divRef3.current.getBoundingClientRect();
                const topIsInView = rect.top >= 0 && rect.top <= window.innerHeight;

                if (topIsInView) {
                    setIsThirdTopIsInView(true)
                    setCurrentImage(2)
                } else {
                    setIsThirdTopIsInView(false)
                }
            }
        };

        // Initial check
        handleScroll();

        // Check on scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [divRef1]);



    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth
            if (screenWidth >= 1024) setMobileWidth(320)
            else setMobileWidth(280)
        }

        // Initial calculation
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='px-8 md:px-16 lg:px-32 xl:px-64 flex flex-col md:flex-row  justify-between md:items-center w-full'>
            <div className=' w-full md:w-1/2 py-16 sm:py-64'>

                <div ref={divRef1} className={`mb-[40vh] md:mb-[80vh] lg:mb-[20vh] md:opacity-0 transition-all ${isFirstTopIsInView ? 'md:opacity-100' : ''}`}>
                    <div className='text-5xl lg:text-7xl xl:text-8xl  text-neutral-300 font-bold w-full sm:w-[70%]'>we’ve got your back.</div>
                    <div className='p-4 flex md:hidden  h-[70vh] w-[280px] border-style mt-12'>
                        <Image src={ImgArray[0]} alt='mb-1' />
                    </div>
                    <div className='text-lg text-neutral-300 font-semibold mt-16 w-full lg:w-[80%]'>
                        gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.
                    </div>
                </div>

                <div ref={divRef2} className={`mb-[40vh] md:mb-[80vh] lg:mb-[20vh] md:opacity-0 transition-all ${isSecondTopIsInView ? 'md:opacity-100' : ''}`}>
                    <div className='text-5xl lg:text-7xl xl:text-8xl text-neutral-300 font-bold w-full sm:w-[70%] '>
                        begin your winning streak.
                    </div>
                    <div className='p-4 flex md:hidden  h-[70vh] w-[280px] border-style mt-12'>
                        <Image src={ImgArray[1]} alt='mb-1' />
                    </div>
                    <div className='text-lg text-neutral-300 font-semibold mt-16 w-full lg:w-[80%]'>
                        gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.
                    </div>
                </div>

                <div ref={divRef3} className={`mb-[40vh] md:mb-[80vh] lg:mb-[20vh] md:opacity-0 transition-all ${isThirdTopIsInView ? 'md:opacity-100' : ''}`}>
                    <div className='text-5xl lg:text-7xl xl:text-8xl text-neutral-300 font-bold w-full sm:w-[70%] '>
                        more cash in your pockets.
                    </div>
                    <div className='p-4 flex md:hidden  h-[70vh] w-[280px] border-style mt-12'>
                        <Image src={ImgArray[2]} alt='mb-1' />
                    </div>
                    <div className='text-lg text-neutral-300 font-semibold mt-16 w-full lg:w-[80%]'>
                        switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.
                    </div>
                </div>
            </div>
            <div className='h-[400vh] w-1/2  hidden md:flex  justify-center  py-16 '>
                <div className='p-4 h-[70vh] w-[280px] lg:h-[80vh] lg:w-[320px] xl:h-[80vh] xl:w-[320px] border-style sticky top-32 overflow-hidden'>
                    <div style={{ transform: `translateX(-${currentImage * 100}%)` }} className={`h-full w-[${3 * mobileWidth}px] flex transition-all `}>
                        <Image src={ImgArray[0]} alt='multi-image' />
                        <Image src={ImgArray[1]} alt='multi-image' />
                        <Image src={ImgArray[2]} alt='multi-image' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SpinWheel
