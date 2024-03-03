import React from 'react'
import ratingImage from '../public/img/rating.png'
import appleImage from '../public/img/apple.webp'
import Image from 'next/image'







const Rating = () => {


    return (
        <div className='py-16 md:py-32 px-16 md:px-48 flex flex-col md:flex-row md:justify-center md:space-x-12'>
            <div className='max-w-[300px] lg:max-w-[400px]'>
                <div className='flex space-x-4'>
                    <div className='text-neutral-300 large-rating  font-bold flex justify-center items-center'>4.8</div>
                    <div className='text-neutral-300 text-4xl lg:text-6xl font-bold flex justify-center items-center'>app store</div>
                </div>
                <div >
                    <Image src={ratingImage} alt='star' className='h-5 lg:h-6 w-auto' />
                </div>
                <div className='mt-12 hidden md:flex'>
                    <button className='py-4 px-8 text-black rounded-full bg-neutral-100 font-semibold text-lg lg:text-2xl'>
                        <div className='flex space-x-2 lg:space-x-4 items-center'>
                            <Image src={appleImage} alt='apple' className='h-8 lg:h-12 w-auto' />
                            <p>Download the app</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className='max-w-[300px] lg:max-w-[400px]'>
                <div className='flex space-x-4'>
                    <div className='text-neutral-300 large-rating font-bold flex justify-center items-center'>4.8</div>
                    <div className='text-neutral-300 text-4xl lg:text-6xl font-bold flex justify-center items-center'>play store</div>
                </div>
                <div >
                    <Image src={ratingImage} alt='star' className='h-5 lg:h-6 w-auto' />
                </div>
                <div className='mt-12 hidden md:flex'>
                    <button className='py-4 px-8 text-black rounded-full bg-neutral-100 font-semibold text-lg lg:text-2xl'>
                        <div className='flex space-x-2 lg:space-x-4 items-center'>
                            <Image src={appleImage} alt='apple' className='h-8 lg:h-12 w-auto' />
                            <p>Download the app</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rating
