"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRouter = void 0;
const express_1 = require("express");
const TodoList_1 = require("../models/TodoList");
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const NewTodoListItem = new TodoList_1.Todo(req.query);
        const result = yield NewTodoListItem.save();
        if (!result)
            throw new Error('Мы не можем сохранить запись');
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getItems = yield TodoList_1.Todo.find().sort({ published: -1 });
        if (!getItems)
            throw new Error('No items');
        res.status(200).send(getItems);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TodoList_1.Todo.updateOne({ "_id": req.params.id }, { $set: req.query });
        if (!result)
            throw new Error('No items');
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TodoList_1.Todo.deleteOne({ "_id": req.params.id });
        if (!result)
            throw new Error('No items');
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
exports.TodoRouter = router;
