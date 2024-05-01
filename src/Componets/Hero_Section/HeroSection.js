 import React from 'react'
import {Container, Row, Col } from 'reactstrap';
import heroImg from '../../assestes/images/hero-img1.png'
import img from '../../assestes/images/testimonial01.png'
import  './HeroSection.css'
const HeroSection = () => {
  return (
    <section>
        <Container>
        <Row>
            <Col lg='6' md='6'> 
     <div className="hero__content">
     <h2 className='mb-4'>À tout moment, n'importe où, <br/>apprenez selon votre emploi du temps adapté.</h2>
<p> cette plateforme d'éducation en ligne vise à offrir<br/>
 une expérience d'apprentissage flexible, accessible et personnalisée, <br/>
permettant aux utilisateurs d'atteindre leurs objectifs éducatifs à<br/>
 leur propre rythme et selon leurs propres contraintes.</p>
     <div className="search">
        <input type="text"  placeholder=' Recherche'/>
        <button className='btn'> Recherche</button>
     </div>
     </div>
            </Col>
            <Col lg= '6' md='6' >
           <img src= {img} alt='' className='w-100'/>     
            </Col>
            </Row>    
        </Container>
    </section>
  )
}

export default HeroSection