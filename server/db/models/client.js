const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
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
  readiness: {
    type: Sequelize.DataTypes.VIRTUAL(DataTypes.INTEGER),
    get() {
      let readiness = 5;
      let score = this.getDataValue('credit');
      let savings = parseInt(this.getDataValue('balance'));
      if (600 > score && score >= 500) readiness += 15;
      if (700 > score && score >= 600) readiness += 20;
      if (score >= 700) readiness += 30;
      let savingsPoints = Math.floor(savings / 5000);
      readiness += savingsPoints * 15;

      return readiness;
    },
  },
});

module.exports = Client;
