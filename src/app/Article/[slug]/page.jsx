"use client"
import React, { useEffect, useState } from 'react'
import { doctorInfo } from "../page";
import Image from 'next/image';
import design from '../../style.module.css'



    function dentist(params) {
        const remote = doctorInfo.find((clinic) => clinic.id === params.slug)
        return remote
    }

export default function Page({params}) {
    const remote = dentist(params)
    console.log(remote)
    const [backGroundColor, setBackgroundColor] = useState()
    useEffect(function() {
       function getColor(){
        const colors = ['#3E68FF', '#3F62E3', '#5476F3', '#4769E7', '#5486F3', '#5586F3', '#6586F3']
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
       }
       const interval = setInterval(function(){
        const randomColor = getColor()
        setBackgroundColor(randomColor)
       }, 500)
       return ()=> clearInterval(interval)
    }   
    )
  return (
    <main className={`h-screen ${design.flip}  `} >
    <div className='flex justify-center text-white p md:h-screen items-center'>
        
        <section className={`p-14 border-[1px] border-white shadow-lg shadow-gray-500 mt-10 rounded-md w-screen md:w-[30%] `} style={{background: backGroundColor}} >
            <span className='flex justify-center '>
            <Image src={remote.profileImage} width={500} height={400} className='rounded-md'/></span>
            <div className='py-8'>
      <p className='py-1'>Name: {remote.link.name}</p>
      <p className='py-1'>Profession: {remote.link.title} </p>
      <p className='py-1'>Specialization: {remote.link.specialization}</p>
      <p className='py-1'>Experience: {remote.link.experience}</p>
      <p className='py-1'>Techniques: {remote.link.techniques} </p>
      <h2 className='py-2 text-center text-[20px] text-red-700 underline'>About {remote.link.name}</h2>

      <p className='py-3'>{remote.link.name} is {remote.link.pain_relief} the Doctor has practiced the service for {remote.link.experience}.</p>
      <p className='py-3'>The Doctor has worked with many professional expert in reputable organization including {remote.link.associations[0]}, 
      {remote.link.associations[1]} and {remote.link.associations[2]}.</p></div>
      </section>
      

    </div>
    </main>
  )
}
