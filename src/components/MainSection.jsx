import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function MainSection() {
    return (
        <div className="flex flex-col items-center bg-slate-900 min-h-screen text-white pt-20">
            <h1 className="text-4xl font-bold text-blue-200">John Wick</h1>
            <p className="text-xl font-semibold mt-2">Actor and Artist</p>

            <p className="text-center max-w-md mt-4">
                John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski (in his directorial debut) from a screenplay by Derek Kolstad.
            </p>

            <div className="flex mt-4 space-x-6">
                <a href="#" className="text-3xl">
                    <FaFacebookF />
                </a>
                <a href="#" className="text-3xl">
                    <FaYoutube />
                </a>
                <a href="#" className="text-3xl">
                    <FaLinkedinIn />
                </a>
            </div>

            <div className="mt-4 rounded-full border-2 border-white overflow-hidden">
                <Image src="/images/johnwick.png" alt="John Wick" className="w-40 h-40 object-cover" width={400} height={400}></Image>
            </div>
        </div>
    );
}

