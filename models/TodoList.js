"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = require("mongoose");
const TodoList = new mongoose_1.Schema({
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
});
exports.Todo = (0, mongoose_1.model)('todoItem', TodoList);
