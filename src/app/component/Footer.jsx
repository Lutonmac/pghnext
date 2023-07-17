
import Link from "next/link";
import { GiRodOfAsclepius } from "react-icons/gi";
import {Cinzel} from '@next/font/google'

const cin = Cinzel({subsets: ['latin'], weight: ['700']})

export default function Footer() {
    const time = new Date();
    const year = time.getFullYear()
    const option = {weekday: 'short'};
    const day = time.toLocaleDateString('latin', option)
  return (
    <main>
        <div className=''>
            <div className='grid md:grid-cols-5 p-36 gap-4 text-white bg-slate-900  justify-center'>
              
                    <article className=' p-3'>
                        <span className='flex'>
                        <GiRodOfAsclepius className='text-[24px] mt-2 text-green-400' /> 
                        <h2 className='text-[20px] p-3'>PHG</h2>
                        </span>
                        <p className='p-3'>Take your advantage of our health care system, your health is important to us.</p>
                    </article>
           
                
                    <article className='p-3'>
                    <h2 className='text-[20px] p-3'>PRODUCT</h2>
                    <Link href={`/`}> <p className='p-3'>Home</p></Link>
                    <Link href={'/company'}> <p className='p-3'>Company</p></Link>
                    <Link href={'/services'}> <p className='p-3'>Services</p></Link>
                 
                 
                    </article>
         
               
                    <article className=' p-3'>
                    <h2 className='text-[20px] p-3'>RESOURCES</h2>
                    <p className='p-3'>Service Page</p>
                    <p className='p-3'>Blog Past</p>
                    
                    <p className='p-3'>Password</p>
                    </article>
                
             
                    <article className=' p-3'>
                        <h2 className='text-[20px] p-3'>COMPANY</h2>
                     
                        <Link href={``}><p className='p-3'>Style Guide</p> </Link>
                        <Link href={``}><p className='p-3'>Make Template</p></Link>
                        
                        
                        
                    </article>
         
                
                    <article className=' p-3'>
                        <h2 className='text-[20px] p-3'>CONTACT US</h2>
                        <Link href={'/contact'}><p className='p-3'>Contact</p></Link>
                        <p className='p-3'>+234 (0)806-930-587</p>
                        <p className='p-3'>Info@admin.com</p>
                    </article>
            

            </div>
            <div className="bg-slate-900">
                <section className=" text-white flex justify-center text-[24px] p-5">
                   <p className={`${cin.className}`}>Copy right ©{year} Lutonmacus<span className="text-[12px]"><sup>Ⓡ</sup> </span> {day} </p>
                </section>
            </div>
        </div>
    </main>
  )
}
