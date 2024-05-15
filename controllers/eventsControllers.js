// import contactsService from "../services/contactsServices.js";
const fs = require("fs/promises");
const events = require("../models/events.js")
// const { nanoid } = require("nanoid");
const path = require("path");
const getListEvent = async (req, res) => {
  const result = await events.listEvents();
  res.json(result);
};

const getByIdEvent = async (req, res) => {
  const { id } = req.params;
  const result = await events.getEventById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addEvent = async (req, res) => {
  const { error } = addShema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing required name field");
  }
  const result = await events.addEvent(req.body);
  res.status(201).json(result);
};

const removeByIdEvent = async (req, res) => {
  const { eventId } = req.params;
  const result = await events.removeEvent(eventId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateEvent = async (req, res) => {
  const { error } = addShema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing fields");
  }
  const { eventId } = req.params;
  const result = await events.updateEvent(eventId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
module.exports = {
  getListEvent,
  getByIdEvent,
  removeByIdEvent,
  addEvent,
  updateEvent,
};