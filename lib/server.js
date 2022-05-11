const StudentController = require("./controllers/VisualpartnerController");
const express = require("express");
const app = express();
app.use(express.json());
app.set("json spaces", 4);
const port = 3000;

app.get("/", (req, res) => {
    res.json({ message: "VIRTUAL PARTNER-SHIP API"});
});

app.get("/v1/students/", (req, res) => {
    const allStudents = StudentController.getAllStudents();
    res.json(allStudents);
});

app.get("/v1/students/emails", (req, res) => {
    const emailsOfStudentsWithCertification = StudentController.getEmailsByCertificate();
    res.json({emails: emailsOfStudentsWithCertification});
});

app.get("/v1/students/credits", (req, res) => {
    const studentsNameByCredits = StudentController.getStudentsByCredits();
    res.json(studentsNameByCredits);
});

app.listen(port, () => {
    console.log(`The server is running on localhost:${port}`);
});