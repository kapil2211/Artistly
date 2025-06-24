"use client";

import { useEffect, useRef, useState } from "react";

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelectDropdown = ({ label, options, selected, onChange }: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
     <label className="block font-bold mb-1">Category</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border  py-2 rounded-2xl hover:bg-gray-200 hover:shadow-2xl" 
      > 
        {selected.length > 0 ? selected.join(", ") : `Select ${label}`}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded shadow max-h-60 overflow-y-auto">
          {options.map((option) => (
            <label key={option} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
