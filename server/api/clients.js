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

// GET /api/clients/id
clientsRouter.get('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    res.json(client);
  } catch (err) {
    next(err);
  }
});
