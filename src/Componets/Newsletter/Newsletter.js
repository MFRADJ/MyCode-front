import React from 'react'
import './Newsletter.css';
import { Container,Row,Col } from 'reactstrap';
const Newsletter = () => {
  return (
   
    <section >
<Container className='newsletter'>
<Row>
    <Col  lg='12' className='text-center'>
        <h2>subscribe</h2>
        <div className="subscribe">
        <input type="text"  placeholder='email'/>
        <button className="btn">subscribe</button>
        
        
        
        </div>
    </Col>
</Row>
</Container>
    </section>
  )
}

export default Newsletter