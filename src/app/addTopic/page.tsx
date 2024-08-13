'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import axios from 'axios'

const AddTopicPage: React.FC = () => {
    const [topic, setTopic] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/add-topic', {
                Title: topic.title,
                Description: topic.description
            })
            console.log(response.data)
            window.location.href = '/'
        } catch (error) {
            console.error(error)
        }
    }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-4 bg-white">
      <div className="lg:w-1/2 md:w-3/4 w-full">
        <Header />
        <form className='w-full flex flex-col my-8 space-y-4 text-gray-900' onSubmit={handleSubmit}>
            <input type="text" name='title' id='title' placeholder='Topic Title' value={topic.title} onChange={(e) => setTopic((prev) => ({...prev, title: e.target.value}))} className='py-2 px-4 border border-slate-500'/>
            <input type="text" name="description" id="description" placeholder='Topic Description' value={topic.description} onChange={(e) => setTopic((prev) => ({...prev, description: e.target.value}))} className='py-2 px-4 border border-slate-500'/>
            <div>
                <button type='submit' className='py-3 px-6 bg-green-500 hover:bg-green-600 font-semibold text-white'>
                    Add Topic
                </button>
            </div>
        </form>
    </div>
    </main>
  )
}

export default AddTopicPage
