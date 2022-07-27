import "./experiance.css"
import {BsCheck2All} from 'react-icons/bs'
const Experiance = () => {
  return (
 <section id="experiance">
  <h5> What Skils I Have</h5>
  <h2>My Experience</h2>

<div className="container experience_container">
    <div className="experience_frontend">
      <h3>Frontend Development</h3>
      <div className="experience_content">
        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>
         <h4>Html</h4>
          <small className="text-light">Experienced </small>
         </div>
        </article>
        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>
         <h4>Css</h4>
          <small className="text-light">Intermediate </small>
         </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>
         <h4>Tailwind</h4>
          <small className="text-light">Experienced </small>
         </div>
        </article>
        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>
         <h4>Style Componet</h4>
          <small className="text-light">Intermediate </small>
         </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>
         <h4>React-icons</h4>
          <small className="text-light">Experienced </small>
         </div>
        </article>
        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>
         <h4>Material UI</h4>
          <small className="text-light">Intermediate </small>
         </div>
        </article>

       
      </div>
      </div>

      {/*END OF FRONT END */}

<div className="experience_backend">
<h3>Backend Development</h3>
      <div className="experience_content">
        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>

         <h4>NodeJS</h4>
          <small className="text-light">Experienced </small>

         </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
          <div>
          <h4>MongoDB</h4>
          <small className="text-light">Experienced</small>

          </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>

         <h4>Express.js</h4>
          <small className="text-light">Experienced </small>

         </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
          <div>
          <h4>GitHub</h4>
          <small className="text-light">Experienced</small>

          </div>
        </article> 

       </div>
</div>

     {/*END OF BACK END */}

   <div className="experience_backend">
<h3>The Ones i am currently learning</h3>
      <div className="experience_content">
        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>

         <h4>Nest JS</h4>
      

         </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
          <div>
          <h4>PHP</h4>
          

          </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
         <div>

         <h4>Laravel</h4>
     
         </div>
        </article>

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
          <div>
          <h4>Typescript</h4>
      

          </div>
        </article> 

        <article className="experience_details">
          <BsCheck2All className="experience_details-icon"/>
          <div>
          <h4>Firebase</h4>
      

          </div>
        </article> 

       </div>
</div>



</div>
 </section>
  )
}

export default Experiance