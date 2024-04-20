// HostelComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HostelComponent = ({ hostelNo }) => {
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
    <div className={`hostel-${hostelNo}`}>
        <a href="abc" style={{ position: "relative" }}>
          Boys Hostel-{hostelNo}
        </a>
        <div className="spinner">
          <svg className="spinner-svg">
            <circle className="bg" cx={57} cy={57} r={52} />
            <text x={40} y={65} fill="white">
            {`${occupancy}%`}
            </text>
            <circle className= {`meter-${hostelNo}`} cx={57} cy={57} r={52} style={{ strokeDasharray: 314, strokeDashoffset: dashOffset }} />
          </svg>
        </div>
      </div>
  );
};

export default HostelComponent;
