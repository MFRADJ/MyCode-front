import React from 'react'
import './About.css';
import { Container ,Row, Col } from 'reactstrap';
import aboutImg from '../../assestes/images/about-us.png'
import Slider from 'react-slick';
import imgslide0 from '../../assestes/images/imgslide0.jpg';
import imgslide1 from '../../assestes/images/imgslide1.jpg'
import imgslide2 from '../../assestes/images/imgslide2.jpg'
import imgslide3 from '../../assestes/images/imgslide3.jpg'
import imgslide4 from '../../assestes/images/imgslide4.jpg'







const AboutUs = () => {


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
             <Col lg='6' md='6'   className='m-auto'>
             <Slider {... settings}>
                <div className="about__img">
  <img src={aboutImg} alt='' className='w-100'/>

                </div>
                <div className="about__img">
  <img src={imgslide0} alt='' className='w-100'/>

                </div>
                <div className="about__img">
  <img src={imgslide1} alt='' className='w-100'/>
  
                </div>
                <div className="about__img">
  <img src={imgslide2} alt='' className='w-100'/>

                </div>
                <div className="about__img">
  <img src={imgslide3} alt='' className='w-100'/>

                </div>
                <div className="about__img">
  <img src={imgslide4} alt='' className='w-100'/>

                </div>
                </Slider>
                </Col> 
           <Col lg='6' md='6'  className='m-auto'>      
<Slider {... settings}>
            <div>
                <div className="about__content">
                    <h2 className='mb-3 fw-bold'>À propos de nous</h2>
                    <p>Bienvenue sur notre plateforme <br/>d'e-learning en informatique,
                       une destination pour votre développement <br/>professionnel et personnel.</p>
</div>
                </div>
                <div>
    <div className="single__About">
        <h6 className='mb-3 fw-bold'>Qui sommes-nous</h6>
        <p>Notre mission est de démocratiser l'accès à l'apprentissage informatique,<br/>
         en offrant des cours interactifs et accessibles à tous, où que vous soyez</p>
         
    </div>
    </div>
    
                </Slider> 
                
               </Col>  
            </Row>
        </Container>
    </section>
  )
}

export default AboutUs;