import "./service.css"
import {BiCheck} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'

const service = () => {
  return (
    <section id="service">
      <h5> What I Offer</h5>
      <h2>Service</h2>

    <div className="container service_container ">
      <article className="service" >
        <div className="service_head">
          <h3>Community/Communication</h3>
        </div>
      <ul className="service_list">
       
      <li> 
          <BiCheck className="service_list"></BiCheck> 
          <p> I care about people and love to assist fellow developers work on their craft. I Strongly believe that's how we all Grow.</p>
        </li>
      
      </ul>
      </article>

      {/*END OF UI/UX */}

      <article className="service" >
        <div className="service_head">
          <h3>Adaptiveness</h3>
        </div>
      <ul className="service_list">
       
      <li> 
          <BiCheck className="service_list"></BiCheck> 
          <p> I value simple content structure, clean design patterns
            and creative interactions. Constantly learning and adapting to new changes
          </p>
        </li>
        
     
      </ul>
      </article>

       {/*END OF WEB DEVLOPMENT*/}

      <article className="service" >
        <div className="service_head">
       
          <h3>Time Management</h3> 
        </div>
      <ul className="service_list">
       
      <li> 
          <BiCheck className="service_list"></BiCheck> 
          <p> I value time. i have work on myself to manage time effectively and deliver 
            projects fast.
          </p>
        </li>
       

      </ul>
      </article>
 
    </div>
    </section>
  )
}

export default service