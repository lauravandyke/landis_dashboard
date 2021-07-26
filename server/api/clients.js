const express = require('express');
const clientsRouter = express.Router();
const Client = require('../db/models/client');
module.exports = clientsRouter;

// GET /api/clients
clientsRouter.get('/', async (req, res, next) => {
  try {
    const allClients = await Client.findAll();
    res.json(allClients);
  } catch (err) {
    next(err);
  }
});
