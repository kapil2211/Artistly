import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import categories from "@/data/categories.json";

export const metadata = {
  title: "Artistly – Discover & Book Top Performing Artists",
  description: "Connect with talented singers, DJs, dancers, and speakers for your events. Instant quotes. Verified profiles.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
