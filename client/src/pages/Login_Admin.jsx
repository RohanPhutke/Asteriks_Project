import React,{useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "./login_anand.jpeg";
import styles from "../styles/Loginstyle.module.scss"
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
        <div className={styles.auth}>
           <div class={styles.login} >
           <img src= {loginBg} alt="login imagae" className="login__img" />

         <form action="" class="login__form">
            <h1 class="login__title">Admin Login</h1>

            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" required class="login__input" id="login-email" name = "email" onChange={handleChange} placeholder=" "/>
                     <label for="login-email" class="login__label" >Email</label>
                  </div>
               </div>

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" name="password" onChange={handleChange} placeholder=" "/>
                     <label for="login-pass" class="login__label" >Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input" id="login-check"/>
                  <label for="login-check" class="login__check-label">Remember me</label>
               </div>

               <a  onClick={handleForget} class="login__forgot">Forgot Password?</a>
            </div>

           
            <button onClick={handleSubmit} type="submit" class="login__button">Login</button>
     
            {err && <p className="errorTag">{err}</p>}
            {errorForget && <p className="errorForgetTag">{errorForget}</p>}
            <a href="/loginstudent" class="login_student" >Login as student</a>
         </form>
      </div>
      
        </div>
    )
}

export default Login_Admin