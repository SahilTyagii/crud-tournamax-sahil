import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";
import { Topic } from "@/models/model";

export const POST = async (request: Request) => {
    await dbConnect()
    interface TopicRequestBody {
        Title: string;
        Description: string;
    }
    const { Title, Description }: TopicRequestBody = await request.json();
    const newTopic = new TopicModel({
        Title,
        Description,
        createdAt: new Date()
    })
    try {
        await newTopic.save()
        return Response.json({
            success: true,
            message: "Topic added successfully",
        },
        {status: 200})
    } catch (error: any) {
        return Response.json({
            success: false,
            message: "Internal server error",
        },
        {status: 500})
    }
}