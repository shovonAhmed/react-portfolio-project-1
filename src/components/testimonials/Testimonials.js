import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Indale River',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi nobis quasi fugiat dolores eius optio, sint vel voluptate perspiciatis, repellendus minus, debitis mollitia! Minus reiciendis beatae nesciunt omnis cum.'
  },
  {
    avatar: AVTR2,
    name: 'Kawame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi nobis quasi fugiat dolores eius optio, sint vel voluptate perspiciatis, repellendus minus, debitis mollitia! Minus reiciendis beatae nesciunt omnis cum.'
  },
  {
    avatar: AVTR3,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi nobis quasi fugiat dolores eius optio, sint vel voluptate perspiciatis, repellendus minus, debitis mollitia! Minus reiciendis beatae nesciunt omnis cum.'
  },
  {
    avatar: AVTR4,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi nobis quasi fugiat dolores eius optio, sint vel voluptate perspiciatis, repellendus minus, debitis mollitia! Minus reiciendis beatae nesciunt omnis cum.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className='client__avatar' >
            <img src={avatar} alt="{name}" />
          </div>
          <h5 className='client__name' >{name}</h5>
          <small className='client__review' > {review} </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials