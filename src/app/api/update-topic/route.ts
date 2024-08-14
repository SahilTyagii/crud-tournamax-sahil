import dbConnect from "@/db/dbConnect";
import TopicModel from "@/models/model";

export const PUT = async (request: Request) => {
    await dbConnect()
    const { _id, Title, Description } = await request.json()
    try {
        await TopicModel.findByIdAndUpdate(_id, {Title, Description})
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