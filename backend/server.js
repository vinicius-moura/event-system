const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/events");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// routes
app.use("/events", eventsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
