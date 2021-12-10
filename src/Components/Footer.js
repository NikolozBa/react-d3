import React from 'react'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import facebook from '../img/facebook.png'
import logo from '../img/navlogo.svg'
import '../Styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className='footerContent'>
                    <div>
                        <div>
                            <div>Product</div>
                            <div>How it works</div>
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>FAQ</div>
                            <div>Download</div>
                        </div>
                        <div>
                            <div>Companu</div>
                            <div>About</div>
                            <div>Blog</div>
                            <div>Partnership</div>
                            <div>Privacy policy</div>
                        </div>
                        <div>
                            <div>Support</div>
                            <div>Help center</div>
                            <div>Contact us</div>
                        </div>
                        <div>
                            <div>Get in touch</div>
                            <div>
                                <img src={twitter} />
                                <img src={linkedin} />
                                <img src={facebook} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={logo} />
                        <div>© Fusely 2021. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
