import React from 'react'
import ArtistTable from "@/components/Table"
import submitteddata from "@/data/submittedArtist.json"
export const metadata = {
  title: "Manager Dashboard | Artistly",
  description: "View submitted artist profiles, manage applications, and take action.",
};

const page = () => {
  return (

    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-indigo-700 mb-6">
        Manager Dashboard
      </h1>
      Welcome to dashboard page
      <ArtistTable data={submitteddata} />
    </div>
  )
}

export default page
