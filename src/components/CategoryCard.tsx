import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: Props) => {
  return (
    <Link href={link} className="bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition p-4 text-center">
      <div className="w-full h-80 relative mb-4">
        <Image src={image} alt={title} fill className="object-cover rounded-lg" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </Link>
  );
};

export default CategoryCard;
