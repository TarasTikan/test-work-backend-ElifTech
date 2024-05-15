const fs = require("fs/promises");
// const { nanoid } = require("nanoid");
const path = require("path");
const filePath = path.join(__dirname, "contacts.json");
const events = async (event) =>
  fs.writeFile(filePath, JSON.stringify(event, null, 2));
async function listEvents() {
  try {
    const list = await fs.readFile(filePath);
    return JSON.parse(list);
  } catch (error) {
    console.log(error);
  }
}

async function getEventById(eventId) {
  try {
    const list = await listEvents();
    const oneEvent = list.find((item) => item.id === eventId);
    return oneEvent || null;
  } catch (error) {
    console.log(error);
  }
}

async function removeEvent(eventId) {
  try {
    const list = await listEvents();
    const findIndex = list.findIndex((item) => item.id === eventId);
    if (findIndex === -1) return null;
    const [result] = list.splice(findIndex, 1);
    await events(list);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function addEvent({ name, email, phone }) {
  try {
    const list = await listEvents();
    const newEvent = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    list.push(newEvent);
    await events(list);
    return newEvent;
  } catch (error) {
    console.log(error);
  }
}
async function updateEvent(id, data) {
  try {
    const list = await listEvents();
    const indexEvent = list.findIndex((item) => item.id === id);
    if (indexEvent === -1) {
      return null;
    }
    list[indexEvent] = { id, ...data };
    await fs.writeFile(filePath, JSON.stringify(list, null, 2));
    return list[indexEvent];
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  listEvents,
  getEventById,
  removeEvent,
  addEvent,
  updateEvent,
};
