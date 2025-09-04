const fs = require("fs");
const DATA_FILE = "./data/events.json";

function loadEvents() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf8");
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function saveEvents(events) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2), "utf8");
}

module.exports = { loadEvents, saveEvents };
