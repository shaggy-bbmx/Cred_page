import React from 'react'
import DogImage from '../public/img/Dog.webp'



const Security = () => {
    return (
        <div style={{
            backgroundImage: `url(${DogImage.src})`,

        }} className='bg-cover dog-cover w-full  md:bg-center pb-12 md:pb-auto'>
            <div className='max-w-[200px] md:max-w-[400px] lg:max-w-[650px] font-bold text-6xl lg:text-8xl tracking-tight text-neutral-300'>security first. and second.</div>
            <div className='mt-6 max-w-[300px] font-bold text-xl md:text-3xl text-neutral-300'>what's yours remains only yours.</div>
            <div className='mt-32 md:mt-6 font-bold text-lg max-w-[450px] md:max-w-[580px] lg:max-w-[640px] text-neutral-300'>
                CRED ensures that all your personal data and transactions are encrypted, and secured so what's yours remains only yours. there's no room for mistakes because we didn't leave any.
            </div>
            <div className='mt-8 md:mt-16 '>
                <button className='py-4 px-8 text-black rounded-full bg-neutral-100 font-bold text-xl md:text-2xl'>
                    Become a member
                </button>
            </div>
        </div>
    )
}

export default Security
