import React from 'react'
import'./testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 const Testimonials = () => {

const datatestimonial = [
  {
    avatar: AVTR1,
    name: 'Lima',
    review:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter '
  },
  {
    avatar: AVTR2,
    name: 'Lima',
    review:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter '
  },
  {
    avatar: AVTR3,
    name: 'Lima',
    review:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter '
  },

]
  return (
    <section id='testimonials'>
       <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <Swiper className='container testimonials_container'
      
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}  >
        {
           datatestimonial.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className='testimonials'>
                  <div className='client_avatar'>
                    <img src={avatar} alt="Avatar one" />
                  </div>
                  <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>
                   {review}
                    </small>
                </SwiperSlide>
            )

         })
        }

    
       
      </Swiper>

    </section>
  )
}

export default Testimonials