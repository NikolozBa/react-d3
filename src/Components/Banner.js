import React from 'react'
import mainImage from '../img/mainImage.svg'
import '../Styles/Banner.css'

function Section1() {
    return (
        <div className='banner'>
            <div>
                <h1>
                    Let’s get fusely together
                </h1>
                <div>
                    Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.
                </div>
                <div>
                    <button>
                        Get Started
                    </button>
                </div>
            </div>

            <div>
                <img  src={mainImage}/>
            </div>
        </div>
    )
}

export default Section1
