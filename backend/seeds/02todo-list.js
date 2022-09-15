/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { user_id: 1, todo: 1, priority: 1 },
    { user_id: 1, todo: 2, priority: 2 },
    { user_id: 2, todo: 3, priority: 3 }
  ]);
};
