import React from 'react'

export default function Card( {data} ) {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-12 max-w-xl w-full -translate-y-36">
            <div className="flex items-center space-x-10">
                {/* Circular Image */}
                <div className="flex-shrink-0">
                    <img
                        className="h-44 w-44 rounded-full object-cover border-white border-2 "
                        src={data.image}
                        alt="Event"
                    />
                </div>

                {/* Event Details */}
                <div className='text-cyan-300'>
                    <p className="flex items-center mb-2">
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M6 2a2 2 0 00-2 2v1H2a1 1 0 100 2h16a1 1 0 100-2h-2V4a2 2 0 00-2-2H6zM18 9H2v7a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
                        </svg>
                        {data.date}
                    </p>
                    <p className="flex items-center">
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10A5 5 0 0010 5z"
                                clipRule="evenodd"
                            />
                            <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        {data.address}
                    </p>
                </div>
            </div>
        </div>
    )
}
