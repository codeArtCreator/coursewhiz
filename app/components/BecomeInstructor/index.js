import React from 'react'

const BecomeInstructor = () => {
    return (
        <div className='become-instructor'>
            <div className='become-instructor-inner'>
                <div className='become-instructor-inner-left'>
                    <img className='bi-img1' src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698416439/course-whiz/front-view-young-bearded-man-suit-straightening-his-tie-dark-wall_140725-97218_nr2yek.jpg' alt='' />
                    <img className='bi-img2' src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698416398/course-whiz/portrait-serious-concentrated-man-white-shirt_171337-17406_tohw2b.jpg' alt='' />
                    <img className='bi-img3' src='https://res.cloudinary.com/dq0ns677p/image/upload/v1698416281/course-whiz/smiling-positive-brunette-brown-eyed-lady-stylish-outfit-posing-beige-room_197531-14214_zy1mw5.jpg' alt='' />
                </div>

                <div className='become-instructor-inner-right'>
                    <p className='bi'>BECOME AN INSTRUCTOR</p>
                    <p className='jsk'>Join us & Spread Knowledge</p>
                    <p className='bi-para'>Instructors from around the world teach millions of students on vault.<br />We provide the tools and skills to teach what you love.</p>
                    <button>Start Teaching Now</button>
                </div>
            </div>
        </div>
    )
}

export default BecomeInstructor