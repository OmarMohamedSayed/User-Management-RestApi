import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUsers = (req, res) => {
  const newuser = req.body;
  const userid = uuidv4();
  const userwithid = { ...newuser, userid };
  users.push(userwithid);
  res.send(`add new user with id: ${userwithid.userid}`);
};

export const getUser = (req, res) => {
  const _id = req.params;
  const founduser = users.find((user) => user.userid === _id.id);
  res.send(founduser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.userid !== id);
    res.send(`user delete id ${id}`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.userid === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(user);
};