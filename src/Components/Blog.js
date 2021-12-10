import React from 'react'
import blogImgA from '../img/blogImgA.png'
import blogImgB from '../img/blogImgB.png'
import blogImgC from '../img/blogImgC.png'
import '../Styles/Blog.css'

function Blog() {
    return (
        <div className='blogSection'>
            <div>
                <h2>
                    From our blog
                </h2>
                <button>
                    View all
                </button>
            </div>
            

            <div>
                <div>
                    <img src={blogImgA}/>
                    <div>What’s Fusely?</div>
                    <div>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</div>
                    <a href='/readMore'>Read more</a>
                </div>
                <div>
                    <img src={blogImgB}/>
                    <div>Introducing Fusely Engage</div>
                    <div>We’re happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions.</div>
                    <a href='/readMore'>Read more</a>
                </div>
                <div>
                    <img src={blogImgC}/>
                    <div>Premium vs Enterprise plan</div>
                    <div>Let’s compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs.</div>
                    <a href='/readMore'>Read more</a>
                </div>
            </div>
            
        </div>
    )
}

export default Blog
