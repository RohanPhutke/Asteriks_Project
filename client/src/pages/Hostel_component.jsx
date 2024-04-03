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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-up-right-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
            />
          </svg>
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
