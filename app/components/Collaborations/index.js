import React from 'react'
import { Icon } from '@iconify/react'

const Collaborations = () => {
    return (
        <div className='collab'>
            <div>
                <p className='tit'>
                    We collaborate with 275+ leading universities and companies
                </p>
            </div>
            <div className='collab-companies'>
                <p>
                    <Icon icon="ri:microsoft-fill" color="#a2a3c1" width="24" height="24" />
                    <span>Microsoft</span>
                </p>
                <p>
                    <Icon icon="simple-icons:ibm" color="#a2a3c1" width="50" height="50" />                </p>
                <p>
                    Google
                </p>
                <p>
                    <Icon icon="simple-icons:ibm" color="#a2a3c1" width="50" height="50" />                </p>
                <p></p>
                <p>
                    <Icon icon="ri:microsoft-fill" color="#a2a3c1" width="24" height="24" />
                    <span>Microsoft</span>
                </p>

            </div>
        </div>
    )
}

export default Collaborations