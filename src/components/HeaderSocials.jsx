
import React from 'react'
import{BsLinkedin } from "react-icons/bs"
import{AiOutlineGithub} from "react-icons/ai"
import{TbBrandFacebook} from "react-icons/tb"

const HeaderSocials = () => {
  return (
   <div className="header__socials ">
    <a href='https://www.linkedin.com/in/damilola-esan-7b319a233/' rel="noreferrer" target="_blank"><BsLinkedin/></a>
    <a href='https://github.com/Damiyoung'  rel="noreferrer" target="_blank"><AiOutlineGithub/></a>
    <a href='https://www.facebook.com/adekunleemmanuel.esan' rel="noreferrer" target="_blank"><TbBrandFacebook/> </a>
   </div>
  )
}

export default HeaderSocials