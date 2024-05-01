import React from 'react'
import {Container, Row,Col} from 'reactstrap';
const Company = () => {
  return (
    <section>
       <Container>
       <Row>
       <Col lg='2' md='3'>  
       <h3 className='d-flex align-items-center  gap-1' >
        <i class="ri-vimeo-line"></i>
        vimeo
        </h3>
         </Col> 
       <Col lg='2'md='3'>  
       <h3 className='d-flex align-items-center  gap-1'>
        <i class="ri-pinterest-line">
            </i> pinterest</h3>
         </Col> 
       <Col lg='2'md='3'>
         <h3 className='d-flex align-items-center  gap-1'>
            <i class="ri-dribbble-line"></i>
            dribbble
            </h3> </Col> 
    
       <Col lg='2'md='3'>
         <h3 className='d-flex align-items-center  gap-1'>
            <i class="ri-apple-fill"></i>
             Apple
             </h3> </Col> 
       <Col lg='2'md='3'> 
       <h3 className='d-flex align-items-center  gap-1'>
        <i class="ri-finder-line"></i>
        finder
        </h3> </Col> 
       <Col lg='2'md='3'>
        <h3 className='d-flex align-items-center  gap-1'>
            <i class="ri-google-fill"></i>
            google
            </h3> </Col> 
       
        </Row>
       </Container>
    </section>
  )
}

export default Company