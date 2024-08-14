'use client'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'

interface EditTopicProps {
    params: {
        _id: string
    }
}

const EditTopic: React.FC<EditTopicProps> = ({ params }) => {
    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const response = await axios.get('/api/get-topic', {
                    params: {
                        _id: params._id
                    }
                })
                setTopic(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchTopic()
    }, [params._id])

    const [topic, setTopic] = useState({
        Title: '',
        Description: '',
        _id: ''
    })

    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTopic((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.put(`/api/update-topic`, topic)
            console.log(response.data)
            window.location.href = '/'
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    } 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-4 bg-white">
      <div className="lg:w-1/2 md:w-3/4 w-full">
        <Header />
        <div className='flex justify-center'>
            <form className='flex flex-col w-8/12 p-8 shadow-md rounded-lg text-gray-800' onSubmit={handleSubmit}>
                <input type="text" name='Title' id='title' placeholder='Topic Title' className='py-2 px-4 border border-[#CBD5E1] my-2 rounded-md focus:outline-green-500' value={topic.Title} onChange={handleChange}/>
                <textarea name="Description" id="description" placeholder='Topic Description' className='py-2 px-4 border border-[#CBD5E1] my-2 rounded-md focus:outline-green-500' value={topic.Description} onChange={handleChange}/>
                <button type='submit' className='py-3 my-4 px-6 bg-green-600 hover:bg-green-700 font-semibold text-white rounded-md'>
                    {
                        loading ? <Oval height='30' width='30' color='#fff' /> : 'Update Topic'
                    }
                </button>
            </form>
        </div>
        
        </div>
    </main>
  )
}

export default EditTopic
