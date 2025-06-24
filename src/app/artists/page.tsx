"use client";

import { useCallback, useMemo, useState } from "react";
import allArtists from "@/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

// interface Artist {
//     id: number;
//     name: string;
//     category: string;
//     location: string;
//     priceRange: string;
//     image: string;
// }

const ArtistListingPage = () => {
   
    const [filters, setFilters] = useState({
        category: "",
        location: "",
        priceRange: ""
    });

    //we can use it also 

    // useEffect(() => {
    //     const { category, location, priceRange } = filters;

    //     const filtered = allArtists.filter((artist) => {
    //         return (
    //             (!category || artist.category === category) &&
    //             (!location || artist.location === location) &&
    //             (!priceRange || artist.priceRange === priceRange)
    //         );
    //     });

    //     setFilteredArtists(filtered);
    // }, [filters]);

    // but more optimied for large data sets
    // use Memo() is better option 

    const filteredArtists = useMemo(() => {
    const { category, location, priceRange } = filters;

    return allArtists.filter((artist) => {
      return (
        (!category || artist.category === category) &&
        (!location || artist.location === location) &&
        (!priceRange || artist.priceRange === priceRange)
      );
    });
  }, [filters]);

  // ✅ Stable callback for filter change
  const handleFilterChange = useCallback(
    (newFilters: typeof filters) => {
      setFilters(newFilters);
    },
    []
  );



    // Extract unique values from the JSON for dropdowns
    const categories = useMemo(() => [...new Set(allArtists.map(a => a.category))], []);
    const locations = useMemo(() => [...new Set(allArtists.map(a => a.location))], []);
    const priceRanges = useMemo(() => [...new Set(allArtists.map(a => a.priceRange))], []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
                Explore Our Artists
            </h1>

            <FilterBlock categories={categories} locations={locations} priceRanges={priceRanges} onFilterChange={handleFilterChange} />

            {filteredArtists.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">No artists found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredArtists.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            name={artist.name}
                            category={artist.category}
                            location={artist.location}
                            priceRange={artist.priceRange}
                            image={artist.image} id={0} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default ArtistListingPage;
