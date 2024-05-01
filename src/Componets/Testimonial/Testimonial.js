import React from 'react'
import './Testimonial.css';
import { Container,Row,Col } from 'reactstrap';
import img from '../../assestes/images/testimonial01.png'
import heroImg from '../../assestes/images/hero-img1.png'
import Slider from 'react-slick';


const Testimonial = () => {
    const settings = {
        infinite: true,
        dots:true,
        speed: 500,
        slidesToShow: 1,
        autoPlay:true,
        autoplaySpeed:3000,
        slidesToScroll: 1,
    }


  return (
<section>
    <Container>
        <Row>
        <Col lg='8' className='m-auto' >
            <div className="testimonial__wrapper d-flex justify-content-between ">
                <div className="testimonial__img w-50">
                   <img src={heroImg} alt='' className='w-100'/> 
                </div>
                <div className="testimonial__content w-50">
                    <h2 className='mb-4'>la voix de nos étudiants</h2>


<Slider {... settings}>
    <div>
    <div className="single__testimonial">
        <h6 className='mb-3 fw-bold'></h6>
        <p>Êtes-vous prêt à transformer votre manière d'apprendre ? Notre plateforme d'e-learning
             révolutionnaire vous offre la liberté d'étudier selon votre propre emploi du temps, où que vous soyez.</p>
            <div className='student__info mt-4'>
            <h6 className='fw-bold'></h6>
            
    </div>
    </div>
    </div>
    <div>
    <div className="single__testimonial">
        <h6 className='mb-3 fw-bold'></h6>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Dolores natus tempora
             repellendus praesentium voluptate labore,
              obcaecati nostrum error nemo placeat officia 
              illum numquam 
            sed iure saepe veritatis non libero modi.</p>
            <div className='student__info mt-4'>
            <h6 className='fw-bold'></h6>
            
    </div>
    </div>
    </div>
    
</Slider>
                </div>
                
                </div>

        </Col>
        </Row>
    </Container>
</section>
  )
}

export default Testimonial