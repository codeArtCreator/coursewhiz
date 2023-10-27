import React from 'react'
import { Icon } from '@iconify/react'

const Categories = () => {
    return (
        <div className='categories-section'>
            <div className='cat-head'>
                <p className='ct'>CATEGORIES</p>
                <p className='eoc'>Explore 4000+ Online Courses</p>
            </div>
            <div className='cat-courses'>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>Design</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>IT and Software</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>Photography</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>Personal</p>
                    <p className='cat-course-head'>Developement</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>Marketing</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>Business</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course'>
                    <Icon icon="fluent:code-block-24-regular" color="#fed3a0" width="50" height="50" />
                    <p className='cat-course-head'>Music</p>
                    <p className='cat-course-para'>64+ Courses</p>
                </div>
                <div className='cat-course-more'>
                    <p className='cat-course-head'>20+</p>
                    <p className='cat-course-para'>More Categories</p>
                    <Icon icon="teenyicons:arrow-right-solid" color="white" width="24" height="24" />
                </div>
            </div>

        </div>
    )
}

export default Categories