import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";
import { Topic } from "@/models/model";
import mongoose from "mongoose";

export const GET = async () => {
    await dbConnect()
    try {
        const topics: Topic[] = await TopicModel.find()
        return Response.json({
            success: true,
            data: topics
        },
        {status: 200})
    } catch (error: any) {
        return Response.json({
            success: false,
            message: "Internal server error"
        },
        {status: 500})
    }
}