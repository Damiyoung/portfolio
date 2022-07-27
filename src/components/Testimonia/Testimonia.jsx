import "./testimonia.css"
import TESTI from "../../assest/test.jpg"


// import Swiper core and required modules
import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    avata:TESTI,
    name:"Mr justice",
    review:"i still dont now what to put in this, end sofor now let keep going but i think coconut sweeter than mango"

  },

  {
    avata:TESTI,
    name:"Mr Chinedu",
    review:"i still dont now what to put in this, end sofor now let keep going but i think coconut sweeter than mango"

  },

  {
    avata:TESTI,
    name:"Mr Moses",
    review:"i still dont now what to put in this, end sofor now let keep going but i think coconut sweeter than mango"

  },
]



const Testimonia = () => {
  return (
    <section id="testimonia">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <swiper className="container testimonia_container">
        {
        data.map(({avata, name, review },index) => {
          return( 
            <SwiperSlide key={index} className="testimonia">
            <div className="client_avata">
            <img src={avata} />
            </div> 
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review} 
                     </small>
          </SwiperSlide>

          )

        })
      }
      
      </swiper>
      
    </section> 
  )
}

export default Testimonia