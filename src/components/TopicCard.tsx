'use client'
import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import axios from 'axios';
import Link from 'next/link';

interface TopicCardProps {
    _id: string
    title: string
    description: string
    onDelete: (_id: string) => void
}

const TopicCard: React.FC<TopicCardProps> = ({ _id, title, description, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete('/api/delete-topic', {
        data: { id: _id } 
      })
      console.log("Topic deleted successfully")
      onDelete(_id)
    } catch (error) {
      console.error(error)
    }
  }

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
        <button className='text-red-400 hover:text-red-800' onClick={handleDelete}>
            <DeleteForeverRoundedIcon />
        </button>
        <Link href={`/editTopic/${_id}`}>
          <button className='text-slate-500 hover:text-slate-800'>
              <EditRoundedIcon />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TopicCard
