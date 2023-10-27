import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='nav'>
                    <div className='left'>
                        <Image
                            src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698291275/course-whiz/logo_zchmty.png'
                            width={25}
                            height={25}
                            alt="logo of coursewhiz"
                        />
                        <h1 className='logohead'>Course<span className=''>Whiz</span></h1>
                    </div>
                    <div className='right'>
                        <Link href=''>Courses</Link>
                        <Link href=''>Projects</Link>
                        <Link href=''>Pricing</Link>
                        <Link href=''>For Business</Link>
                        <Link href=''>More</Link>
                        <Link href=''>
                            <Icon icon="ri:search-line" width="24" height="24" />
                        </Link>
                        <Link href=''>
                            <Icon icon="mdi:cart-outline" width="24" height="24" />
                        </Link>
                        <button className='btnsignin'>Sign in</button>
                        <button className='btntrial'>Start free trial</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar