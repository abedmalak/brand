import Image from "next/image";

const images = [
  'https://source.unsplash.com/random/800x600?sig=2',
  'https://source.unsplash.com/random/800x600?sig=2',
  'https://source.unsplash.com/random/800x600?sig=3',
  'https://source.unsplash.com/random/800x600?sig=4',
  'https://source.unsplash.com/random/800x600?sig=5',
  'https://source.unsplash.com/random/800x600?sig=6',
];

const Clients = () => {
  return (
    <div>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
           <div key={index} className="w-full h-72 overflow-hidden rounded-lg shadow-md bg-white flex flex-col">
           <div className="w-full h-0 pb-[75%] relative">
             <img
               src={image}
               alt={`Gallery image ${index + 1}`}
               className="absolute top-0 left-0 w-full h-full object-cover"
             />
           </div>
         </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Clients;
