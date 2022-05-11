const Reader = require("../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class VisualpartnerController{
    static getAllStudents(){
        const allStudents = Reader.readJsonFile("visualpartners.json");
        return StudentService.getAllStudents(allStudents);
        
    }
    static getEmailsByCertificate() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCertification(students);
    }
    static getStudentsByCredits() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCredits(students);
    }
}

module.exports = VisualpartnerController;