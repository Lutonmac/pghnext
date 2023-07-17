import Link from 'next/link';
import React from 'react'
import { BiSupport } from "react-icons/bi";
import { BsTwitter, BsPinMapFill } from "react-icons/bs";


export default function Kontact() {
  return (
   <main className=''>
    <div className=' px-3 py-32'>
        <section className='grid md:grid-cols-12 gap-10 '>
            <article className='col-span-2 hidden md:block'>
                <div className='bg-gray-700  p-2 text-white'>
                <h2>PGH Info</h2>
                </div>
               <Link href={`/operation`}><p className='p-2 hover:bg-blue-500 '>Operation</p></Link> 
                <hr />
                <p className='p-2 hover:bg-blue-500 '>About us</p>
                <hr />
                <Link href={`/DentalCare`} ><p className='p-2 hover:bg-blue-500 '>Dental Care</p></Link>
                <hr />
                <p className='p-2 hover:bg-blue-500 '>Privacy</p>
                <hr />
                <div className='bg-gray-700  p-2 text-white'>
                <h2>Terms and condition</h2>
                </div>
                <hr />
                <p className="p-2 hover:bg-blue-500 ">General</p>
                <hr />
                <p className="p-2 hover:bg-blue-500 ">Dental</p>

            </article>
            <article className=' col-span-9'>
                <div className='p-2 bg-gray-700 md:w-[80%] text-white '>
                    <h2 className='px-1'>Contact us</h2>
                </div>
                
                <p className='py-5 px-3 md:w-[41%] '>If you would like to contact us for any reason then please fill out the form below.
                     We try to answer all messages within 48 hours.</p>
                     <div className='p-10'>
                    <div className='bg-blue-500 text-white rounded-lg shadow-md shadow-yellow-100 flex justify-center p-3 md:w-[20%]'>
                       <a href="mailto:pgh@gmail.com"><p>SEND US A MESSAGE</p></a> 
                    </div>
                    </div>



                    <div className='p-2  bg-gray-700 md:w-[80%] text-white '>
                <h2 className='px-1 '>Alternative contact methods</h2>
                </div>
                <div className='grid grid-cols-1 grid-rows-3'>
                    <div>
                    <section className='md:flex gap-20 p-10 '>
                        <article className='text-blue-500' >
                            <BiSupport  size={70}/>

                        </article>
                        <article className='p-3 w-[50%] '>
                            <p>To Contact our call center, dial 01-3306666 or 0-15158888 or 01-2525555 or 08099990939
                                 (Operating hours are 08:00 to 21:00).</p>
                                
                        </article>

                    </section>
                    <div className='w-[80%] '>
                    <hr />
                    </div>
                    </div>
                        <div>
                    <section className='md:flex gap-20 p-10 '>
                        <article className='text-blue-500'>
                        <BsTwitter size={70}/>
                        </article>
                        <article className='p-3 md:py-0'>
                            <p>Have a quick question for us?</p>
                            <p className='w-[60%]'>Get in touch through our Twitter customer service here: <a href="https://twitter.com/PGHHelp" className='text-purple-900'>https://twitter.com/PGHHelp</a> </p>
                        </article>
                    </section>
                    <div className='w-[80%] ='> 
                        <hr />
                    </div>
                    <section>

                    </section>
                    </div>
                    <section className='md:flex gap-20 p-10 '>
                        <article className='text-blue-500'>
                        <BsPinMapFill size={70} />
                        </article>
                        <article className='p-3 md:py-0'>
                            <p>PGH</p>
                            <p>Montgomery road,</p>
                            <address>9 d&apos; place adjacent, <br /> Ozone Yaba, Lagos</address>
                        </article>
                    </section>
                </div>

            </article>
        </section>
    </div>
   </main>
  )
}
