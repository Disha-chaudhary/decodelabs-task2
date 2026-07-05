const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let students = [];

// GET API
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// POST API
app.post("/students", (req, res) => {
    const { name, age } = req.body;

    // Validation
    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    const student = {
        id: students.length + 1,
        name,
        age
    };

    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});