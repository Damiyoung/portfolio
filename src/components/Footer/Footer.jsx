
import"./footer.css"
import { BsFacebook    } from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
<a href ="#" className='footer_logo'>VaddTech</a>

<ul className="permalinks">
<li><a href='#'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#experiance'>Expeirience</a></li>
<li><a href='#service'>Services</a></li>
<li><a href='#contact'>Contact </a></li>


</ul>

<div className="footer_social">
  
  <a href='https://www.linkedin.com/in/damilola-esan-7b319a233/' target="_blank"><AiFillLinkedin/></a>
  <a href='https://github.com/Damiyoung' target="_blank"><AiFillGithub/></a>
  

</div>

<div className="footer_copyright">
  <small>&copy; VADD-Tech All right Reserved</small>
</div>
    </footer>
  )
}

export default Footer