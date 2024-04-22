import { db } from "../db.js";

export const Hosteldata = (req,res) => {
    const hostelNo = req.query.hostelNo;
const queryTotal = `SELECT COUNT(*) from student where hostelname = ?`;
const queryOut  = "SELECT COUNT(*) from in_out JOIN student ON in_out.student_email = student.email AND student.hostelname = ? AND in_out.in_date IS NULL";
db.query(queryTotal,[hostelNo], (err, results1) => {
    if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }

    db.query(queryOut,[hostelNo], (err, results2) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const totalStudents = results1[0]['COUNT(*)'];
        const outStudents = results2[0]['COUNT(*)'];

        res.json({ totalStudents, outStudents });
    });
});

}

export default Hosteldata;