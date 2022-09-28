import React from 'react'
import'./experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skilss Ihave</h5>
      <h2>My Experiences</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
            <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

            </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>C#.net</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience