import React from 'react'
import Link from 'next/link';
export default function Header() {
  return (
    <div className="flex items-center justify-between px-9 h-16 bg-black text-white ">
      <Link href="/">Next.js</Link>
      <button className='bg-white rounded-lg text-black py-1 border-[1px] border-white px-4'>CV</button>
    </div>
  );
}
