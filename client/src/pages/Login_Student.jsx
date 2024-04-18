import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import loginBg from "./login-bg.png";
//add Loginstyle.scss

import styles from "../styles/Loginstyle.module.scss";

const Login_Student = () => {


   const [inputs, setInputs] = useState({
      email: "",
      password: ""
   })

   const [err, setError] = useState(null);
   const navigate = useNavigate();

   const handleChange = (e) => {
      setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
      console.log(inputs);
   }
   const handleSubmit = async e => {
      e.preventDefault();
      try {
         await axios.post("/auth/loginstudent", inputs)
         navigate("/Studenthome");
      } catch (err) {
         setError(err.response.data);
      }

   }


   return (
      //             </form> </div>
      <div className="auth">
         <div class={styles.login}>
            <img src={loginBg} alt="login image" className={styles.login__img} />

            <form action="" class={styles.login__form}>
               <h1 class={styles.login__title}>Student Login</h1>

               <div class={styles.login__content}>
                  <div class={styles.login__box}>
                     <i class="ri-user-3-line login__icon"></i>

                     <div class={styles.login__box_input}>
                        <input type="email" required class={styles.login__input} id="login-email" name="email" onChange={handleChange} placeholder=" " />
                        <label for="login-email" class={styles.login__label} >Email</label>
                     </div>
                  </div>

                  <div class={styles.login__box}>
                     <i class="ri-lock-2-line login__icon"></i>

                     <div class={styles.login__box_input}>
                        <input type="password" required class={styles.login__input} id="login-pass" name="password" onChange={handleChange} placeholder=" " />
                        <label for="login-pass" class={styles.login__label} >Password</label>
                        <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                     </div>
                  </div>
               </div>

               <div class={styles.login__check}>
                  <div class={styles.login__check_group}>
                     <input type="checkbox" class={styles.login__check_input} id="login-check" />
                     <label for="login-check" class={styles.login__check_label}>Remember me</label>
                  </div>

                  <a href="#" class={styles.login__forgot}>Forgot Password?</a>
               </div>


               <button onClick={handleSubmit} className={styles.login__button}>Login</button>

               <a href="/loginadmin" class={styles.login_admin} >Login as admin</a>
               {err && <p className={styles.errorTag}>{err}</p>}

            </form>
         </div>

      </div>
   )
}

export default Login_Student