import React from 'react'
import { Icon } from '@iconify/react'
import Newsletter from '../Newsletter'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo-sec'>
                <h1 className='footer-logohead'>Course<span className=''>Whiz</span></h1>
            </div>
            <div className='footer-con'>
                <p>CourseWhiz Business</p>
                <p>Teach on CourseWhiz</p>
                <p>About us</p>
                <p>Terms & Privacy Policy</p>
                <p>Help and Support</p>
            </div>
            <div className='footer-icons'>
                <Icon icon="ant-design:facebook-outlined" color="white" width="30" height="30" />
                <Icon icon="fa-brands:instagram" color="white" width="30" height="30" />
                <Icon icon="jam:twitter-square" color="white" width="30" height="30" />
                <Icon icon="circum:linkedin" color="white" width="30" height="30" />
            </div>
            <Newsletter />
        </div>
    )
}

export default Footer