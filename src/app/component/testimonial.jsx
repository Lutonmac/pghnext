import Image from 'next/image'
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";


export default function Test() {
  return (
    <main>
    <div className=''>
        <div className="grid justify-center p-5">
    <h2 className='text-center text-[#4977FC]'>TESTIMONIALS</h2>
    <p className='md:text-[30px] px-4 text-center md:w-[550px]'>What our great customer have to say about Dr. Matthew</p>
    </div>

    <div className="md:flex gap-36 md:justify-center p-5 ">
    
    <article className=' flex justify-center'>
        
    <Image 
    src={'https://images.unsplash.com/photo-1643663439099-6e153739c471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'} 
                    alt='/' 
                    width={200} 
                    height={300}  />
                </article>
                <article>
                <q className='font-bold text-[25px]'>
            
            <div className='md:w-[350px]'>
             <p className=' font-normal text-[16px]'>Health is wealth in all ramification.
             Time and health are two precious assets that we don&apos;t recognize and appreciate until they have been depleted</p>
             </div>
            </q>
            <blockquote className='font-bold'>
                Lee Morgan, stock, inc
            </blockquote>
            <address>NEW YORK, NY Team</address>
                </article>
    </div>
    <div className="flex justify-end ">

   
    <div className="p-5 flex gap-4 w-[250px]">
        <span className='p-2 border-[1px]'>
            <AiOutlineArrowLeft  />
            </span>
            <span className='p-2 border-[1px]'>
            <AiOutlineArrowRight />
            </span>
    </div> 
    </div>
    </div>
    </main>
   
  )
}
