import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image:IMG1,
    title:'Portfolio react website',
    github:'https://github.com'

  },
  {
    id:2,
    image:IMG2,
    title:'Portfolio react website2',
    github:'https://github.com'

  },
  {
    id:3,
    image:IMG3,
    title:'Portfolio react website2',
    github:'https://github.com'

  },
  {
    id:4,
    image:IMG4,
    title:'Portfolio react website2',
    github:'https://github.com'

  },
  {
    id:5,
    image:IMG5,
    title:'Portfolio react website2',
    github:'https://github.com'

  },
  {
    id:6,
    image:IMG6,
    title:'Portfolio react website2',
    github:'https://github.com'

  }
]

 const Portfolio = () => {

  const sectionHeight = {
    height:"auto",
  }

  return (
    <section id='portfolio' style={sectionHeight}>

      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {

          data.map(({id,image, title,github,demo})=>{
            return(
              <article key={id} className='portfolio_items'>
              <div className='portfolio_item_image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className='btn'>Github</a>
                <a href={github} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
            )
          })
        }

       

        {/* <article className='portfolio_items'>
          <div className='portfolio_item_image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_items'>
          <div className='portfolio_item_image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_items'>
          <div className='portfolio_item_image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfoloi_item_cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_items'>
          <div className='portfolio_item_image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_items'>
          <div className='portfolio_item_image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}
export default Portfolio
