/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { accout: "1", password: '1' },
    { accout: "2", password: '2' },
    { accout: "3", password: '3' }
  ]);
};
