'use client'

import { useState } from "react";
import Image from "next/image";

const pillsData = [
  {
    id: 1,
    title: 'Pill 1',
    description: 'This is the description for Pill 1.',
    image: '/icon1.png', // Replace with the path to your icon
  },
  {
    id: 2,
    title: 'Pill 2',
    description: 'This is the description for Pill 2.',
    image: '/icon2.png', // Replace with the path to your icon
  },
  {
    id: 3,
    title: 'Pill 3',
    description: 'This is the description for Pill 3.',
    image: '/icon3.png', // Replace with the path to your icon
  },
  {
    id: 4,
    title: 'Pill 4',
    description: 'This is the description for Pill 4.',
    image: '/icon4.png', // Replace with the path to your icon
  },
  {
    id: 5,
    title: 'Pill 5',
    description: 'This is the description for Pill 5.',
    image: '/icon5.png', // Replace with the path to your icon
  },
];


const Services = () => {

  const [selectedPill, setSelectedPill] = useState(pillsData[0]);

  
  return (
    <div id='services' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#3b5998]'>
          Skills
        </p>
        <h2 className='py-4'>What We Do</h2>
        
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Pills Tab</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul>
              {pillsData.map((pill) => (
                <li key={pill.id} className="mb-4">
                  <button
                    onClick={() => setSelectedPill(pill)}
                    className={`flex items-center gap-4 p-4 rounded-full transition duration-300 ease-in-out ${
                      selectedPill.id === pill.id
                        ? 'bg-ff2c5c text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Image src={pill.image} alt={pill.title} width={60} height={60} />
                    <span>{pill.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{selectedPill.title}</h2>
            <p>{selectedPill.description}</p>
          </div>
        </div>
      </main>
    </div>
        </div>


      </div>
  );
};

export default Services;
