import router from 'express';
import { addUser, deleteUser, getUserById, getUsers, updateUser } from '../handler/user.mjs';

const userRouter = router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/", addUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;