import express from 'express';
import mongoose from 'mongoose';

import userRouter from './router/user.mjs';

const PORT =  process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(userRouter)

app.get('/', (request, response) => {
  response.status(200).send("Welcome to Express");
});

const start = async () => {
  await mongoose.connect("mongodb://root:password@localhost:27017/pg_db?authSource=admin");
  
  app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
  });
}

start();

