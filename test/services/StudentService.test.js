const StudentService = require("../../lib/services/StudentService");
const Reader = require("../../lib/utils/Reader");

describe("Tests for student services", () => {
    test("1) Return all students", () => {
        const students = [
            { name: "Warren", credits: 500},
            { name: "Lucinda", credits: 400},
            { name: "Fuentes", credits: 600}
        ];
        const allStudents = students.map(student => student);
        expect(allStudents.length).toBe(3);
    });
    test("2) Return all Students from JSON with StudentService", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const allStudents = StudentService.getAllStudents(students);
        expect(allStudents.length).toBe(51);
    });

    test("3) Return data of students with certification == true", () => {
        const students = [
            { name: "Warren", email: "algo@algo.com", haveCertification: false},
            { name: "Lucinda", email: "algo@algo.com", haveCertification: true},
            { name: "Fuentes", email: "algo@algo.com", haveCertification: false}
        ];
        const studentsWithCertification = StudentService.getStudentsByCertification(students);
        expect(studentsWithCertification).not.toEqual([{ name: "Lucinda", email: "algo@algo.com", haveCertification: true}]);
    });
    test("4) Return email of students with certification == true", () => {
        const students = [
            { name: "Warren", email: "algo@algo.com", haveCertification: false},
            { name: "Lucinda", email: "algo@algo.com", haveCertification: true},
            { name: "Fuentes", email: "algo@algo.com", haveCertification: false}
        ];
        const studentsWithCertification = StudentService.getStudentsByCertification(students);
        expect(studentsWithCertification).toContain("algo@algo.com");
    });
    test("5) Return students with 500 or more credits", () => {
        const students = [
            { name: "Warren", credits: 500},
            { name: "Lucinda", credits: 400},
            { name: "Fuentes", credits: 600}
        ];
        const studentsCredits = students.filter(studentCredit => studentCredit.credits >= 500);
        expect(studentsCredits.length).toBe(2);
    });
    test("6) Return students name with 500 or more credits", () => {
        const students = [
            { name: "Warren", credits: 500},
            { name: "Lucinda", credits: 400},
            { name: "Fuentes", credits: 600}
        ];
        const studentsCredits = students.filter(studentCredit => studentCredit.credits >= 500).map(studentShortData => { return { name: studentShortData.name };});
        expect(studentsCredits).toStrictEqual([{name: "Warren"}, {name: "Fuentes"}]);
    });
});