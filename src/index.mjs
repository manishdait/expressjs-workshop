import express from 'express';
import userRouter from './router/user.mjs';

const PORT =  process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(userRouter)

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});

app.get('/', (request, response) => {
  response.status(200).send("Welcome to Express");
});
