import React from 'react'
import parallaxImage from '../public/img/neopop-image-mock.webp'
import Image from 'next/image'


const Parallax = () => {
    { console.log(parallaxImage) }

    return (
        <div className='w-full h-[80vh] bg-cover'
            style={{
                minHeight: '200px',
                backgroundAttachment: 'fixed',
                backgroundImage: `url(${parallaxImage.src})`
            }}>
        </div>
    )
}

export default Parallax
