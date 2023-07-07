
import Image from "next/image";
import Youtube from './Youtube';
import Questions from './questions';

export default function Doctor() {
  return (
    <main className={''}>
     <div className=' w-full py-20'>
        <section className="flex justify-center bg-[#E0F2FC] p-10">
            <article className="">
                <p className=' text-center text-[#5883F7]'>DR. MATTHEW ANDERSON</p>
                <span className="flex justify-center">
                <p className='md:text-[30px] p-2 text-center md:w-[26rem]'>Watch video to learn why he
                <span className='text-center'> is the right doctor for you</span>
                </p>
                </span>
        <span className=" ">
             <Youtube />
             </span>


            </article>
          
        </section>
    </div>
    <Questions />
    </main>
  )
}
