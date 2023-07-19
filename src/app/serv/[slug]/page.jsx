"use client"
import React from 'react'
import { Shallipopi } from "../page";

function Ahead(params) {
  const plutos = Shallipopi.find((pluto)=> pluto.id === params.slug)
  return plutos ? [plutos]: []
}

export default function page({params}) {
  const plutos = Ahead(params)
  const asake = plutos.map((melvin)=> (
    <div key={melvin.id}>
     <p>{melvin.topic}</p>
    {melvin.link.map((links)=> (
      <div className='w-[30%]' key={links.id}>
      
       <p>{links.details}</p> 
      </div>
    ))}
      
    </div>
  ))

 
  return (
   


    <div className='h-screen p-32  '>
      <div className='grid grid-cols-1 '>
           {asake}
      </div>
     
    </div>
  )
}


