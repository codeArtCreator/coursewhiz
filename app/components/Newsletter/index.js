import React from 'react'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <p className='nw'>NEWSLETTER</p>
            <p className='goe'>Get new offer's on your email</p>
            <p className='sub'>Subscribe to get tips and tactics to grow the way you want.</p>
            <div className='search-box'>
                <input type='text' placeholder='Your Email Address' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter