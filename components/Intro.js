import React from 'react'

const Intro = () => {
    return (
        <div className='w-full px-8 md:px-16 lg:px-44 flex md:justify-center mt-32 md:mt-auto'>
            <div className='flex flex-col  md:justify-center md:items-center w-[50%] md:w-full'>
                <div className='text-neutral-100  font-bold big-text md:text-center px-2  lg:px-8 md:leading-tight'>
                    rewards for paying credit card bills.
                </div>
                <div className='text-neutral-100 font-bold md:text-center md:px-12 text-lg md:text-xl lg:text-2xl mt-12'>
                    join 9M+ members who win rewards and cashbacks everyday
                </div>
                <div className='flex justify-start w-[240px] md:w-auto md:justify-center md:items-center mt-8 md:mt-16'>
                    <button className='w-full h-full py-3 md:py-4 px-8 md:px-16 text-black rounded-full bg-neutral-100 font-bold text-xl md:text-2xl'>
                        Download CRED
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Intro
