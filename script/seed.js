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

async function seed() {
  await db.sync({ force: true });
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

if (module === require.main) {
  runSeed();
}

module.exports = seed;
