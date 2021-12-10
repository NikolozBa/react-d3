import React from 'react'
import illustrationDE from '../img/illustrationDE.svg'
import '../Styles/Sections.css'

function SectionDE() {
    return (
        <div className='section'>
            <div>
                <img className='sectionImage'  src={illustrationDE}/>
            </div>

            <div className='sectionContent'>
                <h2>
                    Detailed Examination
                </h2>
                <div>
                    A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.
                </div>
                <a href='/learnMore'>
                    Learn more
                </a>
            </div>
        </div>
    )
}

export default SectionDE
