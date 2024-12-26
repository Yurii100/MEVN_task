import { Router } from "express"
import { Todo } from '../models/TodoList'

const router = Router()

router.post('/', async (req, res) => {
    try {
        const NewTodoListItem = new Todo(req.query)
        const result = await NewTodoListItem.save()
        if (!result) throw new Error('Мы не можем сохранить запись')
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

router.get('/', async (req, res) => {
    try {
        const getItems = await Todo.find().sort({ published: -1 })
        if (!getItems) throw new Error('No items')
        res.status(200).send(getItems)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const result = await Todo.updateOne({ "_id": req.params.id }, { $set: req.query })
        if (!result) throw new Error('No items')
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const result = await Todo.deleteOne({ "_id": req.params.id })
        if (!result) throw new Error('No items')
        res.status(200).send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})


export const TodoRouter = router