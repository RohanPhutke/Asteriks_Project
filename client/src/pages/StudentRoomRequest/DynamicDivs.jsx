import styles from "../../styles/Student_roomall_process.module.css"
export const DynamicDivs = ({ num }) => {


  const storedSelectedRooms = localStorage.getItem('lockedRooms');
  const selectedRooms = storedSelectedRooms ? JSON.parse(storedSelectedRooms) : [];
  const nums = selectedRooms.length;



    const generateDivs = () => {
      const divs = [];
      if (num === 1) {
        divs.push(
          <div key={1} className={styles.notifications}>
            <p>2</p>
            <div><input className={styles.inputBox} placeholder="Roll Number" /></div>
            <div>IT</div>
            <div><input className={styles.inputBox} placeholder="Name" /></div>
            <div>{selectedRooms[0].hostelNo}</div>
            <div>Double</div>
            <div>{selectedRooms[0].roomNumber}</div>
            {/* <div>
              <button>+</button>
            </div> */}
          </div>
        );
      } else if (num === 2) {
        for (let i = 0; i < 3; i++) {
          if (i == 0) {
            divs.push(
              <div key={i} className={styles.notifications}>
                <p>2</p>
                <div><input className={styles.inputBox} placeholder="Roll Number" /></div>
                <div>IT</div>
                <div><input className={styles.inputBox} placeholder="Name" /></div>
                <div>{selectedRooms[0].hostelNo}</div>
                <div>Double</div>
                <div>{selectedRooms[0].roomNumber}</div>
                {/* <div>
                  <button>+</button>
                </div> */}
              </div>
            );

          } else {
            divs.push(
              <div key={i} className={styles.notifications}>
                <p>{i + 2}</p>
                <div><input className={styles.inputBox} placeholder="Roll Number" /></div>
                <div>IT</div>
                <div><input className={styles.inputBox} placeholder="Name" /></div>
                <div>{selectedRooms[1].hostelNo}</div>
                <div>Double</div>
                <div>{selectedRooms[1].roomNumber}</div>
                {/* <div>
                  <button>+</button>
                </div> */}
              </div>
            );
          }
        }
      } else if (num === 3) {
        for (let i = 0; i < 5; i++) {
          if (i == 0) {
            divs.push(
              <div key={i} className={styles.notifications}>
                <p>2</p>
                <div><input className={styles.inputBox} placeholder="Roll Number" /></div>
                <div>IT</div>
                <div><input className={styles.inputBox} placeholder="Name" /></div>
                <div>{selectedRooms[0].hostelNo}</div>
                <div>Double</div>
                <div>{selectedRooms[0].roomNumber}</div>
                {/* <div>
                  <button>+</button>
                </div> */}
              </div>
            );

          } else {
            divs.push(
              <div key={i} className={styles.notifications}>
                <p>{i + 2}</p>
                <div><input className={styles.inputBox} placeholder="Roll Number" /></div>
                <div>IT</div>
                <div><input className={styles.inputBox} placeholder="Name" /></div>
                {(i > 2) && <div>{selectedRooms[2].hostelNo}</div>}
                {(i <= 2) && <div>{selectedRooms[1].hostelNo}</div>}
                <div>Double</div>
                {(i > 2) && <div>{selectedRooms[2].roomNumber}</div>}
                {(i <= 2) && <div>{selectedRooms[1].roomNumber}</div>}
                {/* <div >
                  <button>+</button>
                </div> */}
              </div>
            );
          }
        }
      }
      return divs;
    };

    return <>{generateDivs()}</>;
  };


  export default DynamicDivs;