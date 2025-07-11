const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// GET /courses - List all courses
router.get('/', (req, res) => {
  const courseNames = courses.map(c => c.name).join(', ');
  res.send(`Courses: ${courseNames}`);
});

// GET /courses/:id - Fetch course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.send("Course not found");
  }
});

module.exports = router;
