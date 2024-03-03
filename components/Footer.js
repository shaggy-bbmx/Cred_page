import Image from 'next/image'
import React, { useState } from 'react'
import credLogo from '../public/img/footer-logo.webp'
import brands from '../public/img/footer-brands.webp'



const Footer = () => {

    const [tab1, settab1] = useState(false)
    const [tab2, settab2] = useState(false)
    const [tab3, settab3] = useState(false)
    const [tab4, settab4] = useState(false)


    return (
        <div className='flex flex-col py-32 sm:py-64 px-8 md:px-16 lg:px-32 w-full'>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full md:w-1/2'>
                    <div className='flex w-1/2'>
                        <Image src={credLogo} className='w-40' alt='cred logo' />
                    </div>
                    <div className='flex mt-20'>
                        <Image src={brands} className='w-[80%] md:w-[74%] xl:w-96' alt='brands' />
                    </div>
                    <div className='text-lg xl:text-xl text-neutral-200 font-bold mt-6 md:mt-12'>
                        complete security. no asterisks.
                    </div>
                    <div className=' text-neutral-300 mt-6 text-sm md:text-md xl:text-xl w-[905] md:w-[72%] leading-loose'>
                        CRED encrypts all data and transactions to ensure a completely secure experience for our members.
                    </div>
                </div>
                <div className=' mt-16 md:mt-auto w-full md:w-1/2'>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='flex flex-col w-full sm:w-1/2 sm:mt-0'>
                            <div className='w-full h-[1px] bg-neutral-200 flex sm:hidden'></div>
                            <div className='text-md md:text-lg xl:text-xl text-neutral-200 font-bold sm:mt-0 mt-4 flex justify-between'>
                                <div>products</div>
                                <button
                                    onClick={() => settab1(!tab1)}
                                    className={`text-3xl font-light transition-all relative bottom-2 flex  items-start  sm:hidden ${tab1 ? 'rotate-45' : ''}`}>+</button>
                            </div>
                            <div className={` ${tab1 ? 'flex flex-col' : 'hidden sm:flex sm:flex-col'}`}>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%] '>CRED pay</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%] '>credit score check</div>
                            </div>

                            <div className='w-full h-[1px] bg-neutral-200 mt-8 sm:mt-auto flex sm:hidden'></div>
                            <div className='text-md md:text-lg xl:text-xl text-neutral-200 font-bold mt-4 sm:mt-32 md:mt-24 lg:mt-32 flex justify-between'>
                                <div>resources</div>
                                <button
                                    onClick={() => settab2(!tab2)}
                                    className={`text-3xl font-light transition-all relative bottom-2 flex  items-start  sm:hidden ${tab2 ? 'rotate-45' : ''}`}>+</button>
                            </div>
                            <div className={` ${tab2 ? 'flex flex-col' : 'hidden sm:flex sm:flex-col'}`}>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>articles</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>tech blogs</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>calculators</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>credit card payment</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>guide</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>credit score guide</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>Dreampurse (HipBar)</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>wallet refund form</div>
                            </div>

                        </div>
                        <div className='flex flex-col w-full sm:w-1/2 mt-8  sm:mt-0'>
                            <div className='w-full h-[1px] bg-neutral-200 flex sm:hidden'></div>
                            <div className='text-md md:text-lg xl:text-xl text-neutral-200 font-bold mt-4 sm:mt-0 flex justify-between'>
                                <div>CRED</div>
                                <button
                                    onClick={() => settab3(!tab3)}
                                    className={`text-3xl font-light relative transition-all bottom-2 flex  items-start  sm:hidden ${tab3 ? 'rotate-45' : ''}`}>+</button>
                            </div> z
                            <div className={` ${tab3 ? 'flex flex-col' : 'hidden sm:flex sm:flex-col'}`}>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%] '>about</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%] '>careers</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%] '>PIL</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%] '>customer care</div>
                            </div>

                            <div className='w-full h-[1px] bg-neutral-200 mt-12 flex sm:hidden'></div>
                            <div className='text-md md:text-lg xl:text-xl text-neutral-200 font-bold mt-4 sm:mt-12 flex justify-between '>
                                <div>policy</div>
                                <button
                                    onClick={() => settab4(!tab4)}
                                    className={`text-3xl font-light relative transition-all bottom-2 flex  items-start  sm:hidden ${tab4 ? 'rotate-45' : ''}`}>+</button>
                            </div>
                            <div className={` ${tab4 ? 'flex flex-col' : 'hidden sm:flex sm:flex-col'}`}>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>security</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>investor relations</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>transaction & user verification</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>google API disclosure</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>UPI faq & grievances</div>
                                <div className='text-neutral-400 mt-3 text-md xl:text-xl w-[72%]'>equal opportunity policy</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full mt-32'>
                <div className='w-full md:w-1/2'>
                    <div className='text-neutral-500 w-full md:w-[90%] xl:w-full text-sm md:text-md'>
                        copyright &#169; 2020-23 Dreamplug Technologies Pvt Ltd.
                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-8 md:mt-auto'>
                    <div className='flex flex-row'>
                        <div className='text-neutral-400 pr-4 border-r-2 text-sm md:text-md xl:text-xl border-neutral-400'>privacy policy</div>
                        <div className='text-neutral-400 px-4 border-r-2 text-sm md:text-md xl:text-xl border-neutral-400'>terms and conditions</div>
                        <div className='text-neutral-400 px-4  text-sm md:text-md xl:text-xl border-neutral-400'>returns and refund</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
