import { TbDentalBroken, TbDental, TbDentalOff } from "react-icons/tb";
import { FaTooth } from "react-icons/fa";
import {Oswald} from 'next/font/google'

const osw = Oswald({subsets:['latin'], weight: ['200']})

const data = [
  {
    id: "a",
    icon: <TbDentalBroken size={30} className='text-purple-400 text-center' />,
    title: "Cavity filling",
    topic: "Fillings may be small, but they have the power to restore smiles and preserve the strength of teeth, turning cavities into triumphs.",
    background: "bg-purple-300",
 
  },
  {
    id: "b",
    icon: <TbDental size={30} className='text-teal-500' />,
    title: "Fluoride treatment",
    topic: "Like a shield for your teeth, fluoride treatment stands strong, fortifying enamel and defending smiles against the relentless forces of decay.",
    background: "bg-teal-300",
  
  },
  {
    id: "c",
    icon: <FaTooth size={25} className='text-lime-500' />,
    title: "Dental prevention",
    topic: "Prevention is the key to unlocking a lifetime of dental wellness. Prioritize your oral hygiene, regular check-ups. So you can live well",
    background: "bg-lime-300",

  },
  {
    id: "d",
    icon: <TbDentalOff size={30} className='text-red-500' />,
    title: "Tooth extraction",
    topic: "Tooth extraction is a bittersweet farewell, bidding adieu to pain and discomfort while paving the way for healing and a fresh start for your oral health journey.",
    background: "bg-red-300",
 
  },
];

const color = ["bg-purple-100", "bg-teal-100", "bg-lime-200", "bg-red-200"];


export default function Dentist() {
  const dental = data.map((tooth, index) => (
    <div key={tooth.id} className={`flex flex-col items-center justify-center ${color[index]} p-4`}>
      <div className={`rounded-ss-[2.5rem] rounded-t-[0.625rem] rounded-br-[1.875rem] rounded-e-[0.625rem] ${tooth.background} p-8`}>
        <div className='rotate-45'>
          <h2 className='-rotate-45'>{tooth.icon}</h2>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-center font-bold'>{tooth.title}</p>
        <p className='text-center'>{tooth.topic}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <div className='p-10' >
          <div className='flex text-[#6883F7] p-5 justify-center'>
          <h2>SERVICES</h2>
          </div>
          <div className='flex text-[#020427] justify-center'>
         <p className={`md:text-[2rem] text-center md:w-[20%] ${osw.className}`}> Experienced in multiple medical practices</p>
         </div>
        </div>
      </div>
      <div className='grid justify-center p-5'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
          {dental}
        </div>
      </div>
    </div>
  );
};



