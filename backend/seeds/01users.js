/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { email: "1@1", username: "1", password: '$2a$10$cMpq427qPianxV.J9GzTPOasj3BiDaZ9OK5WttAhCOtqGPp.L/un.' },
    { email: "2@2", username: "2", password: '$2a$10$75RVf5m.pYgg9J4HoMu0Le/sIeagNxWuOGbv.FlUFrBc4mtkKs7B2' },
    { email: "3@3", username: "3", password: '$2a$10$WIxApCb8veRPmTlqNAF2YuEm6q/9V43W0Ns.lpbvkfW4n65bOaN0y' }
  ]);
};
