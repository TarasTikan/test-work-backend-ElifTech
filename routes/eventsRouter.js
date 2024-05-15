
const express = require("express");
const {
  getListEvent,
  getByIdEvent,
  removeByIdEvent,
  addEvent,
  updateEvent,
} = require("../controllers/eventsControllers.js");

const eventsRouter = express.Router();

eventsRouter.get("/", getListEvent);

eventsRouter.get("/:id", getByIdEvent);

eventsRouter.delete("/:id", removeByIdEvent);

eventsRouter.post("/", addEvent);

eventsRouter.put("/:id", updateEvent);

module.exports = eventsRouter;