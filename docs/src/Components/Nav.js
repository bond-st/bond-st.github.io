import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../images/logo-black.png'
import links from '../video-links/links.json'

// This is where the code for the side menu is
const Nav = () => (
  <div className='nav'>
    {/* edit link  */}
    <Link to='/'><img src={logo} alt="Bond Street logo" className='logo-nav'/></Link>
    <div className='menu nav-menu'>
      {window.location.href.split('#')[1] === '/edit' ? 
      <Link to='/edit' className='menu-link nav-menu-link'><p className='bold-title'>EDIT</p></Link> 
      : <Link to='/edit' className='menu-link nav-menu-link'><p>EDIT</p></Link>}
      {/*  edit sub-menu */}
      {window.location.href.split('#')[1] === '/edit' && links.edit.map(video => {
        return <div className='sub-menu'>
          <Link to={'/edit#' + video.title} className='menu-link nav-menu-link sub-link'>{video.title}</Link>
        </div>
      })}
      {/* unit link  */}
      {window.location.href.split('#')[1] === '/unit' ? 
      <Link to='/unit' className='menu-link nav-menu-link'><p className='bold-title'>UNIT</p></Link> 
      : <Link to='/unit' className='menu-link nav-menu-link'><p>UNIT</p></Link>}
      {/* unit sub-menu  */}
      {window.location.href.split('#')[1] === '/unit' && links.unit.map(video => {
        return <div className='sub-menu'>
          <Link to={'/unit#' + video.title} className='menu-link nav-menu-link sub-link'>{video.title}</Link>
        </div>
      })}

      {/* mobile version of sub-menu */}
      {window.location.href.split('#')[1] === '/edit' && links.edit.map(video => {
        return <div className='sub-menu sub-menu-mobile'>
          <Link to={'/edit#' + video.title} className='menu-link nav-menu-link sub-link-mobile'>{video.title}</Link>
        </div>
      })}
      {window.location.href.split('#')[1] === '/unit' && links.unit.map(video => {
        return <div className='sub-menu sub-menu-mobile'>
          <Link to={'/unit#' + video.title} className='menu-link nav-menu-link sub-link-mobile'>{video.title}</Link>
        </div>
      })}
    </div>
  </div>
)
export default Nav
