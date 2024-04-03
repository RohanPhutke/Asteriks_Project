import { db } from "../db.js";

export const complaint = (req, res) => {

    const query1 = `select count(*) as total_complaints from helpdesk`;
    const query2 = `select count(ticket_status) as resolved_complaints from helpdesk where ticket_status = 'resolved'`;

    db.query(query1, (err, results1) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        db.query(query2, (err, results2) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            const totalComplaints = results1[0]['total_complaints'];
            const resolvedComplaints = results2[0]['resolved_complaints'];

            res.json({ totalComplaints, resolvedComplaints });
        });
    });
};