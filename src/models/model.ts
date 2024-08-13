import mongoose, { Schema, Document } from "mongoose";

export interface Topic extends Document {
    Title: string
    Description: string
    createdAt: Date
}

const TopicSchema: Schema<Topic> = new Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now()}
});

const TopicModel = (mongoose.models.Topic as mongoose.Model<Topic>) || mongoose.model<Topic>("Topic", TopicSchema);

export default TopicModel;