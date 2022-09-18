/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todo_list').del()
  await knex('todo_list').insert([
    { user_id: 1, todo: "buy egg" },
    { user_id: 1, todo: "buy fish" },
    { user_id: 2, todo: "sell socks" }
  ]);
};
