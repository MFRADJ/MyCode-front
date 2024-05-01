import React from 'react'
import { Container,Row,Col ,ListGroup,ListGroupItem } from 'reactstrap';
const footerQuickLinks =[
    {
        display:'Connexion',
         url:'#'
    },
    {
        display:'Inscription',
         url:'#'
    },
    {
        display:'Accueil',
         url:'#'
    },

]
const footerInfoLinks =[
    {
        display:'Notre Contenu',
         url:'http://localhost:3000'
    },
    {
        display:'Catégorie',
         url:'http://localhost:3000'
    },
    {
        display:'Podcaste',
         url:'./ChooseUs'

    },

]
const Footer = () => {
  return (
  <footer className="footer">
<Container>
    <Row>
        <Col lg='3' > 
        <h2 className='d-flex align-items-center gap-1'>
             <i  class="ri-code-s-slash-line"></i>MyCode.</h2>
        <div className="follows">
            <p className='mb-0'> Suivez-nous sur les réseaux sociaux</p>
            <span >{" "}
                <a href="facbook.com">
                     <i class='ri-facebook-line'></i></a>
            </span>
            <span >{" "}
                <a href="Instagram.com">
                     <i class='ri-instagram-line'></i></a>
            </span>
            <span >{" "}
                <a href="linkedin.com"> 
                <i class='ri-linkedin-line'></i></a>
            </span>
            <span >{" "}
                <a href="twitter.com"> 
                <i class='ri-twitter-line'></i></a>
            </span>
        </div>
        
        </Col>
        <Col lg='3'>
            <h6 className='link__list'>Explorer</h6>
        <ListGroup className='link__list'>
            {

                footerQuickLinks.map((item,index)=>(
<ListGroupItem key={index} className='border-0 ps-0 link__item'  > {''}
    <a href={item.url}> {item.display} </a>
</ListGroupItem>
                ))
            }
        </ListGroup>
        </Col>


        <Col lg='3'>
            <h6>Notre Contenu</h6>
        <ListGroup>
            {

                footerInfoLinks.map((item,index)=>(
<ListGroupItem  key={index} className='border-0 ps-0 link__item' > {""}
    <a href={item.url}> {item.display} </a>
</ListGroupItem>
                ))
            }
        </ListGroup>
        </Col>
        <Col lg='3'>
           < h6 className='fw-bold'> Adresse</h6>
    
    <p>Adress: sfax tunisie</p>
       <p>+21675200500</p>
        <p>Email :MyCode@gmail.com</p>
        
        </Col> 
    </Row>
</Container>
  </footer>
  )
}

export default Footer