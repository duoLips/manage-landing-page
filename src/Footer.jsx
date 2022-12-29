import React from 'react'
import Button from './Button'
import icon0 from './assets/icon-facebook.svg'
import icon1 from './assets/icon-instagram.svg'
import icon2 from './assets/icon-pinterest.svg'
import icon3 from './assets/icon-twitter.svg'
import icon4 from './assets/icon-youtube.svg'


const Footer = () => {
    return (
        <div>
            <section className='simplify--section'>
                <div className="simplify ">
                    <h1 className='simplify--title'>Simplify how your team works today.</h1>
                    <div className='simplify--button'><button className='button__inverted'>Get Started</button></div>
                </div>
            </section>
            <footer className='footer'>
                <div className='wrapper footer--container'>
                    <form className='footer--form'>
                        <input placeholder='Updates in your inbox…' type="email" name="" id="" />
                        <button className='button'>Go</button>
                    </form>
                    <div className='footer--media'>
                        <ul>
                            <li><a href="#"><img src={icon0} alt="icon" /></a></li>
                            <li><a href="#"><img src={icon1} alt="icon" /></a></li>
                            <li><a href="#"><img src={icon2} alt="icon" /></a></li>
                            <li><a href="#"><img src={icon3} alt="icon" /></a></li>
                            <li><a href="#"><img src={icon4} alt="icon" /></a></li>
                        </ul>
                        <span className='header--logo'>manage</span>
                    </div>
                    <div className='footer--links'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
