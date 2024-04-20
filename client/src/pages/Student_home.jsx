import React, { useState, useEffect } from "react";

import logo from "./Indian_Institute_of_Information_Technology,_Allahabad_Logo.png";
import axios from 'axios';
import styles from "../styles/Student_home.module.css"


const Studenthome = () => {

  const [text, setText] = useState(' On leave');
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setEditedText(text); // Reset edited text to current text value when entering edit mode
  };

  const handleSaveClick = () => {
    setText(editedText);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

     const [resultantInfo, setProgress] = useState({ name: 0, hostelName: 0,RoomNo : 0,imagePath:0 });//Initial Progress state
     const [email, setEmail] = useState('');
     useEffect(() => {
      const storedEmail = localStorage.getItem('loggedInEmail');
      if (storedEmail) {
         setEmail(storedEmail);
      }
      
      const fetchInfo = async () => {
        try{
          
          const res_info = await axios.get(`/studenthome?email=${email}`);
          // console.log(res_info.data);
          const {studentName,studentHostel,RoomNo,imgPath} = res_info.data;
           setProgress({name : studentName,hostelName : studentHostel,RoomNo,imagePath:imgPath});
          //  console.log(resultantInfo.imagePath);
        }
        catch(error){
          console.log(`Error fetching student info for ${email}: `,error);
        }
      }
      fetchInfo();
     })
    //  console.log(logo);
    return (
       
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style1.css" />
  <div className={styles.container}>
    <div className={styles.nav_container}>
      <nav>
        <div className={styles.logo_section}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>HMS</span>
        </div>
        <div className={styles.choices_section}>
          <a
            href="/Studenthome"
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
          <a href="Roomallocation">
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
          <a href="index3.html">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="currentColor"
            className="bi bi-calendar-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="currentColor"
            className="bi bi-person-lines-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="currentColor"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
          <a href="/loginStudent">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={42} 
          height={42} 
          fill="currentColor" 
          class="bi bi-box-arrow-left" 
          viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
          </svg>
         </a>
        </div>
      </nav>
    </div>
    <div className={styles.dashboard}>
      <div className={styles.option_1}>
        <a href="/Studenthome">
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
          Profile
        </a>
      </div>
      <div className={styles.option_2}>
        <a href="id2">
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
          Occupancy
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
          Allocation
        </a>
      </div>
      <div className={styles.option_4}>
        <a href="id4">
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
          Assigned
        </a>
      </div>
    </div>
    <div className={styles.occupancy}>
      <div className={styles.occupancy_heading}>
          <div><p>Student Profile</p></div>
          <div className={styles.profile_buttons}>
          <button onClick={handleEditClick}>
                {isEditing ? 'Cancel' : 'Edit Status'}
              </button>
              {isEditing && (
                <button onClick={handleSaveClick}>Save</button>
              )}
          </div>            
      </div>
      <div className={styles.occupancy_border}>
        <img
          src={resultantInfo.imagePath}
          alt="IIITA"
        />
        <div className={styles.dashboard_content}>
          <span>Name : {resultantInfo.name}</span>
          <br />
          <span>Roll No. : {email.slice(0,email.length - 12)}</span>
          <br />
          {/* <span>XYZ</span><br> */}
          <span>Hostel : BH {resultantInfo.hostelName}</span>
          <br />
          {/* <span>BH 1 </span><br> */}
          <span>Room No. : {resultantInfo.RoomNo}</span>
          <br />
          {/* <span>123</span><br> */}
          <span>
            Status:
               {isEditing ? (
                <input className={styles.input_box_profile}
                  type="text"
                  value={editedText}
                  onChange={handleInputChange}
                />
              ) : (
                text
              )}
            </span>
          <br />
          {/* <span>Can't Leave</span><br> */}
          <span>Due : $ 0</span>
          <br />
          {/* <span>$ 0</span><br> */}
          <br />
        </div>
      </div>
    </div>
    <div className={styles.student_update}>
        Student Update
      <div className={styles.student_update_border}>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Piyush Priyadarshi</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Rohan Phutke</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Avanish Gurjar</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Aman Raj</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Anand Raj</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Saurav Gitte</span>
        </div>
        {/* <div class={styles.notifications}><a href="id4">Saurav Gitte</a></div> */}
      </div>
    </div>
    <div className={styles.emergency_button}>
       <div className={styles.leftalien}>Notifications</div> 
      <div className={styles.emergency_button_border}>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Notify 01</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Notify 02</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Notify 03</span>
        </div>
        <div className={styles.notifications}>
          <img
            src={logo}
            alt="IIITA"
          />
          <span>Notify 04</span>
        </div>
      </div>
    </div>
  </div>
</>


  )
}

export default Studenthome