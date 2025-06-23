import React from 'react'
import artists from "@/data/artists.json"
import ArtistCard from '@/components/ArtistCard'
const page = () => {
    return (
        <div className='pt-15'>
             <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {artists.map((item)=>(
                    <ArtistCard key={item.id} {...item}/>
                ))}
            </div>
        </div>
        </div>
       

    )
}

export default page
