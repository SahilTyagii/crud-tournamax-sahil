'use client'
import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

interface TopicCardProps {
    title: string
    description: string
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description }) => {
  return (
    <div className='w-full border border-[#CBD5E1] flex rounded-md my-4 p-4 justify-between shadow-md hover:shadow-lg ease-in-out'>
      <div className=''>
        <h1 className='text-[#1E293B] font-bold text-2xl'>
            {title}
        </h1>
        <p className='text-[#4D5569]'>
            {description}
        </p>
      </div>
      <div>
        <button className='text-red-400 hover:text-red-800'>
            <DeleteForeverRoundedIcon />
        </button>
        <button className='text-slate-500 hover:text-slate-800'>
            <EditRoundedIcon />
        </button>
      </div>
    </div>
  )
}

export default TopicCard
