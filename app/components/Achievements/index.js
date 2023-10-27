import React from 'react'
import { Icon } from '@iconify/react'

const Achievements = () => {
    return (
        <div className='achievements-main'>
            <div className='achievements-left'>
                <div className='ach-left-section'>
                    <img
                        height={400}
                        width={350}
                        src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698379749/course-whiz/achievements_h743sc.png'
                        alt='coursewhiz-achievements'
                    />
                    <div className='ach-empty'>

                    </div>
                </div>
            </div>
            <div className='achievements-right'>
                <p className='sl'>ACHIEVEMENTS</p>
                <p className='our-ach'>Our Achievements</p>
                <div className='ach-data'>
                    <div>
                        <p className='ach-icon'>
                            <Icon icon="majesticons:user-box-line" color="white" width="35" height="35" />
                        </p>
                        <p className='ach-info'>
                            350+ <br />
                            <span className='ach-info-ar'>Tutors</span>
                        </p>
                    </div>
                    <div>
                        <p className='ach-icon'>
                            <Icon icon="majesticons:user-box-line" color="white" width="35" height="35" />
                        </p>
                        <p className='ach-info'>
                            350+ <br />
                            <span className='ach-info-ar'>Tutors</span>
                        </p>
                    </div>
                    <div>
                        <p className='ach-icon'>
                            <Icon icon="majesticons:user-box-line" color="white" width="35" height="35" />
                        </p>
                        <p className='ach-info'>
                            350+ <br />
                            <span className='ach-info-ar'>Tutors</span>
                        </p>
                    </div>
                    <div>
                        <p className='ach-icon'>
                            <Icon icon="majesticons:user-box-line" color="white" width="35" height="35" />
                        </p>
                        <p className='ach-info'>
                            350+ <br />
                            <span className='ach-info-ar'>Tutors</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Achievements