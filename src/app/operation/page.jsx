import React from 'react'

const dentalClinic = [
    {
      id: "one",
      name: "PGH Dental Clinic",
      location: "123 Main Street",
      doctors: ["Dr. Smith", "Dr. Johnson"],
      services: ["Teeth Cleaning", "Fillings", "Root Canals"],
    },
    {
      id: "two",
      name: "PGH Dental Clinic - Branch 1",
      location: "456 Elm Street",
      doctors: ["Dr. Davis", "Dr. Wilson"],
      services: ["Teeth Whitening", "Extractions", "Orthodontics"],
    },
    {
      id: "three",
      name: "PGH Dental Clinic - Branch 2",
      location: "789 Oak Street",
      doctors: ["Dr. Brown", "Dr. Thompson"],
      services: ["Dental Implants", "Cosmetic Dentistry", "Oral Surgery"],
    },
    {
      id: "four",
      name: "PGH Dental Clinic - Branch 3",
      location: "321 Pine Street",
      doctors: ["Dr. Miller", "Dr. Anderson"],
      services: ["Pediatric Dentistry", "Dentures", "Gum Disease Treatment"],
    },
    {
      id: "five",
      name: "PGH Dental Clinic - Branch 4",
      location: "654 Maple Street",
      doctors: ["Dr. Martinez", "Dr. White"],
      services: ["TMJ Treatment", "Sedation Dentistry", "Emergency Dentistry"],
    },
    {
      id: "six",
      name: "PGH Dental Clinic - Branch 5",
      location: "987 Walnut Street",
      doctors: ["Dr. Garcia", "Dr. Lee"],
      services: ["Braces", "Teeth Whitening", "Periodontal Treatment"],
    },
  ];
  
  
export default function page() {
    const operations = dentalClinic.map((operate)=>(
        <div key={operate.id}>
            <section className='p-5 shadow-md text-center shadow-slate-400'>
            <p>{operate.name}</p>
            <p>Consultant: {operate.doctors[0]}, {operate.doctors[1]} </p>
            <address>Address: {operate.location} </address>
           
            </section>
        </div>
    ))
  return (
    <main>
        <div className='h-screen'>
            <section className='grid grid-cols-1 justify-center'>
                <article className='p-36 grid gap-4 md:grid-cols-3 grid-cols-1 grid-rows-5'>
                    {operations}
                </article>
            </section>
        </div>
    </main>
  )
}
