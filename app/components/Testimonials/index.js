import React from 'react'
import { Icon } from '@iconify/react'

const Testimonials = () => {

    return (
        <div className='testimonials'>
            <div className='testimonial-top'>
                <p className='tmon'>TESTMONIALS</p>
                <p className='wht'>What Our Students Say?</p>
            </div>
            <div className='swiper'>
                <div className='left'>
                    <Icon icon="zondicons:arrow-left" color="white" width="30" height="30" />
                </div>
                <div className='center'>
                    <div>
                        <img
                            height={400}
                            src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698416398/course-whiz/portrait-serious-concentrated-man-white-shirt_171337-17406_tohw2b.jpg'
                            alt=''
                        />
                    </div>
                    <div className='swiper-content'>
                        <p>
                            <Icon icon="fluent:comma-20-filled" color="#454dea" width="30" height="30" />
                            <Icon icon="fluent:comma-20-filled" color="#454dea" width="30" height="30" />
                        </p>
                        <p className='ctn'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className='swiper-name'>Charles A. Hoard</p>
                        <p className='ctn'>Student</p>
                        <p>
                            <Icon icon="ic:round-star" color="#feb92c" width="24" height="24" />
                            <Icon icon="ic:round-star" color="#feb92c" width="24" height="24" />
                            <Icon icon="ic:round-star" color="#feb92c" width="24" height="24" />
                            <Icon icon="ic:round-star" color="#feb92c" width="24" height="24" />
                            <Icon icon="ic:round-star" color="#feb92c" width="24" height="24" />
                        </p>
                    </div>
                </div>
                <div className='right'>
                    <Icon icon="zondicons:arrow-right" color="white" width="30" height="30" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials