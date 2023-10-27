import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const StartLearning = () => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };
    const data = [
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Development',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698328884/course-whiz/developement_wandfq.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Design',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336010/course-whiz/design_f7c65e.png',
            lessons: '22',
            duration: '10hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Marketing',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336118/course-whiz/marketing_tlfkbh.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Design',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336624/course-whiz/design2_fass1b.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Music',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336702/course-whiz/music_iej0me.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Personal Development',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336863/course-whiz/personaldev_bcfet0.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Photography',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336879/course-whiz/photography_ptufn4.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        },
        {
            title: 'The Complete Graphic Design Theory for Beginners Course',
            category: 'Development',
            image: 'https://res.cloudinary.com/dq0ns677p/image/upload/v1698336863/course-whiz/developement2_hyhlte.png',
            lessons: '24',
            duration: '12hr 30mins',
            author: 'John Doe',
            price: '5.45',
            discount_price: '5.40',
            rating: '4.5',
            rating_count: '24'
        }

    ]
    return (
        <div className='start-learning'>
            <div className='start-learning-head'>
                <p className='sl'>START LEARNING</p>
                <p className='cgys'>Courses to Get You Started</p>
                <div className='start-learning-cat'>
                    <button
                        className={activeButton === 0 ? 'active' : ''}
                        onClick={() => handleButtonClick(0)}
                    >
                        Most Popular
                    </button>
                    <button
                        className={activeButton === 1 ? 'active' : ''}
                        onClick={() => handleButtonClick(1)}
                    >
                        Top Diplomas
                    </button>
                    <button
                        className={activeButton === 2 ? 'active' : ''}
                        onClick={() => handleButtonClick(2)}
                    >
                        Beginner Favourites
                    </button>
                    <button
                        className={activeButton === 3 ? 'active' : ''}
                        onClick={() => handleButtonClick(3)}
                    >
                        New Courses
                    </button>
                </div>
            </div>

            <div className='start-learning-courses'>
                {data && data.map((val) => (
                    <div className='card-section'>
                        <img
                            width='100%'
                            height={200}
                            objectFit='contain'
                            src={val.image}
                            alt='developement'
                        />
                        <div className='card-data'>
                            <div>
                                <p className='cat'>
                                    {val.category}
                                </p>
                                <p>
                                    {val.rating}
                                    <Icon icon="ic:round-star" color="#ffe234" width="24" height="24" />
                                    {val.rating_count}
                                </p>
                            </div>

                            <p>The Complete Graphic Design <br />Theory for Beginners Course</p>

                            <div>
                                <p>
                                    <Icon icon="material-symbols:play-lesson" color="#ffcb8f" width="18" height="18" />
                                    24 Lessons
                                </p>
                                <p>
                                    <Icon icon="gridicons:time" color="#ffcb8f" width="18" height="18" />
                                    12hr 30mins
                                </p>
                            </div>
                            <div id='card-bottom' className=''>
                                <p>by John Doe</p>
                                <p style={{ fontWeight: 'bold' }}>$ 5.45 <span style={{ textDecoration: 'line-through', fontWeight: '400' }}>$5.45</span></p>
                            </div>
                        </div>


                    </div>
                ))}



            </div>

            <button className='explore-btn'>
                Explore All Courses
                <Icon icon="mdi:arrow-right-thin" color="#3540e8" width="24" height="24" />
            </button>
        </div>
    )
}

export default StartLearning