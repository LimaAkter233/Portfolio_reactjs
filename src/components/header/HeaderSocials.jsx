import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

export const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/"  rel="noopener noreferrer"target="_blank"><BsGithub/></a>
        <a href="https://dribble.com/" rel="noopener noreferrer" target="_blank"><FiDribbble/></a>
     

    </div>
  )
}
export default HeaderSocials