import React,{useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "./login_admin_bg.jpg";
// import loginBg from "./login-bg.png";
import styles from "../styles/Loginstyle.module.scss";
const Login_Admin = () => {


    const [inputs,setInputs] = useState({
        email :"",
        password : ""
    })

    const [err,setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e)=> {
        setInputs(prev => ({...prev,[e.target.name] : e.target.value}))
        console.log(inputs);
    }
    const handleSubmit = async e =>{
        e.preventDefault();
        try{
         await axios.post("/auth/loginadmin",inputs)
            navigate("/Home");
        }catch(err){
            setError(err.response.data);
        }
    }
    var errorForget = "";
    const handleForget = () =>{
           errorForget = "Please check your mail..";
    }

    return (
        //             </form> </div>
        <div className="auth">
           <div class={styles.login} >
           <img src= {loginBg} alt="login imagae" className={styles.login__img} />

         <form action="" class={styles.login__form}>
            <h1 class={styles.login__title}>Admin Login</h1>

            <div class={styles.login__content}>
               <div class={styles.login__box}>
                  <i class="ri-user-3-line login__icon"></i>

                  <div class={styles.login__box_input}>
                     <input type="email" required class={styles.login__input} id="login-email" name = "email" onChange={handleChange} placeholder=" "/>
                     <label for="login-email" class={styles.login__label} >Email</label>
                  </div>
               </div>

               <div class={styles.login__box}>
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class={styles.login__box_input}>
                     <input type="password" required class={styles.login__input} id="login-pass" name="password" onChange={handleChange} placeholder=" "/>
                     <label for="login-pass" class={styles.login__label} >Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class={styles.login__check}>
               <div class={styles.login__check_group}>
                  <input type="checkbox" class={styles.login__check_input} id="login-check"/>
                  <label for="login-check" class={styles.login__check_label}>Remember me</label>
               </div>

               <a  onClick={handleForget} class={styles.login__forgot}>Forgot Password?</a>
            </div>

           
            <button onClick={handleSubmit} type="submit" class={styles.login__button}>Login</button>
     
            {err && <p className={styles.errorTag}>{err}</p>}
            {errorForget && <p className="errorForgetTag">{errorForget}</p>}
            <a href="/loginstudent" class={styles.login_student} >Login as student</a>
         </form>
      </div>
      
        </div>
    )
}

export default Login_Admin