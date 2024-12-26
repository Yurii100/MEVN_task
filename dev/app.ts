import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import { MONGO, PORT } from './config';
import { TodoRouter } from './router/todoItem';

const connectDB = async () => { 
    try { 
        await mongoose.connect(MONGO); 
        console.log('Подключились к БД'); 
    } catch (err) { 
        console.error('Ошибка подключения к БД:', err); 
        process.exit(1); 
    }
}

connectDB();

const app: Application = express()

app.use(express.urlencoded({ extended: false })) // Данный промежуточный обработчик позволяет получать данные из формы и корректно их обрабатывать
app.use('/api/todo-item', TodoRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log('Сервер запущен'))
