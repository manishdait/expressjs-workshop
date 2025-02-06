import { deleteUserById, findAllUsers, findUserById, saveUser, updateUserById } from "../service/db-service.mjs";

export async function getUsers(request, response) {
  const users = await findAllUsers();

  const { filter, value } = request.query;
  
  if (filter && value) {
    const filterUser = users.filter((user) => user[filter].includes(value));
    return response.status(200).send(filterUser);
  }

  response.status(200).send(users);
}

export async function getUserById(request, response) {
  const parseId = parseInt(request.params.id);
  
  if (isNaN(parseId)) {
    return response.status(400).send('Bad Request, Invalid user id');
  }

  const user = await findUserById(parseId);

  if (!user) {
    return response.status(404).send('User not found');
  }
  response.status(200).send(user);
}

export async function addUser(request, response) {
  if (!validRequest(request)) {
    return response.status(400).send("Bad Request")
  }

  const { username, displayName } = request.body;

  const user = await saveUser({username: username, displayName: displayName});
  response.status(201).send(user)
}

export async function updateUser(request, response) {
  if (!validRequest(request)) {
    return response.status(400).send("Bad Request, Invalid parameters")
  }

  const { username, displayName } = request.body;
  const parseId = parseInt(request.params.id);

  if (isNaN(parseId)) {
    return response.status(400).send('Bad Request, Invalid user id');
  }

  const user = await findUserById(parseId);
  if (!user) {
    return response.status(404).send('User not found');
  }

  const updatedUser = await updateUserById(parseId, {username: username, displayName: displayName})
  
  response.status(200).send(updatedUser)
}

export async function deleteUser(request, response) {
  const parseId = parseInt(request.params.id);

  if (isNaN(parseId)) {
    return response.status(400).send('Bad Request, Invalid user id');
  }

  const user = await findUserById(parseId);
  if (!user) {
    return response.status(404).send('User not found');
  }

  await deleteUserById(parseId);
  response.status(200).send()
}

function validRequest(request) {
  const { username, displayName } = request.body;

  if (!username || !displayName) {
    return false;
  }
  return true;
}