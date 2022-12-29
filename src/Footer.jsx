import React from 'react'
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
                            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={icon0} alt="icon" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={icon1} alt="icon" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://ru.pinterest.com/"><img src={icon2} alt="icon" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={icon3} alt="icon" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><img src={icon4} alt="icon" /></a></li>
                        </ul>
                        <span className='header--logo'>manage</span>
                    </div>
                    <div className='footer--links'>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#home">Pricing</a></li>
                            <li><a href="#home">Products</a></li>
                            <li><a href="#home">About Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="#home">Careers</a></li>
                            <li><a href="#home">Community</a></li>
                            <li><a href="#home">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
