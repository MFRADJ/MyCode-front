import { Link } from '@mui/material'
import React from 'react'

const CourseCard = (props) => {
const{ imgUrl,title,lesson,students,rating,URL } = props.item




  return (
    <div className="signale__course__item">
    <div className="course__img">
        <img src={imgUrl} alt="" className='w-100' />
    </div>
    <div className="course__details">
        <h6 className='cours__title mb-4' >
          {title}
        </h6>
<div className='d-flex justify-content-between align-items-center'>
    <p className='lesson d-flex align-itemes-center 
    gap-1'>
        <i class='ri-book-open-line'></i>{lesson} lesson
    </p>
    <p className='enroll d-flex align-itemes-center
     gap-1'>
      
        <a href='#' >Allez dans les cours</a>  {URL}  </p>  
</div>


   
</div>



    </div>

  )
}

export default CourseCard