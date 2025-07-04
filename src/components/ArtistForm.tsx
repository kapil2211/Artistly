'use client';

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { artistSchema } from "@/lib/validationSchema";
import { categoryOptions, feeRangeOptions, languageOptions } from "@/data/options";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { FaUser, FaGlobe, FaRupeeSign } from "react-icons/fa";
import toast from "react-hot-toast";
import { InferType } from "yup";

type FormValues = InferType<typeof artistSchema>;

const ArtistForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(artistSchema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  useEffect(() => {
    setValue("category", selectedCategories);
  }, [selectedCategories, setValue]);

  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data);
    toast.success("Artist submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white rounded shadow space-y-6 mt-10"
    >
      <h1 className="text-2xl font-bold text-indigo-700">Artist Onboarding</h1>

      {/* Name */}
      <div>
        <label className="block mb-1 font-bold text-black">Name</label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            {...register("name")}
            className="w-full pl-10 pr-3 border px-4 py-2 rounded-2xl text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter artist name"
          />
        </div>
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div>
        <label className="block font-bold text-black mb-1">Bio</label>
        <textarea
          {...register("bio")}
          rows={3}
          className="w-full border px-4 py-2 rounded-2xl text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Write your short intro"
        />
        {errors.bio && <p className="text-red-600 text-sm">{errors.bio.message}</p>}
      </div>

      {/* Category */}
      <MultiSelectDropdown
        label="Category"
        options={categoryOptions}
        selected={selectedCategories}
        onChange={setSelectedCategories}
      />

      {/* Languages */}
      <div>
        <label className="block font-bold text-black mb-1">Languages Spoken</label>
        <div className="grid grid-cols-2 gap-2">
          {languageOptions.map((lang) => (
            <label key={lang} className="flex items-center gap-2 text-black">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages?.message && (
          <p className="text-red-600 text-sm">{errors.languages.message}</p>
        )}
      </div>

      {/* Fee Range */}
      <div>
        <label className="block font-bold text-black mb-1">Fee Range</label>
        <div className="relative">
          <FaRupeeSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <select
            {...register("feeRange")}
            className="w-full border px-4 py-2 pl-8 rounded-2xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select fee range</option>
            {feeRangeOptions.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        {errors.feeRange && <p className="text-red-600 text-sm">{errors.feeRange.message}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block font-bold text-black mb-1">Location</label>
        <div className="relative">
          <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            {...register("location")}
            className="w-full border px-4 py-2 pl-10 rounded-2xl text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your location"
          />
        </div>
        {errors.location && <p className="text-red-600 text-sm">{errors.location.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ArtistForm;
