import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="bg-[#1E293B] flex p-3 items-center justify-between mb-8">
          <h1 className="font-bold text-xl hover:text-slate-300">
          <Link href='/'>Tournamax Assignment Solution</Link>
          </h1>
          <Link href='/addTopic'>
            <button className="bg-white text-[#1E293B] px-4 py-2 rounded-md font-semibold hover:bg-blue-50" >
                Add Topic
            </button>
          </Link>
        </div>
  )
}

export default Header
