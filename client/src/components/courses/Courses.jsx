import React from 'react'
import "../courses/courses.css"

const Courses = () => {
  return (
    <div className='courses' id='courses'>
        <h1>Our Popular Courses</h1>
        <div className='courses__container'>
          <span className='course__card'></span>
          <span className='course__card'></span>
          <span className='course__card'></span>
        </div>
    </div>
  )
}

export default Courses