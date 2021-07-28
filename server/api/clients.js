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

// PUT /api/clients/id
clientsRouter.put('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    res.send(await client.update(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/clients/id
clientsRouter.delete('/:id', async (req, res, next) => {
  try {
    const client = await Client.findByPk(req.params.id);
    await client.destroy();
    res.send(client);
  } catch (err) {
    next(err);
  }
});

// POST /api/clients/id
clientsRouter.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Client.create(req.body));
  } catch (err) {
    next(err);
  }
});
