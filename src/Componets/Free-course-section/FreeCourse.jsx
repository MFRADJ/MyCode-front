import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import courseImg1 from '../../assestes/images/web-development.png'
import courseImg2 from '../../assestes/images/kids-learning.png';
import courseImg3 from '../../assestes/images/seo.png';
import courseImg4 from '../../assestes/images/ui-ux.png';
import './Free-course.css';
import FreeCourseCard from './FreeCourseCard';


const freecourseData =[
  {
    id:'01',
    title:'Basic web development course',
    imgUrl: courseImg1,
    students:5.3,
    rating:1.7
  },
  {
    id:'02',
    title:'coding',
    imgUrl: courseImg2,
    students:5.3,
    rating:1.7
  },
  {
    id:'03',
    title:'search',
    imgUrl: courseImg3,
    students:5.3,
    rating:107
  },
  {
    id:'04',
    title:'UI/ux',
    imgUrl: courseImg4,
    students:5.3,
    rating:107
  },
]
const FreeCourse = () => {
  return (
    <Container>
      <Row>
        <Col lg='12' className=' text-center mb-5'  >
          <h2 className='fw-bold'>Our free courses</h2>
        </Col>

{
  freecourseData.map(item =>(
    <Col lg='3' key={item.id}>
          
<FreeCourseCard item={item}/>
        </Col>
  ))
}


        
      </Row>
    </Container>
  )
}

export default FreeCourse