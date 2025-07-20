import mongoose ,{Types ,Schema, Model} from "mongoose"

export interface ILink extends Document{
    hash : string,
    userId : Types.ObjectId
}

const LinkSchema : Schema<ILink> = new Schema<ILink>({
    hash : {type : String , required : true , unique : true},
    userId : {type : Schema.Types.ObjectId , ref : "User" , required : true}
})

export const Link : Model<ILink> = mongoose.model('Link',LinkSchema);