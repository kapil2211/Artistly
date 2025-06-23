import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className=" relative h-screen w-screen">


      <Image
        src="/images/party2.jpg"
        alt="Hero Background"
        fill
        className="object-cover "
        priority/>


      <div className=" relative z-10 flex flex-col h-full w-full items-center justify-center bg-black/60">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Discover & Book Top Performing Artists
        </h1>
        <p className="text-gray-200 mb-6 max-w-xl">
         From singers and DJs to speakers and dancers — find top talent for any event. Artistly connects you with trusted performers for a seamless booking experience
        </p>
        <Link
          href="/artists"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Explore Artists
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
