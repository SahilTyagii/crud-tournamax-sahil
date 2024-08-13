import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";
import { Topic } from "@/models/model";

export const PUT = async (request: Request) => {
    await dbConnect()
    const { id, Title, Description }: Topic = await request.json()
    try {
        await TopicModel.findByIdAndUpdate(id, {Title, Description})
        return Response.json({
            success: true,
            message: "Topic updated successfully"
        },
        {status: 200})
    }
    catch (error: any) {
        return Response.json({
            success: false,
            message: "Internal server error"
        },
        {status: 500})
    }
}