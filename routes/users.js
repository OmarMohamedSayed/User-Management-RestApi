import express from 'express';

import {
  getUsers,
  createUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const userroute = express.Router();

userroute.get("/", getUsers);
userroute.post("/", createUsers);

// /users/2 ==> req.params {id:2}
userroute.get("/:id", getUser);

userroute.delete("/:id", deleteUser);
userroute.patch("/:id", updateUser);
export default userroute;