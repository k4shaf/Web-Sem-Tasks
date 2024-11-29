import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
    return (
        <div className='h-screen flex items-center justify-center flex-col bg-gradient-to-r from-yellow-200 to-yellow-500'>
            <h1 className='text-3xl font-bold mb-2'>Explore our Blogs</h1>
            <Link href='/week12/blogs'>
                <Button>Explore</Button>
            </Link>
        </div>
    )
}