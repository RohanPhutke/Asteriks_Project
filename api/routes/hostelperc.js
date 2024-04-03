import {db} from "../db.js";

export const Hostelperc = (req, res) => {
    const hostelNo = req.query.hostelNo;
    const query = 'SELECT total_rooms,vacant_rooms from hostel WHERE hostelno = ?';

//   Execute MySQL query
  db.query(query,[hostelNo], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
        res.status(404).json({ error: 'Hostel not found' });
        return;
      }
    // Calculate occupancy percentage
    const totalRooms = results[0].total_rooms;
    const vacant_rooms = results[0].vacant_rooms;
    const occupiedRooms = totalRooms - vacant_rooms;
    const occupancyPercentage = (occupiedRooms / totalRooms) * 100;

    // Send occupancy data as JSON response
res.json({ occupancy: occupancyPercentage});
})
};