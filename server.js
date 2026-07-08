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

//Endpoints

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Student API" });
});

app.get("/students", (req, res) => {
  res.json({ students: students });
});

app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ student: student });
});

app.post("/students", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }

  const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

  const newStudent = {
    id: newId,
    name: name,
    age: parseInt(age),
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent,
  });
});

app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(studentIndex, 1);

  res.json({ message: "Student deleted successfully" });
});
