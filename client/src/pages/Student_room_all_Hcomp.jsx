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
            <div className={styles.status_1}>
            <i class="fa-solid fa-bed"></i>  <span>458</span>
            </div>
            <div className={styles.status_1}>
            <i class="fa-solid fa-box-tissue"></i>  <span>5</span>
            </div>
            <div className={styles.status_1}>
              <i class="fa-solid fa-chair"></i> <span>5</span>
            </div>
            <div className={styles.status_1}>
              <span>Total Rooms</span>
              <span>458</span>
            </div>
            <div className={styles.status_1}>
              <span>Occupied</span>
              <span>50</span>
            </div>
            <div className={styles.status_1}>
              <span>Floors</span>
              <span>3</span>
            </div>
          </div>
          <div className={styles.status_2}>
            <span>students</span>
            <span>In Hostel</span>
            <span>Outside Hostel</span>
          </div>
        </div>
        <div className={styles.room_furniture}>
          <div className={styles.emergency_button}>
            <div className={styles.leftalien}>
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

                </svg>
              </span>
            </div>
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