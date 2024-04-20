// HostelComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentRoomComp = ({ hostelNo }) => {
  const [occupancy, setOccupancy] = useState(0);

  useEffect(() => {
    const fetchOccupancy = async () => {
      try {
        const response = await axios.get(`/occupancy?hostelNo=${hostelNo}`);
        setOccupancy(response.data.occupancy);
      } catch (error) {
        console.error(`Error fetching occupancy for hostel ${hostelNo}:`, error);
      }
    };

    fetchOccupancy();
  }, [hostelNo]);

const dashOffset = 314 - (occupancy / 100) * 314;

  return (
    <div className="notifications">
          <span>{`BH-${hostelNo}`}</span>
          <div className="hostel-update">
            <div className="spinner">
              <svg className="spinner-svg" width={200} height={200}>
                <circle className="bg" cx={100} cy={100} r={90} />
                <text x={80} y={120} fill="white">
                {`${occupancy}%`}
                </text>
                <circle className="meter-3" cx={100} cy={100} r={90} style={{ strokeDasharray: 314, strokeDashoffset: dashOffset }}/>
              </svg>
            </div>
            <div className="room-status">
              <div className="status-container">
                <div className="status-1"></div>
                <div className="status-1"></div>
                <div className="status-1"></div>
                <div className="status-1"></div>
                <div className="status-1"></div>
                <div className="status-1"></div>
              </div>
              <div className="status-2"> </div>
            </div>
            <div className="room-furniture">
              <div className="emergency-button">
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
                <div className="emergency-button-border">
                  <div className="notification">
                    <span>Table</span>
                  </div>
                  <div className="notification">
                    <span>Chair</span>
                  </div>
                  <div className="notification">
                    <span>Fan</span>
                  </div>
                  <div className="notification">
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
