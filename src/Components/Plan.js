import React from 'react'
import '../Styles/Plan.css'

function Plan() {
    return (
        <div className='planSection'>
            <h2>
                Choose your plan
            </h2>

            <div>
                <div className='smallBox'>
                    <div>Starter</div>
                    <div><span>Free</span></div>
                    <div>Dashboard</div>
                    <div>Limited Support</div>
                    <div>Forever free</div>
                    <button>Get Started</button>
                </div>
                <div className='bigBox'>
                    <div>Premium</div>
                    <div><span>$29</span>/month</div>
                    <div>Dashboard and Analysis</div>
                    <div>Premium Support</div>
                    <div>Tracking Service</div>
                    <button>Get Started</button>
                </div>
                <div className='smallBox'>
                    <div>Enterprise</div>
                    <div><span>$49</span>/month</div>
                    <div>All features in Premium</div>
                    <div>Realtime overview</div>
                    <div>Mobile app</div>
                    <button>Get Started</button>
                </div>
            </div>
            
        </div>
    )
}

export default Plan
