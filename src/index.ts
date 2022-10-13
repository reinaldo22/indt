import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import authUser from './routes/adminRouter';
import userRouter from './routes/userRouter';
import '../src/database/db';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors())
app.use(authUser);
app.use(userRouter);

app.listen(8000, () => console.log("Server start"));

