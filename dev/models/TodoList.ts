import { Schema, model } from "mongoose"

const TodoList = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: false,
        default: Date.now()
    }
})

export const Todo = model('todoItem', TodoList)