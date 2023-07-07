

export default function Contact() {
    return (
      <main className='w-full md:px-0'>
      <div className='bg-blue-300 px-4 md:px-14'>
        <div className='max-w-4xl mx-auto'>
          <section className='grid p-8 justify-center'>
            <h2 className='text-center p-5 text-[#6674FD] text-2xl md:text-4xl'>CONTACT US</h2>
            <p className='text-lg text-center md:max-w-[450px] font-semibold'>Get in touch to book your first appointment</p>
          </section>
          <section className='p-3 grid-rows-2 justify-center grid'>
            <article className='p-1 md:p-[0.09rem] flex gap-2'>
              <input type="text" name="" placeholder='First Name' id="" className='p-3 rounded-md placeholder-p-2 w-full' />
              <input type="text" name="" id="" placeholder='Last Name' className='p-3 rounded-md placeholder-p-2 w-full' />
            </article>
            <article className='p-1 md:p-[0.09rem] flex gap-2'>
              <input type="text" placeholder='Phone Number' name="" id="" className='p-3 rounded-md placeholder-p-2 w-full' />
              <input type="text" name="" id="" placeholder='Email' className='p-3 rounded-md placeholder-p-2 w-full' />
            </article>
            <article className='p-1 md:p-[0.09rem] grid'>
              <textarea name="" id="" cols="30" placeholder='Type your text here' rows="10" className='p-3 placeholder-p-1 w-full' />
              <div className="py-2 px-5">
                <button className='p-4 bg-blue-700 shadow-md shadow-blue-600 w-full'>Submit Now</button>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
    
     
    )
  }
  