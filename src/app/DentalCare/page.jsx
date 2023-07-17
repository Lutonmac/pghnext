import { info } from 'autoprefixer';
import React from 'react'
import { FaTooth } from 'react-icons/fa'
import { LiaToothSolid } from "react-icons/lia";
import { TbDentalBroken, TbDentalOff } from "react-icons/tb";

import  styles  from "../style.module.css";



const dentalData = [
    {
            id: 'fluoride_treatment',
            border: 'md:border-r-[2px] md:border-b-0 border-b-2  border-black',
            icon: <TbDentalOff size={100} className='rounded-full border-blue-500 border-[5px]'/>,
            topic: 'How to flush  your teeth',
            info: 'Care for your teeth by constant flushing most especially after eating'
    },
    {
        id: 'cavity_filing',
        border: 'md:border-r-[2px] md:border-b-0 border-b-2 border-black',
        icon: <LiaToothSolid size={100} className='rounded-full border-blue-500 border-[5px]'/>,
        topic: 'Handling your cavity filing',
        info: 'Prevent your tooth from decaying by constant check up '

    },
    {
        id: 'Dental_prevention',
        border: 'md:border-r-[0px] border-b-0 border-black',
        icon: <TbDentalBroken size={100} className='rounded-full border-blue-500 border-[5px]'/>,
        topic: 'keeping an healthy tooth',
        info: 'Oral hygiene is as important as breakfast'

    }
] 
const time = new Date()
    const  hrs = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const currentTime =  `${hrs}: ${min}: ${sec}`

export default function page() {
   
  

    const dentalCares = dentalData.map((dentalCare)=> (
        <div className={`p-5 ${dentalCare.border} shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-400  rounded-md bg-white`} key={dentalCare.id}>
            <p className=' flex justify-center p-3 text-blue-500 '>{dentalCare.icon }</p>
            <p className={`flex justify-center uppercase font-bold `}>{dentalCare.topic}</p>
            <p className='flex justify-center'>{dentalCare.info}</p>
            
        </div>
    ))
  return (
   <main className='h-screen'>
    <div className={`md:p-18 `}>
    <div>
        <section className={`flex justify-center  `}>
            <article className={`${styles.lil} `}>
                <p className={`text-[36px] md:text-[45px] p-5 text-white`}>Care for your hygiene </p>
            </article>
            
        </section>
    
        {/* <div className='grid justify-center'>
            <section className='bg-sky-300'>
            <article className='p-7 grid text-center gap-2 md:grid-cols-1'>
                 <h2> Take care of your hygiene</h2>
               <p className='text-center'>Health is wealth</p>
            </article>
              </section>
            </div> */}
    </div>
    <div className='md:py-16 md:px-36 p-7 '> 
    <section className={`grid text-center gap-2 md:grid-cols-3`}>
        {dentalCares}
        </section>
        
    </div>
    <p className='p-2 text-[30px]'>{currentTime}</p>
    </div>
   </main>
  )
}
