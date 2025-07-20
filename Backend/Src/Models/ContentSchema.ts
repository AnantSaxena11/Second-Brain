import mongoose, { Schema, Types ,Model } from "mongoose";

const contentTypes = ['image', 'video', 'article', 'audio']; 
export interface IContent extends Document {
    link: string,
    type: string,
    title: string,
    tags: Types.ObjectId[],
    userId: Types.ObjectId
}

const ContentSchema: Schema<IContent> = new Schema<IContent>({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Content : Model<IContent> = mongoose.model('Content',ContentSchema);
