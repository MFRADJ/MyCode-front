import React,{useState}  from 'react'
import { Container,Row,Col } from 'reactstrap';
import './ChooseUs.css';
import Vedio1 from '../../assestes/images/Vedio1.mp4'

import VedioPlayer from 'react-video-js-player'


import chooseImg from '../../assestes/images/why-choose-us.png'
const ChooseUs = () => {
const videoSrc =Vedio1;


  return (
    <section>
<Container>
    <Row>
        <Col lg='6'>
    <div className="choose_content">
        <h2>Motivation  </h2>
          <p>Le développement et la programmation informatique occupent une place cruciale dans notre vie contemporaine.
             Ces compétences permettent d'innover technologiquement, de résoudre des problèmes complexes et offrent des opportunités 
             professionnelles variées. En apprenant à programmer, on acquiert une autonomie créative et une meilleure compréhension des 
             technologies qui nous entourent. Cela facilite également l'adaptation aux évolutions rapides du domaine. En somme, le développement
             et la programmation informatique sont des compétences indispensables dans notre société numérique moderne. </p>
            </div>    
        
        </Col>
        <Col lg='6'>
         

<div className="choose__img">
    

<VedioPlayer
src={videoSrc}

width="600"
height="600"
/>




</div>
        </Col>
    </Row>
</Container>
    </section>
  )
}

export default ChooseUs