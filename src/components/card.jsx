import Link from 'next/link'
import React from 'react'

export default function Card({ text, link }) {
    return (
        <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center max-w-sm min-h-44">
            <Link className="text-center m-6" href={link}>
            {text}
            </Link>
        </div>
    )
}
