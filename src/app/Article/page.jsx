import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";




const data = [
    {   id: "one",
        bg: "bg-blue-200",
        topic: "Article",
        detail: "Should you be texted post covid messages",
        profileImage: "https://plus.unsplash.com/premium_photo-1661607362501-5c6556ebc846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        link: 
            {
            name: "Dr. Mary Green",
            title: "Dentist",
            specialization: "Tooth cavity filling",
            experience: "5+ years",
            techniques: "Latest techniques and materials",
            pain_relief: "Skilled in providing pain relief",
            associations: ["American Dental Association", "Texas Dental Association", "Houston Dental Society", "Fellow of the American College of Dentists"],
        }
    
    },
    {   id: "two",
        bg: "bg-red-200",
        topic: "Article",
        detail: "Overeating? Mind-fullness exercise can support.",
        profileImage: "https://images.unsplash.com/photo-1612636322033-f48f76c34bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: {
            name: "Dr. Jonathan Boris",
            title: "Dentist",
            specialization: "Tooth extraction",
            experience: "8+ years",
            techniques: "Uses the latest techniques and materials",
            pain_relief: "Skilled in providing pain relief.",
            associations: ["American Dental Association", "Texas Dental Association", "Houston Dental Society", "Fellow of the American College of Dentists"],
          }
           
          
    },
    {
        id: "three",
        bg: "bg-blue-200",
        topic: "Article",
        detail: "Can vitamine supplements prevent health issues?",
        profileImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: 
            {
            name: "Dr. Mathew Jones",
            title: "Dentist",
            specialization: "Fluoride treatment",
            experience: "6+ years",
            techniques: "Uses the latest techniques and materials",
            pain_relief: "Skilled in providing pain relief.",
            associations: ["American Dental Association", "Texas Dental Association", "Houston Dental Society", "Fellow of the American College of Dentists"],
          }
        
    }
]
export let doctorInfo = data.slice()
export default function Article() {
    const doctors = data.map((doctor)=>(
        <div key={doctor.id} className={`border-[1px] rounded-md  shadow-md md:hover:shadow-2xl transition-all ease-in-out md:hover:shadow-gray-500 shadow-gray-600 border-black p-4 ${doctor.bg}`}>
        <Link href={`../Article/${doctor.id}`}> <span className='flex justify-center'>
         <Image src={doctor.profileImage} alt={doctor.link.name} width={400} height={200} title={`Read more information about ${doctor.link.name}`}  />
         </span>
         <span className='p-3'>
          <p className=''>{doctor.topic}</p>
          <p>{doctor.detail}</p>
          <span className='flex'>
            <p>Link arrow </p><BsArrowRightShort size={25}/> 
            </span> </span></Link>
        </div>
    ))
  return (
    <main> 
    <div className='flex justify-center' >
    <div className='grid md:grid-cols-3 grid-cols-1 p-10 w-[80%] md:w-[50%] gap-10'>
        {doctors}
    </div>
    </div>
    </main>
  )
}
