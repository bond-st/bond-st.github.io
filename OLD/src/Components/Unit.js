import React from 'react'
import Nav from './Nav'
import links from '../video-links/links.json'

const Unit = () => (
  <div className='edit-unit'>
    <Nav />
    {/* mapping through the .json file */}
    {links.unit.map((video, i) => {
      return <div className='video-div' id={video.title} key={i} align='right'>
        <h1>{video.title}</h1>
        <p className='video-date'>{video.date}</p>
        <iframe className='video ' id={video.title} src={video.url} frameBorder='0' webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen='true' />
        <p className='video-info' align='right'>{video.description}</p>
      </div>
    })}
  </div>
)

export default Unit
