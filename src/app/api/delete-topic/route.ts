import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";
import { Topic } from "@/models/model";

export const DELETE = async (request: Request) => {
    await dbConnect()
    const { id }: Topic = await request.json()
    try {
        await TopicModel.findByIdAndDelete(id)
        return Response.json({
            success: true,
            message: "Topic deleted successfully"
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