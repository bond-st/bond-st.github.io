import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-black.png'

const Home = () => (
  <div className='home-container'>
    <img src={logo} alt='Bond Street logo' className='logo-home' />
    <div className='home-menu'>
      {/* comment out the two lines below if you want to remove them from view */}
      <Link to='/edit' className='menu-link home-menu-link'><p>EDIT</p></Link>
      <Link to='/unit' className='menu-link home-menu-link'><p>UNIT</p></Link>
      <div className='socials socials-home' align='center'>
        <a href='https://soundcloud.com/bond_st'><i className='fab fa-soundcloud' /></a>
        <a href='https://www.youtube.com/channel/UC_e6NwCw-d-G23fRHIsinqg'><i className='fab fa-youtube' /></a>
        <a href='https://www.instagram.com/bond__st/?hl=en'><i className='fab fa-instagram' /></a>
      </div>
    </div>
  </div>
)

export default Home
