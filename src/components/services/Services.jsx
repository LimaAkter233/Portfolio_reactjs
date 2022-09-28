import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
export const Services = () => {
  const sectionHeight = {
    height:"auto",
  }
  return (
    <section id='services' style={sectionHeight}>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>

      <article className='service'>
        <div className='service_head'>
          <h3>Web design</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.e</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and </p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
        </ul>
      </article>
      {/* end of Web design tags */}
      
      <article className='service'>
        <div className='service_head'>
          <h3>UI/UX</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
        </ul>
      </article>
         {/* end of UI/UX tags */}
         <article className='service'>
        <div className='service_head'>
          <h3>Content Creation</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
          <li>
            <BiCheck className='service_list_icon'/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li>
        </ul>
      </article>
         {/* end of content creator tags */}
      </div>

    </section>
  )
}

export default Services