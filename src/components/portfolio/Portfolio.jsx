import "./portfolio.css"
import IMG from "../../assest/port1.png"
import IMG1 from "../../assest/port2.png"
import IMG2 from "../../assest/port3.png"



const data = [
{
  id:1,
  image:IMG,
  title:'Portfolio Website',
  github:"https://github.com/Damiyoung/portfolio",
  des: 'Available on Github only',

},

{
  id:1,
  image:IMG1,
  title:'Eccomarce Website',
  des: 'Available on Github only',
  github:"https://github.com/Damiyoung/vadd_ecommerce",

},

{
  id:1,
  image:IMG2,
  title:'Calculator',
  des: 'Available on Demo and Github. ',
  github:"https://github.com/Damiyoung/calculator",
  demo:"https://firstcalculator-vaddtech.netlify.app/"

},


  
]
const portfolio = () => {
  return (
    <section id="#portfolio">
      <h5> My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo, des,})=> {
          return(
            
  <article className="portfolio_item">
        
  <div className="portfolio_item-image">
    <img src={image} alt={title} />
    </div>
 
  <h3>{title}</h3>
  <h5>{des}</h5>
  <div className="portfolio_item-cta"> 
  <a href={github} className="btn" target= "_blank ">Github</a>
  <a href={demo} className="btn" target= "_blank ">Demo</a>

  </div>
  </article>


          )
            
          
        })
      }
      </div>
    </section>
  )
}

export default portfolio