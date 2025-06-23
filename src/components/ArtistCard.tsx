'use client'
import Image from "next/image";

interface Props {
    id:number;
  name: string;
  location: string;
  priceRange: string;
  category: string;
  image: string;
}

const ArtistCard = ({ name, category, location, priceRange, image }: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Artist Image */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="p-5">
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h6>
        <p className="font-medium text-gray-700 dark:text-gray-400">📍 {location}</p>
        <p className="font-medium text-gray-700 dark:text-gray-400">💰 {priceRange}</p>
        <p className="font-medium text-gray-700 dark:text-gray-400">🎭 {category}</p>

        <button
          onClick={() => console.log(`Asking for quote from ${name}`)}
          className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
        >
          Ask for Quote
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;
