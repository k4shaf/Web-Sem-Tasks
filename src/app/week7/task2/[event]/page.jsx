import React from 'react'
import Card from './card';
import data from '../data.json';

export default function AnotherPage({ params }) {

    const eventData = data.find((event) => event.id == params.event);

    if (!eventData) {
        return <div>Event not found</div>;
    }

    return (
        <div>
            {/* Top Section */}
            <div className="h-[30vh] bg-blue-400 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold -translate-y-6">{eventData.title}</h1>
            </div>

            {/* Bottom Section */}
            <div className="h-[70vh] bg-gray-200 flex flex-col items-center justify-center">

                <Card data={eventData} />

                <div className="mx-52 mt-8 text-center -translate-y-36">
                    <p>
                        Everyone can learn to code! Yes, everyone! In this live event, we are going to go
                        through all the key basics and get you started with programming as well.
                    </p>
                </div>
            </div>
        </div>
    )
}
