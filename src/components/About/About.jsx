import React from 'react'
import "./about.css"
import ME from "../../assest/me.jpg"
import {FaAward} from "react-icons/fa"
import{FaUserSecret} from "react-icons/fa"
import {GiFullFolder} from "react-icons/gi"
const About = () => {
  return (
<section id="about">

  <h5>Get to know </h5>
  <h2>About me</h2>
  <div className=" container about_container ">
  <div className="about_me"> 
  <div className="about_me-image">
    <img src={ME}  alt="About"/>

  </div>

  </div>
<div className="about_content">
<div className="about_cards">
  <article className='about_card'>
    <FaAward  className="about_icons"/>
    <h5>Experience</h5>
    <small>1 year+</small>

 </article>

 <article className='about_card'>
    <FaUserSecret className="about_icons"/>
    <h5> Clients</h5>
    <small>NDA</small>

  </article>


  <article className='about_card'>
    <GiFullFolder  className="about_icons"/>
    <h5>Project</h5>
    <small>NDA</small>

  </article>
</div>

<p>
  Since i was a child, i was very curious about anything that had
  to do with the internet, i always wondered how people were able
  to make websites and other amazing things on the web space, 
  so Anything can be done with technologies, 
  and as a developer, i am one of those that can contribute and
  create these things to reality. so let get started
</p>

<a href='#contact' className='btn btn-primary'> Let's Talk </a>
</div>
</div>

  </section>
  )
}

export default About