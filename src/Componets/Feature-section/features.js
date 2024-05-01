import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import'./Features.css'
const FeatureData=[
   {
title:'Apprentissage Rapide',
desc:"L'apprentissage rapide est vraiment utile aujourd'hui. Il nous aide à apprendre de nouvelles choses très vite. En utilisant de bonnes méthodes, comme diviser les informations en petites parties, pratiquer régulièrement et répéter ce qu'on a appris, on peut apprendre beaucoup plus rapidement. Ça nous aide à rester au top dans un monde qui change vite"        
,icon:'ri-draft-line'

   } ,
   {
    title:'Support en tout temps',
    desc:"Notre équipe est là pour vous aider en tout temps. Que ce soit le jour ou la nuit, nous sommes disponibles pour répondre à vos questions et résoudre vos problèmes. Notre objectif est de vous offrir un support rapide et efficace, afin que vous puissiez continuer à avancer sans encombre. N'hésitez pas à nous contacter à tout moment, nous sommes là pour vous aider !"        
    ,icon:'ri-discuss-line'
    
       } ,
       {
        title:'certifications',
        desc:" les certifications sont comme des récompenses que vous obtenez après avoir terminé un cours avec succès. Elles sont comme des badges qui montrent que vous avez appris quelque chose de nouveau. Par exemple, si vous terminez un cours sur la programmation informatique, vous pourriez obtenir une certification de programmation."       
        ,icon:'ri-contacts-book-line'
        
           } 
]
const features = () => {
  return (
    <Container>
        <Row>
            {
                FeatureData.map((item,index)=>   <Col  lg='4'mb-3    key={index} > 
            <div className="single__feature text-center px-4">
                <h2 className='mb-3' > <i class={item.icon}></i></h2>
      <h6> {item.title} </h6>
      <p> {item.desc} </p>
            </div>
            </Col>)

}
         
           
           
        </Row>
    </Container>
  )
}

export default features