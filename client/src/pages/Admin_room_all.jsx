import logo from "./Indian_Institute_of_Information_Technology,_Allahabad_Logo.png";

import styles from "../styles/Admin_room_all_style.module.css";

const RoomAllocation = () => {

    return (

<>
  <div className={styles.room_allocation_container}>
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <div className={styles.logo_section}>
          <img className={styles.img}
            src={logo}
            alt="IIITA"
          />
          <span>HMS</span>
        </div>
        <div className={styles.choices_section}>
          <a className={styles.a} href="index1.html">
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
          <a className={styles.a}
            href="index2.html"
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
              className="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
            </svg>
            Rooms
          </a>
          <a className={styles.a} href="index3.html">
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
          <a className={styles.a} href="#1">
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
          Occupancy
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
          Hostels
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
          Rooms
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
    <div className="filter">
      <form className={styles.searchform }>
        <input className={styles.input} type="text" placeholder="Are you searching for a vacant room?" />
        <button className= {styles.button}type="submit">Search</button>
      </form>
    </div>
    <div className={styles.occupancy}>
      <a className={styles.a} href="id123">
        Boys Hostel 1
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
      </a>
      <div className={styles.occupancy_border}>
        <ul className={styles.showcase}>
          <li className={styles.li}>
            <div className={styles.showcase_seat} />
            <small>N/A</small>
          </li>
          <li className={styles.li}>
            <div className={styles.showcase_seat_selected} />
            <small>Selected</small>
          </li>
          <li className={styles.li}>
            <div className={styles.showcase_seat_occupied} />
            <small className={styles.small}>Occupied</small>
          </li>
        </ul>
        <div className="vacant-container">
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            {/* <div className={`${styles.seat} occupied`} /> */}
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            {/* <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} /> */}
           <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            {/* <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} /> */}
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            {/* <div className="seat occupied" />
            <div className="seat occupied" />
            <div className="seat occupied" /> */}
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.complaints}>
      <a className={styles.a} href="id123">
        Boys Hostel 2
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
      </a>
      <div className={styles.complaints_border}>
        <ul className={styles.showcase}>
          <li>
            <div className={styles.showcase_seat} />
            <small>N/A</small>
          </li>
          <li>
            <div className={styles.showcase_seat_selected} />
            <small>Selected</small>
          </li>
          <li>
            <div className={styles.showcase_seat_occupied} />
            <small>Occupied</small>
          </li>
        </ul>
        <div className="vacant-container">
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.student_update}>
      <a className={styles.a} href="id123">
        Boys Hostel 3
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
      </a>
      <div className={styles.student_update_border}>
        <ul className={styles.showcase}>
          <li>
            <div className={styles.showcase_seat} />
            <small>N/A</small>
          </li>
          <li>
            <div className={styles.showcase_seat_selected} />
            <small>Selected</small>
          </li>
          <li>
            <div className={styles.showcase_seat_occupied} />
            <small>Occupied</small>
          </li>
        </ul>
        <div className="vacant-container">
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.emergency_button}>
      <a className={styles.a} href="id123">
        Boys Hostel 4
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
      </a>
      <div className="student-update-border">
        <ul className={styles.showcase}>
          <li className={styles.li}>
            <div className={styles.showcase_seat} />
            <small className={styles.small}>N/A</small>
          </li>
          <li>
            <div className={styles.showcase_seat_selected} />
            <small>Selected</small>
          </li>
          <li>
            <div className={styles.showcase_seat_occupied} />
            <small>Occupied</small>
          </li>
        </ul>
        <div className="vacant-container">
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
          <div className={styles.row}>
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={styles.seat} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={`${styles.seat} occupied`} />
            <div className={styles.seat} />
          </div>
        </div>
      </div>
    </div>
  </div>
</>


    )
}
export default RoomAllocation