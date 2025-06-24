"use client";

import React, { useState, useEffect } from "react";

interface FilterBlockProps {
  categories: string[];
  locations: string[];
  priceRanges: string[];
  onFilterChange: (filters: {
    category: string;
    location: string;
    priceRange: string;
  }) => void;
}

const FilterBlock = ({ categories, locations, priceRanges, onFilterChange }: FilterBlockProps) => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    onFilterChange({ category, location, priceRange });
  }, [category, location, priceRange, onFilterChange]);

  return (
    <div className="bg-gray p-5 rounded-xl shadow-xl mb-6 flex flex-col sm:flex-row gap-4">
      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-3 py-2 rounded-md text-sm"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Location Dropdown */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border px-3 py-2 rounded-md text-sm"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Price Range Dropdown */}
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="border px-3 py-2 rounded-md text-sm"
      >
        <option value="">All Price Ranges</option>
        {priceRanges.map((price) => (
          <option key={price} value={price}>
            {price}
          </option>
        ))}
      </select>


    </div>
  );
};

export default FilterBlock;
