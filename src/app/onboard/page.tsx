import React from 'react'
import ArtistForm from '@/components/ArtistForm'

export const metadata = {
  title: "Artist Registration | Artistly",
  description: "Submit your profile to perform at events and get booked by event organizers.",
};


const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <ArtistForm />
    </div>
  )
}

export default page
