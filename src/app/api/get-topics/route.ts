import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";
import { NextResponse } from 'next/server';

export const GET = async () => {
    await dbConnect()
    try {
        const topics = await TopicModel.find().lean()
        console.log(topics)
        return NextResponse.json({
            success: true,
            data: topics
        }, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        },
        {status: 500})
    }
}