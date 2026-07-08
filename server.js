const express = require("express"); // Import the Express library
const app = express(); // Create an Express application
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: "Ahmad", age: 20 },
  { id: 2, name: "Sara", age: 22 },
];

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
