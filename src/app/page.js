import React from 'react'
import Body from './component/body'
import Dentist from './component/Dentist'

import Schedule from './component/schedule'

import Test from './component/testimonial'
import Contact from './component/Contact'
import ArticleNews from './Article/page'
import Doctor from './component/Doctors'


export default function page() {
  return (
    <div>
    <Body />
    <Dentist />
    <Doctor />
    <Schedule />
   <ArticleNews />
    <Test />
    <Contact />
  
    </div>
  )
}
