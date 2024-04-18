// HostelComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/Student_room_all.module.css"


const StudentRoomComp = ({ hostelNo }) => {
  const [occupancy, setOccupancy] = useState(0);

  useEffect(() => {
    const fetchOccupancy = async () => {
      try {
        const response = await axios.get(`/occupancy?hostelNo=${hostelNo}`);
        setOccupancy(response.data.occupancy);
      } catch (error) {
        console.error(`Error fetching occupancy for hostel ${hostelNo}:, error`);
      }
    };

    fetchOccupancy();
  }, [hostelNo]);

  const dashOffset = 314 - (occupancy / 100) * 314;

  return (
    <div className={styles.notificationss}>
      <div className={styles.leftAlien}><span >{`BH-${hostelNo}`}</span></div>
      <div className={styles.hostels_update}>
        <div className={styles.spinners}>
          <svg className={styles.spinners_svg} width={200} height={200}>
            <circle className={styles.bgs} cx="50%" cy="50%" r="45%" />
            <text x="35%" y="55%" fill="white">
              {`${occupancy}%`}
            </text>
            <circle className={styles[`meters${hostelNo}`]} cx="50%" cy="50%" r="45%" style={{ strokeDasharray: 314, strokeDashoffset: dashOffset }} />
          </svg>
        </div>
        <div className={styles.room_status}>
          <div className={styles.status_container}>
            <div className={styles.status_1}></div>
            <div className={styles.status_1}></div>
            <div className={styles.status_1}></div>
            <div className={styles.status_1}></div>
            <div className={styles.status_1}></div>
            <div className={styles.status_1}></div>
          </div>
          <div className={styles.status_2}> </div>
        </div>
        <div className={styles.room_furniture}>
          <div className={styles.emergency_button}>
            <span>
              Furnitures
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-up-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
              </svg>
            </span>
            <div className={styles.emergency_button_border}>
              <div className={styles.notification}>
                <span>Table</span>
              </div>
              <div className={styles.notification}>
                <span>Chair</span>
              </div>
              <div className={styles.notification}>
                <span>Fan</span>
              </div>
              <div className={styles.notification}>
                <span>Tube Light</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRoomComp;