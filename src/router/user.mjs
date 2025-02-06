import router from 'express';
import { addUser, deleteUser, getUserById, getUsers, updateUser } from '../handler/user.mjs';
import { loggingMiddleware } from '../middleware/logging.mjs';

const userRouter = router();

userRouter.get("/api/users", loggingMiddleware, getUsers);

userRouter.get("/api/users/:id", loggingMiddleware, getUserById);

userRouter.post("/api/users", loggingMiddleware, addUser);

userRouter.put("/api/users/:id", loggingMiddleware, updateUser);

userRouter.delete("/api/users/:id", loggingMiddleware, deleteUser);

export default userRouter;