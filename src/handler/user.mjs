// import { deleteUserById, findAllUsers, findUserById, saveUser, updateUserById } from "../service/db-service.mjs";

import { User } from "../model/user-model.mjs";

export async function getUsers(request, response) {
  const users = await User.find();

  const { filter, value } = request.query;
  
  if (filter && value) {
    const filterUser = users.filter((user) => user[filter].includes(value));
    return response.status(200).send(filterUser);
  }

  response.status(200).send(users);
}

export async function getUserById(request, response) {
  const parseId = request.params.id;

  try {
    const user = await User.findById(parseId);
    if (!user) {
      return response.status(404).send('User not found');
    }
    response.status(200).send(user);
  } catch (err) {
    return response.status(400).send('Bad Request');
  }
}

export async function addUser(request, response) {
  const user = await User.insertOne(request.body);
  response.status(201).send(user)
}

export async function updateUser(request, response) {
  const parseId = request.params.id;

  try {
    const user = await User.findById(parseId);
    if (!user) {
      return response.status(404).send('User not found');
    }
    await User.updateOne({_id:parseId}, {"$set":{username:request.body.username, displayName:request.body.displayName}});
    const updatedUser = await User.findById(parseId);
    response.status(200).send(updatedUser)
  } catch (err) {
    console.log(err);
    
    return response.status(400).send('Bad Request');
  }
}

export async function deleteUser(request, response) {
  const parseId = request.params.id;

  try {
    await User.findByIdAndDelete(parseId);
    response.status(200).send();
  } catch (err) {
    response.status(400).send();
  }
}

/*
function validRequest(request) {
  const { username, displayName } = request.body;

  if (!username || !displayName) {
    return false;
  }
  return true;
}
*/