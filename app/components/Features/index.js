import React from 'react'
import { Icon } from '@iconify/react'

const Features = () => {
    return (
        <div className='features-section'>
            <div className='feat-head'>
                <p className='ft'>FEATURES</p>
                <p className='gyswc'>Grow Your Skills With CourseWhiz</p>
            </div>
            <div className='feat-content'>
                <div className='feat-content-card'>
                    <p className='feat-content-icon'>
                        <Icon icon="system-uicons:users" color="white" width="30" height="30" />
                    </p>
                    <p className='feat-content-head'>Expert Instructors</p>
                    <p className='feat-content-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </div>
                <div className='feat-content-card'>
                    <p className='feat-content-icon'>
                        <Icon icon="prime:book" color="white" width="30" height="30" />
                    </p>
                    <p className='feat-content-head'>Flexible Learning</p>
                    <p className='feat-content-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </div>
                <div className='feat-content-card'>
                    <p className='feat-content-icon'>
                        <Icon icon="bxs:badge-check" color="white" width="30" height="30" />
                    </p>
                    <p className='feat-content-head'>Official Certificate</p>
                    <p className='feat-content-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </div>
                <div className='feat-content-card'>
                    <p className='feat-content-icon'>
                        <Icon icon="icon-park-outline:wallet" color="white" width="30" height="30" />
                    </p>
                    <p className='feat-content-head'>Affordable Prices</p>
                    <p className='feat-content-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </div>

            </div>
            <div className='for-learners'>
                <p>For Learners</p>
                <p className='for-learners-head'>Take the next step toward <br /> your goals</p>
                <p>Start, switch, or advance your career with morethan 4000 courses,<br /> Professional Certificates, and degrees from world-class universities and<br /> companies.</p>
                <button>Let's get Started</button>
                <div className='for-learners-box'>
                    <img
                        height={450}
                        width={300}
                        src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698411735/course-whiz/proex-assessment-1_m031ok.png'
                        alt=''
                    />

                </div>
            </div>
        </div>
    )
}

export default Features