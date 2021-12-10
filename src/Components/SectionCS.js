import React from 'react'
import illustrationCS from '../img/illustrationCS.svg'
import '../Styles/Sections.css'

function SectionCS() {
    return (
        <div className='section'>

            <div className='sectionContent'>
                <h2>
                    Creative Solutions
                </h2>
                <div>
                    Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.
                </div>
                <a href='/learnMore'>
                    Learn more
                </a>
            </div>

            <div>
                <img className='sectionImage'  src={illustrationCS}/>
            </div>
        </div>
    )
}

export default SectionCS
