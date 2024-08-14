import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    await dbConnect()
    const url = new URL(request.url)
    const _id = url.searchParams.get('_id')
    if (!_id) {
        return NextResponse.json({
            success: false,
            message: "Inval_id request"
        },
        {status: 400})
    }
    try {
        const topic = await TopicModel.findById(_id).lean()
        if (!topic) {
            return NextResponse.json({
                success: false,
                message: "Topic not found"
            },
            {status: 404})
        }
        return NextResponse.json({
            success: true,
            data: topic
        },
        {status: 200})
        } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        },
        {status: 500})
    }
}