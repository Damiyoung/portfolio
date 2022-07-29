import "./portfolio.css"
import IMG from "../../assest/port1.png"
import IMG1 from "../../assest/port2.png"



const data = [
{
  id:1,
  image:IMG,
  title:'Portfolio Website',
  github:"https://github.com",

},

{
  id:1,
  image:IMG1,
  title:'Eccomarce Website',
  github:"https://github.com",

},


  
]
const portfolio = () => {
  return (
    <section id="#portfolio">
      <h5> My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo})=> {
          return(
            
  <article className="portfolio_item">
        
  <div className="portfolio_item-image">
    <img src={image} alt={title} />
    </div>
 
  <h3>{title}</h3>
  <div className="portfolio_item-cta"> 
  <a href={github} className="btn" target= "_blank ">Github</a>

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