import "./experiance.css"
import {BsCheck2All, BsGithub} from 'react-icons/bs'
import {TbBrandNextjs,TbBrandPhp,TbBrandFirebase} from 'react-icons/tb'
import {DiReact, DiNodejsSmall,DiGitMerge, DiLaravel} from 'react-icons/di'
import {SiTailwindcss, SiStyledcomponents,SiMaterialui,SiMongodb,SiExpress,SiTypescript} from 'react-icons/si'



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
          <DiReact className="experience_details-icon"/>
         <div>
         <h4>ReactJS</h4>
          <small className="text-light">Experienced </small>
         </div>
        </article>
       
        <article className="experience_details">
          <SiTailwindcss className="experience_details-icon"/>
         <div>
         <h4>Tailwind</h4>
          <small className="text-light">Experienced </small>
         </div>
        </article>
        <article className="experience_details">
          <SiStyledcomponents className="experience_details-icon"/>
         <div>
         <h4>Style Componet</h4>
          <small className="text-light">Intermediate </small>
         </div>
        </article>

        <article className="experience_details">
          <DiReact className="experience_details-icon"/>
         <div>
         <h4>React-icons</h4>
          <small className="text-light">Experienced </small>
         </div>
        </article>
        <article className="experience_details">
          <SiMaterialui className="experience_details-icon"/>
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
          <DiNodejsSmall className="experience_details-icon"/>
         <div>

         <h4>NodeJS</h4>
          <small className="text-light">Intermediate </small>

         </div>
        </article>

        <article className="experience_details">
          <SiMongodb className="experience_details-icon"/>
          <div>
          <h4>MongoDB</h4>
          <small className="text-light">Intermediate </small>

          </div>
        </article>

        <article className="experience_details">
          <SiExpress className="experience_details-icon"/>
         <div>

         <h4>Express.js</h4>
          <small className="text-light">Intermediate  </small>

         </div>
        </article>

        <article className="experience_details">
          <BsGithub className="experience_details-icon"/>
          <div>
          <h4>Github</h4>
          <small className="text-light">Intermediate </small>

          </div>
        </article> 

        <article className="experience_details">
          <DiGitMerge className="experience_details-icon"/>
          <div>
          <h4>git</h4>
          <small className="text-light">Intermediate </small>

          </div>
        </article> 


       </div>
</div>

     {/*END OF BACK END */}

   <div className="experience_backend">
<h3>The Ones i am currently learning</h3>
      <div className="experience_content">
        <article className="experience_details">
          <TbBrandNextjs className="experience_details-icon"/>
         <div>

         <h4>Nest JS</h4>
      

         </div>
        </article>

        <article className="experience_details">
          <TbBrandPhp className="experience_details-icon"/>
          <div>
          <h4>PHP</h4>
          

          </div>
        </article>

        <article className="experience_details">
          <DiLaravel className="experience_details-icon"/>
         <div>

         <h4>Laravel</h4>
     
         </div>
        </article>

        <article className="experience_details">
          <SiTypescript className="experience_details-icon"/>
          <div>
          <h4>Typescript</h4>
      

          </div>
        </article> 

        <article className="experience_details">
          <TbBrandFirebase className="experience_details-icon"/>
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