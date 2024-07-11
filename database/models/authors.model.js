import { model, Schema, Types } from "mongoose";

const authorsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: String,
    birthDate: Date,
    books: {
        type: Types.ObjectId,
        ref: 'Books'
    }
})

export const Authors = model('Authors', authorsSchema)