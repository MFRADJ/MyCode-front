import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import courseImg1 from '../../assestes/images/web-design.png';
import courseImg2 from '../../assestes/images/graphics-design.png';
import courseImg3 from '../../assestes/images/ui-ux.png';
import courseImg4 from '../../assestes/images/ImgGeneraliste.jpg';
import courseImg5 from '../../assestes/images/Imgscripte.jpg';
import courseImg6 from '../../assestes/images/webdev.jpg';
import courseImg7 from '../../assestes/images/imagmobile.jpg';
import courseImg8 from '../../assestes/images/imgBD.jpg';
import courseImg9 from '../../assestes/images/css4.jpg';
import courseImg10 from '../../assestes/images/html xml.jpg';
import courseImg11 from '../../assestes/images/dev de jeux.jpg';
import courseImg12 from '../../assestes/images/cote serveur.jpg';
import './Courses.css'
import CourseCard from './CourseCard';
const coursesData=[
    {
        id:'01',
    title:'Langage de programation generalistes',
    lesson:7,
    imgUrl:courseImg1,
    

},
{
    id:'02',
    title:'Langage de programation generalistes ',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg4
},
  {
    id:'04',
    title:'UI/UX bootcamp in 2022',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg2
  } , 
  {
    id:'05',
    title:'langage de scripte',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg5
  } , 
  {
    id:'06',
    title:'langage de developpement web',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg6
  } , 
  {
    id:'07',
    title:'langage de developpement mobile',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg7
  } , 
  {
    id:'08',
    title:'langage de base de donneé',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg8
  } , 
  {
    id:'09',
    title:'langage de feuilles de style et de mise en page',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg9
  } , 
  {
    id:'10',
    title:'langage de balisage',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg10
  } , 
  {
    id:'11',
    title:'langage de developpement de jeux',
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg11
  } , 
  {
    id:'12',
    title:'langage de coté serveur',
    lesson:12,
    students:12.5,
    rating:7,
    imgUrl:courseImg12
  } , 
  {
    id:'13',
    title:"langage dedéveloppement d'interface utilisateur ",
    lesson:12,
    students:12.5,
    rating:5.9,
    imgUrl:courseImg3
  } , 
]
const Courses = () => {
  return (
    
    <section><Container>
        <Row>
            <Col lg='12 '  className='mb-5'> 
            <div className="course__top d-flex justify-content-between align -items-center">
                <div className="course__top__left">
                    <h2>OUR POpular courses</h2>
                    <p></p>
                </div>
                <div className='w-50'>
                <button className="btn">see ALL</button>
            </div></div>
            
            </Col>
            {
                coursesData.map(item=>(
                      <Col lg='4' md='6'>

<CourseCard key={item.id} item={item}/>
            </Col>
                ))
            }
          
        </Row></Container>
    </section>
  )
};

export default Courses;