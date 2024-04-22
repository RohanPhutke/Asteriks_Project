import React, { useState, useEffect } from "react";
import logo from "./Indian_Institute_of_Information_Technology,_Allahabad_Logo.png";
// import ''
import axios from 'axios';
import HostelComponent from "./Hostel_component";
import "../components/Navbar";
import styles from "../styles/Home_style.module.css"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import  Tippy  from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Home = () => {

  const [complaintProgress, setProgress] = useState({ totalComplaints: 0, resolvedComplaints: 0 });//Initial Progress state

  const showToast = () => {
    toast.warning("Coming Soon");  
   };

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res_complaint = await axios.get(`/complaintProgress`); //Fetch complaint progress from backend
        //It will be array which will have two vals, first one total complaints and second one will be no of resolved complaints
        const { totalComplaints, resolvedComplaints } = res_complaint.data;
        setProgress({ totalComplaints, resolvedComplaints });
      }
      catch (error) {
        console.log('Error fetching complaint progress :', error);
      }
    }
    fetchProgress();
  },
    []);

  return (
    <div className="container000">
      <div className="nav-container">
        <nav>
          <div className="logo-section">
            <img src={logo} alt="IIIT A" />
            <span>HMS</span>
          </div>
          <div className="choices-section">
            <a
              href="index1.html"
              style={{
                boxShadow: "rgba(63, 229, 255, 0.397) 1px 2px 3px 0px inset",
                backgroundColor: "black"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="currentColor"
                className="bi bi-bounding-box"
                viewBox="0 0 16 16"
              >
                <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z" />
              </svg>
              Dashboard
            </a>
            <a href="/StudentRoomall">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="currentColor"
                className="bi bi-laptop"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
              </svg>
              Rooms
            </a>
            <a href="/Adminin">
       
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="currentColor"
                className="bi bi-person-vcard"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
              </svg>
              Attendance
            </a>
            <a href="#1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="currentColor"
                className="bi bi-stopwatch"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              Maintenance
            </a>
          </div>
          <div className={styles.profile_section}>
        <Tippy content= {<span className={styles.tippytooltip}>Calender</span>}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-calendar-check"
              viewBox="0 0 16 16"
              onClick={showToast}
            style={{ cursor: 'pointer' }}
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            </Tippy>
        <Tippy content= {<span className={styles.tippytooltip}>Profile</span>}> 

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
              onClick={showToast}
            style={{ cursor: 'pointer' }}
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
            </Tippy>

        <Tippy content= {<span className={styles.tippytooltip}>Notifications</span>}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
              onClick={showToast}
            style={{ cursor: 'pointer' }}
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
            </Tippy>
            <a href="/loginadmin">
        <Tippy content= {<span className={styles.tippytooltip}>Logout</span>}> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={42}
                height={42}
                fill="currentColor"
                class="bi bi-box-arrow-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
              </svg>
              </Tippy>
            </a>
            <ToastContainer
        position="bottom-left"
        theme="dark"/>
          </div>
        </nav>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.option_1}>
          <a href="id1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-bar-chart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
            </svg>
            Analytics
          </a>
        </div>
        <div className={styles.option_2}>
          <a href="id2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-mortarboard-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
            </svg>
            Students
          </a>
        </div>
        <div className={styles.option_3}>
          <a href="id3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-emoji-frown-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
            </svg>
            Complaints
          </a>
        </div>
        <div className={styles.option_4}>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-cash"
              viewBox="0 0 16 16"
            >
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
            </svg>
            No Dues
          </a>
        </div>
      </div>
      <div className={styles.occupancy}>
        <a href="id2">
          Occupancy

        </a>
        <div className={styles.occupancy_border}>
          {/* <div className="hostels-container"> */}
          <HostelComponent hostelNo={1} />
          <HostelComponent hostelNo={2} />
          <HostelComponent hostelNo={3} />
          <HostelComponent hostelNo={4} />
          <HostelComponent hostelNo={5} />
          {/* </div> */}
        </div>
      </div>
      <div className={styles.complaints}>
        <div className={styles.leftalien}><a href="id">
          Complaints
        </a>
        </div>
        <div className={styles.complaints_border}>
          <div className={styles.progress_bar}>
            <div className={`${styles.skill} html`}>
              <span className={styles.complaint_progress}>{((complaintProgress.resolvedComplaints) / complaintProgress.totalComplaints) * 100} %</span>
            </div>
          </div>
          <div className={styles.complaints_box}>
            <div className={styles.total_complaints_box}>
              Total Complaints
              <p>{complaintProgress.totalComplaints}</p>
            </div>
            <div className={styles.resolved_box}>
              Resolved
              <p>{complaintProgress.resolvedComplaints}</p>
            </div>
            <div className={styles.open_box}>
              Open
              <p>{complaintProgress.totalComplaints - complaintProgress.resolvedComplaints}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.student_update}>
        <div className={styles.leftalien}>
          <a href="id123">
            Student Update

          </a>
        </div>
        <div className={styles.student_update_border}>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Piyush Priyadarshi</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Rohan Phutke</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Avanish Gurjar</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Aman Raj</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Anand Raj</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Saurav Gitte</span>
          </div>
        </div>
      </div>
      <div className={styles.emergency_button}>
        <div className={styles.leftalien}><a href="id">
          Notifications

        </a>
        </div>
        <div className={styles.emergency_button_border}>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Notify 01</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Notify 02</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Notify 03</span>
          </div>
          <div className={styles.notifications}>
            <img src={logo} alt="IIIT A" />
            <span>Notify 04</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home