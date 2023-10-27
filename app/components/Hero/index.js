import React from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='hero-outer'>
            <div className='hero-section'>
                <div className='hero-left'>
                    <p className='hero-head'><span>Let&#39;s <span className='learn'>Learn</span> New Course &amp; Gain More Skills</span></p>

                    <p className='hero-para'>A solution for easy and flexible online learning, you can study anywhere through this platform.</p>
                    <button>
                        Explore All Courses
                        <Icon icon="mdi:arrow-right-thin" color="white" width="24" height="24" />
                    </button>
                </div>
                <div className='hero-right'>
                    <Image
                        width={600}
                        height={500}
                        src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698306924/course-whiz/coursewhiz-hero_prxrdy.png'
                    />
                </div>
            </div>
        </div >
    )
}

export default Hero