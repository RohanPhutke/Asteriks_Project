import {db} from "../db.js"

export const StudentHome = (req,res) => {
    const email = req.query.email;
    const query = `SELECT name,hostelname,cur_room_no,img from student where email = ?`;

    db.query(query,[email],(err,results) => {
        if(err){
            console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Email Not FOUND!' });
            return;
          }
          const studentName = results[0].name;
          const studentHostel = results[0].hostelname;
          const RoomNo =  results[0].cur_room_no;
          const imgPath = results[0].img;
        //   console.log(studentName,studentHostel,RoomNo);
          res.json({studentName,studentHostel,RoomNo,imgPath});
    });
};