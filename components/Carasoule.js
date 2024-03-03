import React from 'react'
import Slider from 'react-slick'



const Carasoule = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
    }

    return (
        <div className='flex justify-start md:justify-center pb-24'>
            <div className='slick w-full carsoule cursor-pointer text-xl'>
                <Slider {...settings} >
                    <div className='p-2 flex flex-col space-y-8 justify-center items-center text-left md:text-center'>
                        <div className='text-neutral-300 '>
                            "in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."
                        </div>
                        <div className='text-neutral-300 text-lg '>ranesh bhattacharya</div>
                    </div>
                    <div className='p-2 flex flex-col space-y-8 justify-center items-center text-left md:text-center'>
                        <div className='text-neutral-300 '>
                            "great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."
                        </div>
                        <div className='text-neutral-300 text-lg '>jagadeeswar reddy singam</div>
                    </div>
                    <div className='p-2 flex flex-col space-y-8 justify-center items-center text-left md:text-center'>
                        <div className='text-neutral-300 '>
                            "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"
                        </div>
                        <div className='text-neutral-300 text-lg '>ranesh bhattacharya</div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carasoule
