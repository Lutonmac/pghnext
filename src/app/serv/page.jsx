"use client"
import Link from 'next/link';
import React, { useState } from 'react'


const dataArray = [
    {
      id: "1",
      topic: "Medical Ethics",
      description: "Deontology, Codes of Practice, Guidelines, Professionalism",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 1",
          details: "Detailed information about medical ethics, including the principles of deontology, established codes of practice, guidelines for ethical decision-making, and the importance of maintaining professionalism in the medical field.",
        },
      ],
    },
    {
      id: "2",
      topic: "Human Rights",
      description: "Physicians as Human Rights Advocates",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 2",
          details: "Explore the role of physicians in advocating for human rights, promoting social justice, and addressing healthcare disparities. Learn about the ethical responsibilities of healthcare professionals in upholding human rights principles.",
        },
      ],
    },
    {
      id: "3",
      topic: "Structure",
      description: "The Structure of the PGH",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 3",
          details: "Detailed information about the organizational structure of the PGH (Place General Hospital). Learn about the different departments, divisions, and units within the hospital and how they collaborate to provide comprehensive healthcare services.",
        },
      ],
    },
    {
      id: "4",
      topic: "Dental System",
      description: "Why You Should Take Your Dental Health Seriously",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 4",
          details: "Learn about the importance of dental health and how it contributes to overall well-being. Discover the benefits of regular dental check-ups, oral hygiene practices, and preventive measures to maintain optimal dental health.",
        },
      ],
    },
    {
      id: "5",
      topic: "Caring Dentists of the World",
      description: "Leadership: The Caring Dentists of the World Initiative",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 5",
          details: "Explore the initiative of caring dentists around the world who are committed to providing compassionate dental care. Learn about their leadership roles in promoting oral health awareness, community outreach programs, and improving access to dental services.",
        },
      ],
    },
    {
      id: "6",
      topic: "Campaign",
      description: "Outreach Activities to Implement PHG Policies",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 6",
          details: "Discover the various outreach activities and campaigns initiated by the PHG (Place General Hospital) to implement its healthcare policies. Learn how these activities aim to improve public health, raise awareness about specific health issues, and encourage preventive measures.",
        },
      ],
    },
    {
      id: "7",
      topic: "Events",
      description: "Upcoming Events and Programs at PHG",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 7",
          details: "Stay informed about the upcoming events, programs, and workshops organized by PHG. Explore opportunities for professional development, educational seminars, health awareness campaigns, and community engagement initiatives.",
        },
      ],
    },
    {
      id: "8",
      topic: "Alliance and Partners",
      description: "Collaborating for Better Healthcare",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 8",
          details: "Learn about the alliances and partnerships formed by PHG with other healthcare organizations, institutions, and stakeholders. Discover how these collaborations aim to enhance healthcare services, promote research and innovation, and improve patient outcomes.",
        },
      ],
    },
    {
      id: "9",
      topic: "PHG Strategic Plan",
      description: "Driving Healthcare Excellence",
      learnMore: "Learn More",
      link: [
        {
          title: "Link 9",
          details: "Explore the strategic plan of PHG, outlining its vision, mission, and goals in delivering healthcare excellence. Learn about the key initiatives, quality improvement measures, and patient-centered approaches implemented by PHG.",
        },
      ],
    },
    // Add more objects as needed
  ];
  
  
  // Add more objects as needed
  
export let Shallipopi = dataArray.slice()



  export default function Page() {
    const [hoveredId, setHoveredId] = useState(null);
  
    const handleMouseEnter = (id) => {
      setHoveredId(id);
    };
  
    const handleMouseLeave = () => {
      setHoveredId(null);
    };
 
    const Redo = dataArray.map((redos) => (
      <div key={redos.id}>
      <Link href={`/serv/${redos.id}`}>  <section>
          <article
            className={`md:h-72 shadow-slate-500 shadow-lg ${
              redos.id === hoveredId ? "bg-yellow-400" : "bg-[#0A4160]"
            } hover:bg-yellow-400 p-3`}
            onMouseEnter={() => handleMouseEnter(redos.id)}
            onMouseLeave={handleMouseLeave}
          >


            <p
              className={`text-[20px] p-5 font-bold ${
                redos.id === hoveredId ? "text-[#0A4160]" : "text-yellow-400"
              }`}
            >
              {redos.topic}
            </p>
            <p
              className={`p-5 ${
                redos.id === hoveredId ? "text-[#0A4160" : "text-[white]"
              }`}
            >
              {redos.description}
            </p>
            <p className="p-5 flex justify-end">
              <span
                className={`${
                  redos.id === hoveredId ? "text-[#0A4160]" : "text-yellow-400"
                }`}
              >
                {redos.learnMore}
              </span>
            </p>
          </article>
        </section></Link>
      </div>
    ));
  
    return (
      <div>
        <section className="grid md:grid-cols-3 md:grid-row-3 h-[3100px] md:h-[1300px] px-16 py-16 grid-cols-1 md:gap-4 gap-y-2">
        <section className=' md:col-span-3'>
                <article className=''>
                    <ul className='flex justify-between '>
                      
                        <li className=' text-center -mr-3 flex text-sm justify-start'>What we do</li>
                        <li className='text-[#0A4160] md:text-[30px]'>A- A+</li>
                    </ul>
    
                    
                </article>
            </section>
    
    
            <section className=' md:col-span-3'>
                <article className=' '>
                    <p className='py-1 md:text-[50px] text-[#0A4160] font-extralight'>WHAT WE DO</p>
                    <hr className='border-[1px] border-yellow-300 rounded-full'/>
                </article>
            </section>

            
                    {Redo}
          <section className=' md:col-span-3'>
                <article className='py-10'>
                <hr className='border-[1px] border-yellow-300 rounded-full'/>
                </article>
                </section>
        </section>
      </div>
    );
  }
  