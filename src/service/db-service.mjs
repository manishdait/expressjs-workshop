/*
import { pool } from "../database.mjs";

const db = pool;

export async function findAllUsers() {
  const result = await db.query('select * from _user');
  const users = result.rows;
  if (!users) {
    return [];
  }

  return users;
}

export async function findUserById(id) {
  const result = await db.query(`select * from _user where id = ${id}`);
  const user = result.rows;

  return user;
}

export async function saveUser(user) {
  await db.query(`insert into _user (username, displayName) values ('${user.username}', '${user.displayName}')`);
  const result = await db.query(`select * from _user order by id desc limit 1`);

  const savedUser = result.rows;
  return savedUser;
}

export async function updateUserById(id, user) {
  await db.query(`update _user set username = '${user.username}', displayName = '${user.displayName}' where id = ${id}`);
  const updatedUser = await findUserById(id);

  return updatedUser;
}

export async function deleteUserById(id) {
  await db.query(`delete from _user where id = ${id}`);
}
*/