import React from 'react'




export default function Book() {
  return (
   <main  className='py-12'>
    <div>
        <section className='md:py-32 py-5 bg-blue-700'>
            <article className='p-5  md:px-28'>
                <h2 className={`text-[4rem] text-white`}>
                    Book Us
                </h2>
            </article>
        </section>
        <div>
            <section className='md:flex gap-4  md:px-28 p-5'>
                <article>  
                <label htmlFor="">Patient Name</label>
                <br />
                <input type="text" name="" id="" className='border-[1px] md:px-10 py-3'/></article>
              <article>
                 <label htmlFor="">Email</label>
                 <br />
                <input type="text" name="" id=""  className='border-[1px] md:px-10 py-3 '/>
              </article>
            </section>
            <section className='md:flex gap-4 md:w-[100%] md:px-28 p-5'>
                <article>
                        <label htmlFor="">Phone</label>
                        <br />
                        <input type="number" name="" id="" className='border-[1px] md:px-10 py-3 '/>
                </article>
                <article>
                    <label htmlFor="">City</label>
                    <br />
                    <input type="text" name="" id="" className='border-[1px] md:px-10 py-3 '/>
                </article>
            </section>
            <section className=' md:px-24'>
                <article className='p-5'>
                    <label htmlFor="">Select dental service</label>
                    <br />
                  <select name="" id="" className='md:w-[41%] border-[1px] p-3 shadow-md shadow-gray-400'>
                    <optgroup>
                        <option value="">Cavity Filing</option>
                        <option value="">Fluoride Treatment</option>
                        <option value="">Dental Prevention</option>
                        <option value="">Tooth Extraction</option>
                    </optgroup>
                  </select>
                </article>
            </section>
            <section className='p-5 md:px-28'>
                <article className='py-3'>
                    <label className='py-3' htmlFor="">How do you hear about us</label> 
                    <br />
                    <textarea name="" id="" cols="30" placeholder='How do you hear about us' rows="10" className='border-[1px] placeholder:p-3 md:w-[41%] shadow-md shadow-gray-500'></textarea>
                   <br />
                   <div className='p-2'>
                   <button className='bg-blue-700 text-white p-4 rounded-md shadow-md shadow-slate-300'>Submit</button>
                   </div>
                  
                </article>
            </section>
        </div>
    </div>
   </main>
  )
}
