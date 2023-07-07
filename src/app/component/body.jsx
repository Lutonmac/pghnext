import Image from 'next/image'

import { UnifrakturCook, Racing_Sans_One, Merriweather_Sans, Lato, Abril_Fatface } from 'next/font/google'
import Link from 'next/link'






const unifraktur = UnifrakturCook({ subsets: ['latin'], weight: [ '700'] })
const bel = Merriweather_Sans({ subsets: ['latin'], weight: ['800']})
const race = Racing_Sans_One({subsets:['latin'], weight:['400']})
const lato = Lato({subsets: ['latin'], weight: ['700']})
const caprasimo = Abril_Fatface({subsets: ['latin'], weight: ['400']})

export default function Body() {
  return (
    <main className=''>
    <div className='md:p-32 py-16 min-h-[70%] bg-[#4977F6]'>
    <section className='grid grid-cols-1 w-full gap-5 md:gap-1 md:grid-cols-2 md:grid-rows-1'>
      <article className='px-8 md:px-16'>
        <h2 className='md:text-4xl sm:w-full sm:text-base md:w-[50%] text-white'>Health is your greatest asset.</h2>
        <p className='md:py-10 py-2 text-sm text-slate-200 md:w-[30%]'>Health is not just the absence of illness, but a state of complete physical, mental, and social well-being.</p>
        <aside className='bg-slate-100 md:w-[35%]'>
          <Link href={`/Book`}><p className='py-5 px-1 text-sm md:text-base text-center'>Book an appointment</p></Link>
        </aside>
      </article>
      <article className='grid'>
        <div className='overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
            width={333}
            height={926}
            alt='/'
            className='w-full h-auto'/>
        </div>
      </article>
    </section>
  </div>
  <div className='bg-[#0A132E] p-8 md:p-14'>
    <section className='flex justify-center text-white py-8 md:py-16'>
      <h2>We&apos;ve been mentioned in the press</h2>
    </section>
    <article>
      <ul className='md:flex p-1 text-[#4977F6] md:justify-around grid justify-center'>
        <a href='https://www.washingtonpost.com/'><li className={`text-2xl ${unifraktur.className}`}>The Washington Post</li></a>
        <a href='https://techcrunch.com/'><li className={`text-2xl ${race.className}`}>TechCrunch</li></a>
        <a href='https://www.bloomberg.com/africa'><li className={`text-2xl ${bel.className}`}>Bloomberg</li></a>
        <a href='https://gizmodo.com/'><li className={`text-2xl ${lato.className}`}>GIZMODO</li></a>
        <a href='https://www.forbes.com/?sh=16081e882254'><li className={`text-2xl ${caprasimo.className}`}>Forbes</li></a>
      </ul>
    </article>
  </div>
</main>

  )
}
