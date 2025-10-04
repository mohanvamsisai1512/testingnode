// Import express
const express = require("express");

// Create an Express app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (optional)
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express server!");
}); 

app.get("/page2", (req, res) => {
  res.send("Hello from Express server page2!");
}); 

app.get("/page3", (req, res) => {
  res.send("Hello from Express server page3!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
