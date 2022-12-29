import React from 'react'
import image from './assets/illustration-intro.svg'
import Button from './Button'
import SliderCarousel from './SliderCarousel'

const Content = () => {
    // console.log(sliderData.length)
    return (
        <div className='content'>
            <section id='home' className='section section--build'>
                <div className='section--image' >
                    <img src={image} alt="" />
                </div>
                <div className='section--content'>
                    <h1 className='section--title'>Bring everyone
                        together to build
                        better products.</h1>
                    <p className='section--par'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <Button />
                </div>
            </section>
            <section className='section  section--dif'>
                <div className='section--content'>
                    <h2 className='section--title'>What’s different
                        about Manage?</h2>
                    <p className='section--par'>Manage provides all the functionality your
                        team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                    </p>
                </div>
                <ol className='section--list'>
                    <li><span className='list--item'><span>01</span> Track company-wide progress</span>
                        <p className='section--par'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                    </li>
                    <li><span className='list--item'><span>02</span> Advanced built-in reports</span>
                        <p className='section--par'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                    </li>
                    <li><span className='list--item'><span>03</span> Everything you need in one place</span>
                        <p className='section--par'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                    </li>
                </ol>
            </section>
            <section className='section'>
                <h2 className='section--title'>What they’ve said</h2>
                <div className='slider'>
                    <SliderCarousel />
                </div>
                <Button />
            </section>

        </div>
    )
}

export default Content
