import React, { useEffect, useState, useRef } from 'react'
import center from '../public/img/neopop-center.webp'
import left1 from '../public/img/neopop-left-1.webp'
import left2 from '../public/img/neopop-left-2.webp'
import right1 from '../public/img/neopop-right-1.webp'
import right2 from '../public/img/neopop-right-2.webp'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'

const Features = () => {

    const [firstTime, setFirstTime] = useState(false)

    const componentRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setFirstTime(true)
                    console.log('yes')
                }
            })
        }, { threshold: 0.5 })

        if (componentRef.current) {
            observer.observe(componentRef.current)
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        }

    }, [])


    return (
        <div ref={componentRef} className='flex  relative justify-center items-end w-full outer-box  overflow-hidden'>
          
            <Image className={`absolute z-10 w-auto transition-transform duration-500 
            ${firstTime ? 'move-left2' : ''} smartphone-box bottom-[-1000px]`} src={left2} alt='left2' />

            <Image className={`absolute z-20 w-auto transition-transform duration-500 
            ${firstTime ? 'move-left1' : ''} smartphone-box bottom-[-1000px]`} src={left1} alt='left1' />

            <Image className={`absolute z-30 w-auto transition-transform duration-500 
            ${firstTime ? 'move-center' : ''} smartphone-box bottom-[-1000px]`} src={center} alt='center' />
            
            <Image className={`absolute z-20 w-auto transition-transform duration-500 
            ${firstTime ? 'move-right1' : ''} smartphone-box bottom-[-1000px]`} src={right1} alt='right1' />

            <Image className={`absolute z-10 w-auto smartphone-box transition-transform duration-500 
            ${firstTime ? 'move-right2' : ''} bottom-[-1000px]`} src={right2} alt='right2' />

        </div >
    )
}

export default Features 
