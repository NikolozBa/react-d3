import React from 'react'
import illustrationPT from '../img/illustrationPT.svg'
import '../Styles/Sections.css'

function SectionPT() {
    return (
        <div className='section'>

            <div>
                <img className='sectionImage'  src={illustrationPT}/>
            </div>

            <div className='sectionContent'>
                <h2>
                    Professional Team
                </h2>
                <div>
                    Well, obviously, we're professionals. Don't hesitate - get to know us better.
                </div>
                <a href='/learnMore'>
                    Learn more
                </a>
            </div>

            
        </div>
    )
}

export default SectionPT
