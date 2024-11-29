import React from 'react'
import Image from 'next/image'

export default function ImageSection() {
    return (
        <>
            <div className="flex justify-center bg-slate-900">
                <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
                    <Image
                        src="/images/johnwick.png"
                        alt="John Wick Image 1"
                        className="object-cover rounded-lg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/images/johnwick.png"
                        alt="John Wick Image 2"
                        className="object-cover rounded-lg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/images/johnwick.png"
                        alt="John Wick Image 2"
                        className="object-cover rounded-lg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/images/johnwick.png"
                        alt="John Wick Image 2"
                        className="object-cover rounded-lg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/images/johnwick.png"
                        alt="John Wick Image 2"
                        className="object-cover rounded-lg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/images/johnwick.png"
                        alt="John Wick Image 2"
                        className="object-cover rounded-lg"
                        width={400}
                        height={400}
                    />

                </div>
            </div>
        </>
    )
}
