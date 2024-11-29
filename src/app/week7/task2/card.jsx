import Link from 'next/link'
import React from 'react'

export default function Card({data}) {
    return (
        <div className="max-w-4xl mt-4 bg-white shadow-md rounded-lg overflow-hidden flex">
            {/* Left Side (Image) */}
            <div className="w-2/4">
                <img
                    className="h-[400px] w-[800px] object-cover"
                    src={data.image}
                    alt="Programming"
                />
            </div>

            {/* Right Side (Content) */}
            <div className="w-4/6 p-6">
                <h3 className="text-2xl font-bold">{data.title}</h3>
                <p className="text-gray-500 mt-2">{data.date}</p>
                <p className="text-gray-500 mb-4">{data.address}</p>
                <Link href={`/week7/task2/${data.id}`} className=" bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded">
                    Explore Event →
                </Link>
            </div>
        </div>

    )
}
