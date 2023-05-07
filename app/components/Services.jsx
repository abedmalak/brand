'use client'
import { useState } from "react";
import Image from "next/image";
import pic from '/public/assets/images/location.png'
const pillsData = [
  {
    id: 1,
    title: 'Branding',
    cards: [
      {
        id: 1,
        title: 'Logo Design',
        description: 'This is the description for Card 1.1.',
        image: '/card1_1.png', // Replace with the path to your card image
      },
      {
        id: 2,
        title: 'Brand Guidelines',
        description: 'This is the description for Card 1.2.',
        image: '/public/assets/icons/icondemo.png', // Replace with the path to your card image
      },
      // Add more cards as needed
    ],
    image: '/icon1.png', // Replace with the path to your icon
  },
  {
    id: 2,
    title: 'Digital Marketing',
    cards: [
      {
        id: 1,
        title: 'SEO',
        description: 'This is the description for Card 2.1.',
        image: '/card2_1.png', // Replace with the path to your card image
      },
      {
        id: 2,
        title: 'SEM',
        description: 'This is the description for Card 2.2.',
        image: '/card2_2.png', // Replace with the path to your card image
      },
      // Add more cards as needed
    ],
    image: '/public/assets/images/location.png', // Replace with the path to your icon
  },
  // Add more pills as needed
];

const Services = () => {
  const [selectedPill, setSelectedPill] = useState(pillsData[0]);

  return (
    <div id='services' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h1 className='text-4xl font-bold text-center mb-4'>Services</h1>
        <h2 className='text-2xl font-semibold text-center py-4'>What We Do</h2>

        <main className="container mx-auto px-4 py-8">
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
                      <span className='text-lg font-semibold'>{pill.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{selectedPill.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPill.cards.map((card) => (
                  <div key={card.id} className="bg-white shadow-md rounded-lg p-4">
                    <Image src={card.image} alt={card.title} width={150} height={150} />
                    <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
                    <p className="text-gray-700 mt-1">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;
