const { loadEvents, saveEvents } = require("../models/eventModel");

function getEvents(req, res) {
  const events = loadEvents();

  res.json(events);
}

function createEvent(req, res) {
  const events = loadEvents();
  const newEvent = { id: Date.now(), ...req.body };

  events.push(newEvent);
  saveEvents(events);
  res.status(201).json(newEvent);
}

function updateEvent(req, res) {
  const events = loadEvents();
  const id = Number(req.params.id);
  const index = events.findIndex(e => e.id === id);

  if (index === -1) return res.status(404).json({ error: "Event not found" });

  events[index] = { ...events[index], ...req.body };
  saveEvents(events);
  res.json(events[index]);
}

function deleteEvent(req, res) {
  const events = loadEvents();
  const id = Number(req.params.id);
  const newEvents = events.filter(e => e.id !== id);

  if (events.length === newEvents.length) return res.status(404).json({ error: "Event not found" });
  
  saveEvents(newEvents);
  res.status(204).end();
}

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
