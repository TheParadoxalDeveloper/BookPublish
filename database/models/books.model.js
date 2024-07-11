import { model, Schema, Types } from "mongoose";

const booksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now
        
    },
})

export const Books = model('Books', booksSchema)