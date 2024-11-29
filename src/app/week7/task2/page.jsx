import React from 'react'
import Card from './card.jsx'
import data from './data.json'

export default function DynamicContent() {
    return (
        <div className='h-screen flex items-center justify-center flex-col bg-gray-200 p-8'>
            {data.map((data) => (
                <Card data={data} key={data.id}/>
            ))}
        </div>
    )
}
