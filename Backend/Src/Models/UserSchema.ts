import mongoose, {Model, Schema} from "mongoose";

export interface IUser extends Document {
    username : string,
    password : string
}

const UserSchema : Schema<IUser> = new Schema<IUser>({
    username : {type : String , unique : true , required : true},
    password : {type : String , required : true}
})

export const User : Model<IUser> = mongoose.model<IUser>('User',UserSchema);