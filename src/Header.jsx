import React from 'react'
import { useState } from 'react'
import Button from './Button'
import useClickOutside from './ClickOutside'

const Header = () => {
  const [isShown, setIsShown] = useState(false)

  let menuRef = useClickOutside(() => {
    setIsShown(false)
  })

  return (
    <>

      <header className='header'>
        <div className={`header--content ${isShown === true ? 'bg' : ''}`}>
          <span className='header--logo'>manage</span>
          <nav ref={menuRef} className={`navbar ${isShown === true ? 'navbar_show' : ''}`}>
            <ul className='navbar--list'>
              <li className='navbar--item'><a href="#home">Pricing</a></li>
              <li className='navbar--item'><a href="#home">Product</a></li>
              <li className='navbar--item'><a href="#home">About Us</a></li>
              <li className='navbar--item'><a href="#home">Careers</a></li>
              <li className='navbar--item'><a href="#home">Community</a></li>
            </ul>
          </nav>
          <Button />
          {isShown === false ?
            <button onClick={() => { setIsShown(true) }} className='burger'><span></span></button> :
            <button onClick={() => { setIsShown(false) }} className='close'><span></span></button>}
        </div>
      </header>
    </>
  )
}

export default Header
