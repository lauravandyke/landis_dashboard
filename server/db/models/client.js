const Sequelize = require('sequelize');
const db = require('../db');

const Client = db.define('client', {
  id: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  balance: {
    type: Sequelize.STRING,
  },
  credit: {
    type: Sequelize.INTEGER,
  },
  picture: {
    type: Sequelize.STRING,
  },
  name_first: {
    type: Sequelize.STRING,
  },
  name_last: {
    type: Sequelize.STRING,
  },
  employer: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  comments: {
    type: Sequelize.TEXT,
  },
  created: {
    type: Sequelize.DATE,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Client;
