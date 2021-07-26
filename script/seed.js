'use strict';
const { green, red } = require('chalk');
const fs = require('fs');

let accounts = fs
  .readFileSync('script/accounts.jsonl', 'utf8')
  .split('\n')
  .map((str) => JSON.parse(str));

const {
  db,
  models: { User, Client },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  const clients = await Promise.all(
    accounts.map((client) => {
      Client.create(client);
    })
  );

  const users = await Promise.all([
    User.create({ username: 'Chris', password: '123' }),
    User.create({ username: 'Jackie', password: '123' }),
  ]);

  console.log(green(`seeded ${clients.length} clients`));
  console.log(green(`seeded ${users.length} users`));

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(red(err));
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
