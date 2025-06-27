'use client'
import React from 'react'

interface Artist {
    id: number,
    name: string,
    category: string,
    feeRange: string,
    city: string
}

interface Props {
    data: Artist[];
}

const Table = ({ data }: Props) => {
    if (data.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-10">No submissions yet.</p>
        )
    }
    return (
        <div className="overflow-x-auto w-full mt-4">
            <table className="min-w-full table-auto border-collapse shadow rounded-md">
                <thead className="bg-indigo-100">
                    <tr>
                        <th className="text-left p-3 text-black">Name</th>
                        <th className="text-left p-3 text-black">Category</th>
                        <th className="text-left p-3 text-black">Fee Range</th>
                        <th className="text-left p-3 text-black">City</th>
                        <th className="text-left p-3 text-black">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((artist) => (
                        <tr key={artist.id} className="border-t ">
                            <td className="p-3">{artist.name}</td>
                            <td className="p-3">{artist.category}</td>
                            <td className="p-3">{artist.feeRange}</td>
                            <td className="p-3">{artist.city}</td>
                            <td className="p-3">
                                <button className="text-sm px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table
