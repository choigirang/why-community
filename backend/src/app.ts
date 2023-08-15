import express from 'express';
import mongoose, { Error } from 'mongoose';
import cors from 'cors';
import { usersRouter } from './routes/users.router';
import cookieParser from 'cookie-parser';
import postRouter from './routes/post.router';

const app = express();
const port = 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(usersRouter, postRouter);
app.listen(port, () => {
  console.log('서버 실행');
});

mongoose
  .connect('mongodb+srv://chlrlfkd:chlrlfkd5633@phenomenon-community.zyo8dzo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('connected successfully'))
  .catch((err: Error) => console.log(err));
