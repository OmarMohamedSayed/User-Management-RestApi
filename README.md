# User-Management-RestApi
User Management REST API using NodeJS and Express to addUser, DeleteUser, UpdateUser, GetUsers informations
# Installing
To install user mangement
 
```
npm install nodejsApi
```
## Usage

### Create a user

Here is some example code for creating a user
```javascript
export const createUsers = (req, res) => {
  const newuser = req.body;
  const userid = uuidv4();
  const userwithid = { ...newuser, userid };
  users.push(userwithid);
  res.send(`add new user with id: ${userwithid.userid}`);
};
```
### Get all users 

Here is some example code for get all users
```javascript
export const getUsers = (req, res) => {
  res.send(users);
};
```
### Delete a user

Here is some example code for delete a user
```javascript
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.userid !== id);
    res.send(`user delete id ${id}`);
};
```

### Update a user

Here is some example code for update a user
```javascript
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
```
