'use client'
import TopicCard from "@/components/TopicCard";
import React, { useState } from "react";
import axios from "axios";
import Header from "@/components/Header";

export default function Home() {
  interface Topic {
    _id: string;
    Title: string;
    Description: string;
    createdAt: Date;
  }

  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  React.useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("/api/get-topics");
        setTopics(response.data.data);
        console.log(response.data); // Log response data to confirm it's correct
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  const handleDelete = (_id: string) => {
    setTopics((prevTopics) => prevTopics.filter(topic => topic._id !== _id));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-4 bg-white">
      <div className="lg:w-1/2 md:w-3/4 w-full">
        <Header />
        {
          topics.length > 0 ? null : <h1 className="text-2xl text-center text-gray-400">No topics found</h1>
        }
        {
          Array.isArray(topics) && topics.map((topic) => (
            <div key={topic._id}>
              <TopicCard _id={topic._id} title={topic.Title} description={topic.Description} onDelete={handleDelete}/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
