"use client";

import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    // There are two ways
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
      };

    return (
        <div className='h-screen bg-teal-200 flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Counter Program</h1>
                <h1 className='text-3xl font-bold'>{counter}</h1>
                
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2' onClick={increment}>PILUS 1</button>
                
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2' onClick={() => setCounter(counter - 1)}>MINOS 1</button>
                
            </div>
        </div>

    )
}
